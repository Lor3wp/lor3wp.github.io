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
    setSelectedTime(stationName, buttonText);
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
};

export default TimePeriodButton;
