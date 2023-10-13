import Button from 'react-bootstrap/Button';
import styles from '../css/MainButton.module.css';
import PropTypes from 'prop-types';

const MainButton = ({ buttonText, type, size, onClick }) => {
  return (
    <>
      <Button variant="flat" size={size} className={styles.btn} type={type} onClick={onClick}>
        {buttonText}
      </Button>
    </>
  );
};

MainButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MainButton;
