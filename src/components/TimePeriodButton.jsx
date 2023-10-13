import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import '../css/TimePeriodButton.css';

function TimePeriodButton({ buttonText, setSelectedTime }) {
  const handleClick = () => {
    setSelectedTime(buttonText);
  };
  return (
    <>
      <Button variant="flat" onClick={handleClick}>
        {buttonText}
      </Button>
    </>
  );
}

TimePeriodButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  setSelectedTime: PropTypes.func,
};

export default TimePeriodButton;
