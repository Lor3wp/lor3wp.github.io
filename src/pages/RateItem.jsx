import { useEffect } from 'react';
import { applyVersionClass2, removeVersionClass2 } from '../utils/BodyVersion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import StarRating from '../components/StarRating';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import HsyLogo from '../assets/hsy-drops.svg';
import styles from '../css/RateItem.module.css';
import { useTranslation } from 'react-i18next';

const RateItemPage = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleClick = () => {
    toast.success(t('Palaute lähetetty!'));
    navigate('/', { replace: true });
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
        <StarRating className={styles.starRatingContainer} />
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
        <div className={styles.sendButton}>
          <Button
            type="submit"
            id="proceedToPaymentButton"
            size="lg"
            onClick={handleClick}
          >
            {t('Lähetä')}
          </Button>
        </div>
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
