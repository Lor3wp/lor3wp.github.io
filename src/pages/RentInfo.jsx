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

// TODO: Change the info inside the circle when the time is up
const RentInfoPage = () => {
  // TODO: Maybe there's a better way instead of doing multiple states?
  const [rentDate, setRentDate] = useState('17.09.2023');
  const [rentStartTime, setRentStartTime] = useState('13:00');
  const [rentEndTime, setRentEndTime] = useState('14:00');
  const [itemType, setItemType] = useState('Peräkärry');
  const [stationLocation, setStationLocation] = useState(
    'Kivikon Sortti-asema', //Jorvaksen Sortti-asema, Konalan Sortti-asema, Ruskeasannan Sortti-asema, Ämmässuon Sortti-asema, Koivukylän Sortti-pienasema
  );
  const [timeStarted, setTimeStarted] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // TODO: Write a logic to calculate time until rent starts using the date/time from api extracted from current date/time.
  const timeUntilRentStart = () => {
    return '3h';
  };

  // Event handlers for opening and closing the modal
  const handleOpenModal = () => setShowModal(true);

  // Use the "useEffect" hook to apply and remove body version class
  useEffect(() => {
    applyVersionClass2(); // Apply version 3 to the body
    return () => {
      removeVersionClass2(); // Remove version 3 from the body when the component unmounts
    };
  }, []);

  const rateItemPage = () => {
    toast.success('Tuote palautettu!');
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
                rentDate={rentDate}
                rentStartTime={rentStartTime}
                rentEndTime={rentEndTime}
                itemType={itemType}
                stationLocation={stationLocation}
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
      <GoogleMap stationLocation={stationLocation} />
    </>
  );
};

export default RentInfoPage;
