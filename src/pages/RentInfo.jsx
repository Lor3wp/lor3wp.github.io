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

// TODO: Get the rentStartTime from the api and start the countdown from there
// TODO: Start showing how much time left until rent start 24h before rent starts
const RentInfoPage = ({ handleItemReturned }) => {
  const rentInfo = {
    rentDate: '2023-09-17',
    rentStartTime: '2023-11-16T23:00:00',
    rentEndTime: '2023-11-17T23:00:00',
    itemType: 'Peräkärry',
    stationLocation: 'Kivikon Sortti-asema',
  };

  const [timeStarted, setTimeStarted] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const [canCancelRent, setCanCancelRent] = useState(true);

  const navigate = useNavigate();

  const currentTime = new Date();

  const endTimeMillis = new Date(rentInfo.rentEndTime).getTime();
  const currentTimeMillis = currentTime.getTime();

  // Rent time in hours and minutes
  const startTimeHours = new Date(rentInfo.rentStartTime).getHours();
  const startTimeMins = new Date(rentInfo.rentStartTime).getMinutes();
  const endTimeHours = new Date(rentInfo.rentEndTime).getHours();
  const endTimeMins = new Date(rentInfo.rentEndTime).getMinutes();

  const remainingTimeHours =
    (endTimeMillis - currentTimeMillis) / (1000 * 60 * 60);

  useEffect(() => {
    if (remainingTimeHours <= 24) {
      setCanCancelRent(false);
    }
  }, [remainingTimeHours]);

  // TODO: Write a logic to calculate time until rent starts using the date/time from api extracted from current date/time.
  const timeUntilRentStart = () => {
    return '3h';
  };

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
    toast.success('Tuote palautettu!');
    handleItemReturned();
    navigate('/rate-item', { replace: true });
  };

  const frontPage = () => {
    navigate('/', { replace: true });
    toast.success('Varaus peruutettu!');
  };

  // Warning popup modal
  const modalBodyContent = timeStarted ? (
    <p>
      Tuotteen tulee olla Sortti-asemalla! Myöhästyneestä palautuksesta
      veloitetaan sopimusehtojen mukaisesti
      <span style={{ color: '#008782' }}> 40€</span> myöhästymismaksu.
    </p>
  ) : (
    <p>Oletko varma, että haluat peruuttaa varauksen?</p>
  );

  // TODO: Change the text to be more informative
  const infoModalBodyContent = (
    <p>Peruutus ei onnistu jos varaukseen on 24h tai alle</p>
  );

  return (
    <>
      <PopUpWarningModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={timeStarted ? 'Ennen palautusta' : 'Peruuta varaus'}
        body={modalBodyContent}
        backButton="Takaisin"
        acceptButton={timeStarted ? 'Ymmärän' : 'Kyllä'}
        acceptButtonVariant={timeStarted ? 'success' : 'danger'}
        onPrimaryButtonClick={timeStarted ? rateItemPage : frontPage}
      />
      <PopUpInfoModal
        show={showInfoModal}
        title="Varauksen peruutus"
        body={infoModalBodyContent}
        buttonTxt="Sulje"
        onHide={() => setShowInfoModal(false)}
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
                rentStartTime={timeUntilRentStart()}
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
              Palauta peräkärry
            </Button>
          ) : (
            <Button
              variant="danger"
              className={styles.btn}
              onClick={handleOpenModal}
            >
              Peruuta varaus
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
