import { useState, useEffect } from 'react';
import { CircularCountdownTimer } from '../components/CircularCountdownTimer';
import { Container, Button, Stack } from 'react-bootstrap';
import { RentInfoCard } from '../components/RentInfoCard';
import PopUpWarningModal from '../components/PopUpWarningModal';
import { applyVersionClass2, removeVersionClass2 } from '../utils/BodyVersion';
import GoogleMap from '../components/GoogleMaps';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../css/RentInfoCard.module.css';
import PropTypes from 'prop-types';
import { PopUpInfoModal } from '../components/PopUpInfoModal';
import { Trans, useTranslation } from 'react-i18next';

// TODO: Timer circle restarting from the beginning if page refreshed
const RentInfoPage = ({ handleItemReturned }) => {
  const rentInfo = {
    rentDate: '2023-09-17',
    //rentStartTime: new Date(),
    rentStartTime: '2023-11-26T22:00:00',
    rentEndTime: '2023-11-26T07:00:00',
    itemType: 'Peräkärry',
    stationLocation: 'Kivikon Sortti-asema',
  };

  const [timeStarted, setTimeStarted] = useState(false);
  const [canCancelRent, setCanCancelRent] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [timerInfoText, setTimerInfoText] = useState('');

  const navigate = useNavigate();

  const { t } = useTranslation();

  const currentTime = new Date();
  const rentEndTime = new Date(rentInfo.rentEndTime);

  const differenceInMillisecondsUntilRentEnd = rentEndTime - currentTime;

  // Rent start and end time in hours and minutes
  const startTimeHours = new Date(rentInfo.rentStartTime).getHours();
  const startTimeMins = new Date(rentInfo.rentStartTime).getMinutes();
  const endTimeHours = new Date(rentInfo.rentEndTime).getHours();
  const endTimeMins = new Date(rentInfo.rentEndTime).getMinutes();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const rentStartTime = new Date(rentInfo.rentStartTime);

      const differenceInMillisecondsUntilRentStart =
        rentStartTime - currentTime;
      const remainingHoursUntilRentStart =
        differenceInMillisecondsUntilRentStart / (1000 * 60 * 60);
      const differenceInDaysUntilRentStart =
        differenceInMillisecondsUntilRentStart / (1000 * 60 * 60 * 24);

      const hoursUntil = Math.round(remainingHoursUntilRentStart);
      const daysUntil = Math.round(differenceInDaysUntilRentStart);

      let timerInfoText;
      if (differenceInDaysUntilRentStart >= 1) {
        timerInfoText = t('days_until', { daysUntil: daysUntil });
      } else {
        timerInfoText =
          hoursUntil == 0
            ? t('Varauksesi alkaa pian!')
            : t('hours_until', { hoursUntil: hoursUntil });
      }

      setCanCancelRent(!(remainingHoursUntilRentStart <= 24));
      setTimeStarted(currentTime.getTime() >= rentStartTime.getTime());
      setTimerInfoText(timerInfoText);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Handles opening and closing modals
  const handleOpenModal = () => {
    if (!timeStarted && !canCancelRent) {
      setShowInfoModal(true);
    } else {
      setShowModal(true);
    }
  };

  // Use the "useEffect" hook to apply and remove body version class
  useEffect(() => {
    applyVersionClass2(); // Apply version 3 to the body
    return () => {
      removeVersionClass2(); // Remove version 3 from the body when the component unmounts
    };
  }, []);

  const rateItemPage = () => {
    toast.success(t('Tuote palautettu!'));
    handleItemReturned();
    navigate('/rate-item', { replace: true });
  };

  const frontPage = () => {
    toast.success(t('Varaus peruutettu!'));
    navigate('/', { replace: true });
  };

  // Warning popup modal
  const modalBodyContent = timeStarted ? (
    <p>
      <Trans i18nKey="late_cancel_warning_paragraph">
        Tuotteen tulee olla Sortti-asemalla! Myöhästyneestä palautuksesta
        veloitetaan sopimusehtojen mukaisesti
        <span style={{ color: '#008782' }}> 40€</span> myöhästymismaksu.
      </Trans>
    </p>
  ) : (
    <p>{t('Oletko varma, että haluat peruuttaa varauksen?')}</p>
  );

  // TODO: Change the text to be more informative
  const infoModalBodyContent = (
    <div>
      <p>
        {t(
          'Palvelun peruuttaminen ei ole mahdollista, jos vuokra-ajan alkamiseen on jäljellä 24 tuntia tai vähemmän.',
        )}
      </p>
      <p>
        {t(
          'Erityistilanteissa suosittelemme ottamaan suoraan yhteyttä asiakaspalveluumme:',
        )}
      </p>
      <div>
        <h5>{t('Asiakaspalvelun palveluajat puhelimitse')}</h5>
        <p>
          {t('ma, ke ja pe klo 8.30–15.30')}
          <br></br> {t('ti klo 8.30–11.00')}
          <br></br> {t('to klo 13.00–15.30')}
        </p>
        <h5>{t('Yhteystiedot')}</h5>
        <p>
          {t('Puh.')} 09 1561 2110<br></br>Ilmalantori 1, 00240 Helsinki PL 100,
          <br></br> 00066 HSY
        </p>
      </div>
    </div>
  );

  return (
    <>
      <PopUpWarningModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={
          timeStarted ? `${t('Ennen palautusta')}` : `${t('Peruuta varaus')}`
        }
        body={modalBodyContent}
        backButton={t('Takaisin')}
        acceptButton={
          timeStarted ? `${t('Ymmärrän')}` : `${t('Kyllä, poista varaus')}`
        }
        acceptButtonVariant={timeStarted ? 'success' : 'danger'}
        onPrimaryButtonClick={timeStarted ? rateItemPage : frontPage}
      />
      <PopUpInfoModal
        show={showInfoModal}
        onHide={() => setShowInfoModal(false)}
        title={t('Varauksen peruutus')}
        body={infoModalBodyContent}
        buttonTxt={t('Sulje')}
      />
      <Container className={styles.rentInfoContainer}>
        <h1 className={styles.headerInfo}>{t('Varauksesi')}</h1>
        <Stack gap={5}>
          <Stack
            direction="horizontal"
            gap={5}
            className={styles.infoContainer}
          >
            <div>
              <CircularCountdownTimer
                isPlaying={timeStarted}
                timerInfoText={timerInfoText}
                duration={differenceInMillisecondsUntilRentEnd / 1000}
                timerText={t('jäljellä')}
              />
            </div>
            <div>
              <RentInfoCard
                rentDate={rentInfo.rentDate}
                rentStartTime={`${startTimeHours}:${startTimeMins}`}
                rentEndTime={`${endTimeHours}:${endTimeMins}`}
                itemType={rentInfo.itemType}
                stationLocation={rentInfo.stationLocation}
              />
            </div>
          </Stack>
          {timeStarted ? (
            <Button
              className={styles.btn}
              variant="success"
              onClick={handleOpenModal}
            >
              {t('Palauta peräkärry')}
            </Button>
          ) : (
            <Button
              variant="danger"
              className={styles.btn}
              onClick={handleOpenModal}
            >
              {t('Peru peräkärryn varaus')}
            </Button>
          )}
        </Stack>
      </Container>
      <GoogleMap stationLocation={rentInfo.stationLocation} />
    </>
  );
};

RentInfoPage.propTypes = {
  handleItemReturned: PropTypes.func,
};

export default RentInfoPage;
