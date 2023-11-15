import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import style from '../css/TimeButton.module.css';

function TimePeriodButton({
  buttonText,
  setSelectedTime,
  selectedTime,
  stationName,
}) {
  const handleClick = () => {
    setSelectedTime(buttonText);
    console.log(buttonText);
    console.log(selectedTime);
    console.log(stationName);
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
  selectedStation: PropTypes.string.isRequired,
  selectedTime: PropTypes.string.isRequired,
  stationName: PropTypes.string.isRequired,
  setSelectedTime: PropTypes.func.isRequired,
  setSelectedStation: PropTypes.func.isRequired,
};

export default TimePeriodButton;
