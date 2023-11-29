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
    stationsData,
    selectedDate,
    setSelectedDate,
    selectedStationAndTime,
    setSelectedStationAndTime,
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
      Object.keys(selectedStationAndTime).length === 0 ||
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
        title={t('Haluatko varmasti poistua sivustolta?')}
        body={t('Tekemiäsi muutoksia ei tallenneta.')}
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
          <span className={rentStyle.calendarNote}>
            {t('*harmaalla merkattuina päivinä ei ole vuokrattavia aikoja')}
          </span>
        </div>
        <hr className={rentStyle.hr} />
        <p>{t('Valitse sinulle sopiva 3 tunnin vuokraus ajankohta tästä:')}</p>
        <div className={rentStyle.selectTimeBox}>
          {stationsData.map((station) => {
            if (station.selected) {
              return (
                <SelectTime
                  timeSlots={station.timeSlots}
                  setSelectedStationAndTime={setSelectedStationAndTime}
                  selectedStationAndTime={selectedStationAndTime}
                  stationName={station.stationName}
                  key={station.stationName}
                />
              );
            }
          })}
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
