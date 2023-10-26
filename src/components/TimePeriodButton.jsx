import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

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
  setSelectedTime: PropTypes.func.isRequired,
};
export default TimePeriodButton;
