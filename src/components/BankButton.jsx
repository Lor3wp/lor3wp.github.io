import PropTypes from 'prop-types';
import styles from '../css/BankButton.module.css';

const BankButton = ({logo, bankName}) => {
  return (
     <div className={styles.buttonContainer}>
      <button className={styles.bankButton}>
        <img
          src={logo}
          height="100%"
          className={bankName}
          alt="Logo"
        />
      </button>
     </div>
  );
}

BankButton.propTypes = {
  logo: PropTypes.any.isRequired,
  bankName: PropTypes.string
};

export default BankButton;