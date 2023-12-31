import { useState, useEffect } from 'react';
import { CircularCountdownTimer } from '../components/CircularCountdownTimer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { RentInfoCard } from '../components/RentInfoCard';
import PopUpWarningModal from '../components/PopUpWarningModal';
import { applyVersionClass2, removeVersionClass2 } from '../utils/BodyVersion';
import GoogleMap from '../components/GoogleMaps';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../css/RentInfoCard.module.css';
import PropTypes from 'prop-types';
import { PopUpInfoModal } from '../components/PopUpInfoModal';
import { Trans, useTranslation } from 'react-i18next';
import useApi from '../hooks/useApi';
import Spinner from 'react-bootstrap/Spinner';

const RentInfoPage = ({ handleItemReturned }) => {
  const [timeStarted, setTimeStarted] = useState(false);
  const [canCancelRent, setCanCancelRent] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [timerInfoText, setTimerInfoText] = useState('');
  const [loading, setLoading] = useState(true);
  const [rentInfo, setRentInfo] = useState({
    timeSlot: 'Loading...',
    product: 'Loading...',
    station: 'Loading...',
  });

  const navigate = useNavigate();

  const { t } = useTranslation();
  const { id } = useParams();
  const { getRentById, updateRent, deleteRent, error } = useApi();

  // Get rent date and apply the time slot to it
  const rentStartDate = new Date(rentInfo.date);
  const [startHour, endHour] = rentInfo.timeSlot?.split('-') || [];
  const rentEndTime = new Date(rentStartDate.setHours(endHour));

  const currentTime = new Date();

  const differenceInMillisecondsUntilRentEnd = rentEndTime - currentTime;

  const calculateTimerInfo = () => {
    // Calculate the time until the rent starts
    const currentTime = new Date();
    const rentStartTime = new Date(rentStartDate.setHours(startHour));

    const differenceInMillisecondsUntilRentStart = rentStartTime - currentTime;
    const remainingHoursUntilRentStart =
      differenceInMillisecondsUntilRentStart / (1000 * 60 * 60);
    const differenceInDaysUntilRentStart =
      differenceInMillisecondsUntilRentStart / (1000 * 60 * 60 * 24);

    const hoursUntil = Math.round(remainingHoursUntilRentStart);
    const daysUntil = Math.round(differenceInDaysUntilRentStart);

    // Set the timer info text
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
  };

  const getRentInfo = async () => {
    try {
      setLoading(true);
      const { data } = await getRentById(id);

      if (data.isItemReturned === true) {
        navigate('/', { replace: true });
        return;
      }

      setRentInfo(data);
      setLoading(false);
    } catch (err) {
      console.log('get rent info error:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRentInfo();
  }, []);

  useEffect(() => {
    calculateTimerInfo();
    const interval = setInterval(() => {
      calculateTimerInfo();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [getRentById]);

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

  const handleItemReturn = async () => {
    try {
      await updateRent(id, { isItemReturned: true });
      handleItemReturned();
      toast.success(t('Tuote palautettu!'));
      navigate(`/rate-item/${id}`, { replace: true });
    } catch (err) {
      console.error('Rent status update error', err);
    }
  };

  const handleCancelRent = async () => {
    try {
      await deleteRent(id);
      toast.success(t('Varaus peruutettu!'));
      navigate('/', { replace: true });
    } catch (err) {
      console.log('cancel rent err:', err);
      toast.error(t('Varauksen peruutus epäonnistui!'));
    }
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

  if (loading)
    return (
      <Spinner
        style={{ marginTop: '5rem', color: '#008782' }}
        animation="grow"
      />
    );

  if (error)
    return <h5 style={{ marginTop: '5rem' }}>{error.response.data.message}</h5>;

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
        onPrimaryButtonClick={timeStarted ? handleItemReturn : handleCancelRent}
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
                rentDate={
                  (!isNaN(rentStartDate) && rentStartDate.toDateString()) ||
                  'Loading...'
                }
                timeSlot={rentInfo.timeSlot}
                itemType={rentInfo.product}
                stationLocation={rentInfo.station}
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
      <GoogleMap stationLocation={rentInfo.station} />
    </>
  );
};

RentInfoPage.propTypes = {
  handleItemReturned: PropTypes.func,
};

export default RentInfoPage;
