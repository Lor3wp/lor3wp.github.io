import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import style from '../css/TimeButton.module.css';
import useApi from '../hooks/useApi';
import { useStepper } from '../hooks/useStepper';

function TimePeriodButton({
  buttonText,
  setSelectedTime,
  selectedTime,
  stationName,
  randomUUID,
}) {
  const { postRequest } = useApi();
  const { selectedDate, selectedProduct, selectAdaptor } = useStepper();

  const handleClick = async () => {
    setSelectedTime(stationName, buttonText);
    try {
      const bodyData = {
        uuid: randomUUID,
        station: stationName,
        timeSlot: buttonText,
        product: selectedProduct,
        date: selectedDate,
        isAdapter: selectAdaptor,
      };
      const isEmptyField = Object.values(bodyData).some((value) => !value);
      if (isEmptyField) {
        const response = await postRequest('add-temp-reservation', bodyData);
        console.log('TimePeriodButton.jsx 30 ', response);
      }
    } catch (error) {
      console.error('api error: ', error);
    }
  };

  return (
    <>
      <Button
        variant="flat"
        className={
          selectedTime == buttonText
            ? style.selectedButton
            : style.unselectedButton
        }
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </>
  );
}

TimePeriodButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  selectedTime: PropTypes.string,
  stationName: PropTypes.string.isRequired,
  setSelectedTime: PropTypes.func.isRequired,
  setSelectedStation: PropTypes.func,
  randomUUID: PropTypes.string,
};

export default TimePeriodButton;
