import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../css/RateTrailer.module.css';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import StarRating from '../components/StarRating';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Rating trailer component

const RateTrailer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    toast.success('Viestisi on lähetetty!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
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
        <InputGroup className={styles.inputGroupContainer}>
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
            className={styles.sendFeedbackBtn}
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
