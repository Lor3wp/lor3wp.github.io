import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import style from '../css/TimeButton.module.css';

function TimePeriodButton({
  buttonText,
  setSelectedTime,
  selectedTime,
  setSelectedStation,
  stationName,
  selectedStation,
}) {
  const handleClick = () => {
    setSelectedTime(buttonText);
    setSelectedStation(stationName);
    console.log(buttonText);
    console.log(selectedStation);
    console.log(selectedTime);
    console.log(stationName);
  };
  return (
    <>
      <Button
        variant="flat"
        className={`${
          selectedTime == buttonText && selectedStation == stationName
            ? style.selectedButton
            : ''
        }`}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </>
  );
}
TimePeriodButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  selectedStation: PropTypes.string.isRequired,
  selectedTime: PropTypes.string.isRequired,
  stationName: PropTypes.string.isRequired,
  setSelectedTime: PropTypes.func.isRequired,
  setSelectedStation: PropTypes.func.isRequired,
};
export default TimePeriodButton;
