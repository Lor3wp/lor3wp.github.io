import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import styles from '../css/GorentButton.module.css';

function GoRentButton({ buttonText }) {
  return (
    <>

      <Button className={styles.gotorentbutton} variant="flat" size="l">
        {buttonText}
      </Button>
    </>
  );
}

GoRentButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default GoRentButton;