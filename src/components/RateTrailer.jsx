import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../css/RateTrailer.module.css';
import {InputGroup, Form} from 'react-bootstrap';
import MainButton from './MainButton';
import {useNavigate} from "react-router-dom";

const RateTrailer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <>
      <div className={styles.checkMark}>
        <i className="bi bi-check-lg" id={styles.checkIcon}></i>
      </div>
      <div className={styles.stars}>
      </div>
      <div className={styles.ratingInput}>
        <InputGroup>
          <div className={styles.inputContainer}>
            <label>Anna palautetta</label>
            <Form.Control as="textarea" aria-label="With textarea" />
          </div>
        </InputGroup>
        <div className={styles.sendButton}>
          <MainButton buttonText="Lähetä" type="submit" size="lg" onClick={handleClick}></MainButton>
        </div>
      </div>
    </>
  );
}
export default RateTrailer;