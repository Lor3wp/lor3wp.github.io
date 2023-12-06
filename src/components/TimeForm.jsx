import { useEffect, useState } from 'react';
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
import { useApi } from '../hooks/useApi';
// create random uuid for user identification in temporary reservation
// fill with Date values to disable those dates from caledar
const futureDates = [];
const ProductAndTime = ({
  onProductAndTimeSelected,
  onPrevStep,
  handleWarningModal,
  randomUUID,
}) => {
  const { deleteRequest } = useApi();
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

  const navigate = useNavigate();

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

  // TODO add before unload delete temp reservation with uuid
  useEffect(() => {
    const sendDeleteRequestOnUnload = async () => {
      window.addEventListener('beforeunload', async () => {
        try {
          const responce = await deleteRequest(
            'delete-temp-reservation/',
            randomUUID,
          );
          console.log('TimeForm.jsx 72 ', responce);
        } catch (error) {
          console.error('Error sending DELETE request:', error);
        }
      });
    };

    sendDeleteRequestOnUnload();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', sendDeleteRequestOnUnload);
    };
  }, []);
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
          {stationsData.map((station) => {
            if (station.selected) {
              return (
                <SelectTime
                  randomUUID={randomUUID}
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
  randomUUID: PropTypes.string.isRequired,
};

export default ProductAndTime;
