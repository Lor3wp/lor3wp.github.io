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
    rentStartTime: '2023-11-25T02:00:00',
    rentEndTime: '2023-11-25T07:00:00',
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
    <p>
      {t(
        'Varauksen peruutus ei onnistu, jos vuokran alkamiseen on 24 tuntia tai vähemmän.',
      )}
    </p>
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
        <h1 className={styles.headerInfo}>Varauksesi</h1>
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
