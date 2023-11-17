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

// TODO: Timer circle restarting from the beginning if page refreshed
const RentInfoPage = ({ handleItemReturned }) => {
  const rentInfo = {
    rentDate: '2023-09-17',
    rentStartTime: new Date(),
    rentEndTime: '2023-11-17T23:30:00',
    itemType: 'Peräkärry',
    stationLocation: 'Kivikon Sortti-asema',
  };

  const [timeStarted, setTimeStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const [canCancelRent, setCanCancelRent] = useState(true);

  const navigate = useNavigate();

  const currentTime = new Date();
  const rentStartTime = rentInfo.rentStartTime;
  const endTime = new Date(rentInfo.rentEndTime);

  const differenceInMilliseconds = endTime - currentTime;
  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  const endTimeMillis = new Date(rentInfo.rentEndTime).getTime();
  const currentTimeMillis = currentTime.getTime();

  const remainingTimeHours =
    (endTimeMillis - currentTimeMillis) / (1000 * 60 * 60);

  // Rent time in hours and minutes
  const startTimeHours = rentInfo.rentStartTime.getHours();
  const startTimeMins = rentInfo.rentStartTime.getMinutes();
  const endTimeHours = new Date(rentInfo.rentEndTime).getHours();
  const endTimeMins = new Date(rentInfo.rentEndTime).getMinutes();

  const timeUntilRentStart = () => {
    const dayUntil = Math.floor(differenceInDays).toString();
    const hoursUntil = Math.round(differenceInHours).toString();

    if (differenceInDays >= 1) {
      return `Alkaa ${dayUntil} päivän päästä!`;
    } else {
      return hoursUntil == 0
        ? 'Varauksesi alkaa pian!'
        : `Alkaa ${hoursUntil} tunnin päästä!`;
    }
  };

  useEffect(() => {
    if (remainingTimeHours <= 24) {
      setCanCancelRent(false);
    }
  }, [remainingTimeHours]);

  setInterval(() => {
    if (currentTime.getTime() === rentStartTime.getTime()) {
      setTimeStarted(true);
    }
  }, 1000);

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
    <p>
      Varauksen peruutus ei onnistu, jos vuokran alkamiseen on 24 tuntia tai
      vähemmän.
    </p>
  );

  return (
    <>
      <PopUpWarningModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={timeStarted ? 'Ennen palautusta' : 'Peruuta varaus'}
        body={modalBodyContent}
        backButton="Takaisin"
        acceptButton={timeStarted ? 'Ymmärrän' : 'Kyllä, poista varaus'}
        acceptButtonVariant={timeStarted ? 'success' : 'danger'}
        onPrimaryButtonClick={timeStarted ? rateItemPage : frontPage}
      />
      <PopUpInfoModal
        show={showInfoModal}
        onHide={() => setShowInfoModal(false)}
        title="Varauksen peruutus"
        body={infoModalBodyContent}
        buttonTxt="Sulje"
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
                timeUntilRentStart={timeUntilRentStart()}
                duration={differenceInMilliseconds / 1000}
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
              Peru peräkärryn varaus
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
