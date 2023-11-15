import { useState } from 'react';
import RentCalendar from '../components/Calendar';
import SelectTime from '../components/SelectTime';
import timeStyle from '../css/SelectTime.module.css';
import SelectProduct from '../components/SelectProduct';
import rentStyle from '../css/RentForm.module.css';
import Button from 'react-bootstrap/Button';
import PopUpWarningModal from '../components/PopUpWarningModal';
import PopUpInfoModal from '../components/PopUpWarningModal';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { ChevronCompactLeft } from 'react-bootstrap-icons';
import { ChevronCompactRight } from 'react-bootstrap-icons';
import { useStepper } from '../hooks/useStepper';

const ProductAndTime = ({ onProductAndTimeSelected, onPrevStep }) => {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } =
    useStepper();

  // values will be used in future
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  const futureDates = [];

  const navigate = useNavigate();

  // TODO: Where do we need that? Seems unnecessary.
  for (let i = 1; i < 4; i++) {
    const randomDate = new Date(currentYear, currentMonth, currentDay + i);
    futureDates.push(randomDate);
  }

  // handling the button click for selecting a time and date
  const handleSubmit = () => {
    if (selectedTime === '' || selectedDate === null) {
      handleOpenInfoModal();
    } else {
      onProductAndTimeSelected();
    }
  };

  const frontPage = () => {
    navigate('/', { replace: true });
    toast.success('Varaus peruutettu!');
  };

  const handleOpenWarningModal = () => {
    setShowWarningModal(true);
  };

  const handleOpenInfoModal = () => {
    setShowInfoModal(true);
  };

  return (
    <>
      <PopUpWarningModal
        show={showWarningModal}
        onHide={() => setShowWarningModal(false)}
        title="Peruuta varaus"
        body="Oletko varma, että haluat peruuttaa varauksen?"
        backButton="Takaisin"
        acceptButton="Kyllä"
        acceptButtonVariant="danger"
        onPrimaryButtonClick={() => {
          setShowWarningModal(false);
          frontPage();
        }}
      />
      <PopUpInfoModal
        show={showInfoModal}
        onHide={() => setShowInfoModal(false)}
        body="Valitse tuote, ajankohta ja asema ennen kuin jatkat."
        acceptButton="Takaisin"
        acceptButtonVariant="danger"
        onPrimaryButtonClick={() => {
          setShowInfoModal(false);
        }}
      />
      <div className={rentStyle.rentBox}>
        <div className={rentStyle.productBox}>
          <SelectProduct />
        </div>
        <hr />
        <div className={rentStyle.calendarBox}>
          <h2 className={timeStyle.header}>Valitse päivä</h2>
          <RentCalendar
            futureDates={futureDates}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <hr className={rentStyle.hr} />
        <div className={rentStyle.selectTimeBox}>
          <SelectTime
            setSelectedTime={setSelectedTime}
            selectedTime={selectedTime}
            stationName={'Kivikko'}
          ></SelectTime>
          {/* <SelectTime
            selectedTime={selectedTime}
            setSelectedStation={setSelectedStation}
            selectedStation={selectedStation}
            setSelectedTime={setSelectedTime}
            stationName={'Konala'}
          ></SelectTime>
          <SelectTime
            selectedTime={selectedTimeSlot}
            setSelectedStation={setSelectedStation}
            setSelectedTime={setSelectedTimeSlot}
            selectedStation={selectedStation}
            stationName={'Ruskeasanta'}
          ></SelectTime>
          <SelectTime
            selectedTime={selectedTimeSlot}
            setSelectedStation={setSelectedStation}
            setSelectedTime={setSelectedTimeSlot}
            selectedStation={selectedStation}
            stationName={'Jorvas'}
          ></SelectTime>
          <SelectTime
            selectedTime={selectedTimeSlot}
            setSelectedStation={setSelectedStation}
            setSelectedTime={setSelectedTimeSlot}
            selectedStation={selectedStation}
            stationName={'Ämmässuo'}
          ></SelectTime>
          <SelectTime
            selectedTime={selectedTimeSlot}
            setSelectedStation={setSelectedStation}
            setSelectedTime={setSelectedTimeSlot}
            selectedStation={selectedStation}
            stationName={'Koivukylä'}
          ></SelectTime> */}
        </div>
        <div className={rentStyle.buttonsContainer}>
          <div className={rentStyle.leftButtons}>
            <Button variant="outline-primary" onClick={onPrevStep}>
              <ChevronCompactLeft />
              Edellinen
            </Button>
            <Button variant="outline-danger" onClick={handleOpenWarningModal}>
              Peruuta
            </Button>
          </div>
          <Button size="lg" onClick={handleSubmit}>
            Täytä henkilötiedot
            <ChevronCompactRight />
          </Button>
        </div>

        {/* <p>
          selecte date: {selectedDate.toLocaleDateString()} <br></br>selected
          time: {selectedTime}
        </p> */}
      </div>
    </>
  );
};

ProductAndTime.propTypes = {
  onProductAndTimeSelected: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
};

export default ProductAndTime;
