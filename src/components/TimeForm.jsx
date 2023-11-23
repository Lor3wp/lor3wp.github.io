import { useState } from 'react';
import RentCalendar from '../components/Calendar';
import SelectTime from '../components/SelectTime';
import timeStyle from '../css/SelectTime.module.css';
import SelectProduct from '../components/SelectProduct';
import rentStyle from '../css/RentForm.module.css';
import Button from 'react-bootstrap/Button';
import PopUpWarningModal from '../components/PopUpWarningModal';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { ChevronCompactLeft } from 'react-bootstrap-icons';
import { ChevronCompactRight } from 'react-bootstrap-icons';
import { useStepper } from '../hooks/useStepper';
import { useTranslation } from 'react-i18next';

const ProductAndTime = ({
  onProductAndTimeSelected,
  onPrevStep,
  handleWarningModal,
}) => {
  const [showWarningModal, setShowWarningModal] = useState(false);

  const { t } = useTranslation();

  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedProduct,
  } = useStepper();

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
    if (
      selectedTime === '' ||
      selectedDate === null ||
      selectedProduct === ''
    ) {
      handleWarningModal();
    } else {
      onProductAndTimeSelected();
    }
  };

  const frontPage = () => {
    navigate('/', { replace: true });
  };

  const handleOpenWarningModal = () => {
    setShowWarningModal(true);
  };

  return (
    <>
      <PopUpWarningModal
        show={showWarningModal}
        onHide={() => setShowWarningModal(false)}
        title={t('Peruuta varaus')}
        body={t('Oletko varma, että haluat peruuttaa varauksen?')}
        backButton={t('Takaisin')}
        acceptButton={t('Kyllä')}
        acceptButtonVariant="danger"
        onPrimaryButtonClick={frontPage}
      />
      <div className={rentStyle.rentBox}>
        <div className={rentStyle.productBox}>
          <SelectProduct />
        </div>
        <hr />
        <div className={rentStyle.calendarBox}>
          <h2 className={timeStyle.header}>{t('Valitse päivä')}</h2>
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
          />
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
              {t('Edellinen')}
            </Button>
            <Button variant="outline-danger" onClick={handleOpenWarningModal}>
              {t('Peruuta')}
            </Button>
          </div>
          <Button size="lg" onClick={handleSubmit}>
            {t('Täytä henkilötiedot')}
            <ChevronCompactRight />
          </Button>
        </div>
      </div>
    </>
  );
};

ProductAndTime.propTypes = {
  onProductAndTimeSelected: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  handleWarningModal: PropTypes.func,
};

export default ProductAndTime;
