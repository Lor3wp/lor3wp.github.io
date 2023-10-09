import Button from 'react-bootstrap/Button';
import styles from '../css/MainButton.module.css';
import PropTypes from 'prop-types';

const MainButton = ({ buttonText }) => {
  return (
    <>
      <Button variant="flat" size="l" className={styles.btn}>
        {buttonText}
      </Button>
    </>
  );
}

MainButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default MainButton;