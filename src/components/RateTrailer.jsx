import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../css/RateTrailer.module.css';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import StarRating from '../components/StarRating';
import { useNavigate } from 'react-router-dom';

// Rating trailer component

const RateTrailer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <p className={styles.returnTitle}>Peräkärry on nyt palautettu!</p>
      <div className={styles.checkMark}>
        <i className="bi bi-check-lg" id={styles.checkIcon}></i>
      </div>
      <StarRating />
      <div className={styles.ratingInput}>
        <InputGroup>
          <div className={styles.inputContainer}>
            <label>Anna palautetta</label>
            <Form.Control
              className={styles.textArea}
              as="textarea"
              aria-label="With textarea"
            />
          </div>
        </InputGroup>
        <div className={styles.sendButton}>
          <Button
            type="submit"
            id="proceedToPaymentButton"
            size="lg"
            onClick={handleClick}
          >
            Lähetä
          </Button>
        </div>
      </div>
    </>
  );
};

export default RateTrailer;
