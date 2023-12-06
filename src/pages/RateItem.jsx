import { useEffect, useState } from 'react';
import { applyVersionClass2, removeVersionClass2 } from '../utils/BodyVersion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import StarRating from '../components/StarRating';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import HsyLogo from '../assets/hsy-drops.svg';
import styles from '../css/RateItem.module.css';
import { useTranslation } from 'react-i18next';
import useApi from '../hooks/useApi';

const RateItemPage = () => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();

  const { t } = useTranslation();
  const { id } = useParams();
  const { updateRent } = useApi();

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSendFeedback = async () => {
    const feedbackValue = document.querySelector('textarea').value;
    if (feedbackValue === '') {
      toast.info(t('Ole hyvä ja kirjoita palautetta ennen lähettämistä!'));
      return;
    }

    const updatedRentData = {
      rating: rating,
      feedback: feedbackValue,
    };

    try {
      setLoading(true);
      await updateRent(id, updatedRentData);
      toast.success(t('Palaute lähetetty!'));
      setLoading(false);
      navigate('/', { replace: true });
    } catch (err) {
      setLoading(false);
      console.error('Feedback error', err);
      toast.error(t('Palautteen lähettäminen epäonnistui!'));
    }
  };

  // Use the "useEffect" hook to apply and remove body version class
  useEffect(() => {
    applyVersionClass2(); // Apply version 3 to the body
    return () => {
      removeVersionClass2(); // Remove version 3 from the body when the component unmounts
    };
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.returnTitle}>
          {t('Peräkärry on nyt palautettu!')}
        </h1>
        <div className={styles.checkMark}>
          <i className="bi bi-check-lg" id={styles.checkIcon}></i>
        </div>
        <StarRating
          className={styles.starRatingContainer}
          handleRating={handleRating}
        />
        <InputGroup className={styles.inputGroupContainer}>
          <div>
            <label>{t('Anna palautetta')}</label>
            <Form.Control
              className={styles.textArea}
              as="textarea"
              aria-label="With textarea"
            />
          </div>
        </InputGroup>
        <Button
          className={styles.sendButton}
          type="submit"
          size="lg"
          disabled={loading}
          onClick={handleSendFeedback}
        >
          {loading && (
            <Spinner
              aria-hidden="true"
              role="status"
              size="sm"
              as="span"
              animation="grow"
            />
          )}{' '}
          {t('Lähetä')}
        </Button>
      </div>

      <div className={styles.logoBackgroundContainer}>
        <img
          className={styles.backgroundLogo}
          src={HsyLogo}
          alt="HSY Logo"
        ></img>
      </div>
    </div>
  );
};

export default RateItemPage;
