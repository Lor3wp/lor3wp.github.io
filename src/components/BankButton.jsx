import PropTypes from 'prop-types';
import styles from '../css/BankButton.module.css';
import { useNavigate } from "react-router-dom";

const BankButton = ({ logo, bankName }) => {
  const navigate = useNavigate();
  
  const handleClick = (bankName) => {
    if (bankName !== "HSY") {
      navigate("/rent-successful");
    } else {
      navigate("/");
    }
  }

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.bankButton} onClick={() => handleClick(bankName)}>
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
