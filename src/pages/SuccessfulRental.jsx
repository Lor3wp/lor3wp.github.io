import { useEffect, useState } from 'react';
import SuccessIllustration from '../assets/SuccessIllustration.svg';
import { applyVersionClass2, removeVersionClass2 } from '../utils/BodyVersion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from '../css/SuccessfulRental.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Trans, useTranslation } from 'react-i18next';
import useApi from '../hooks/useApi';
import { Spinner } from 'react-bootstrap';

const SuccessfulRentalPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();
  const { id } = useParams();
  const { getRentById, error } = useApi();

  const handleClick = () => {
    navigate(`/rent-info/${id}`, { replace: true });
  };

  const getRentInfo = async () => {
    try {
      setLoading(true);
      await getRentById(id);
      setLoading(false);
    } catch (err) {
      console.log('get rent info error:', err);
      setLoading(false);
      navigate('/', { replace: true });
    }
  };

  if (error) navigate('/', { replace: true });

  useEffect(() => {
    getRentInfo();
  }, []);

  // Use the "useEffect" hook to apply and remove body version class
  useEffect(() => {
    applyVersionClass2(); // Apply version 3 to the body
    return () => {
      removeVersionClass2(); // Remove version 3 from the body when the component unmounts
    };
  }, []);

  if (loading)
    return (
      <Spinner
        style={{ marginTop: '5rem', color: '#008782' }}
        animation="grow"
      />
    );

  return (
    <Container>
      <Image
        className={styles.successIllustration}
        draggable="false"
        src={SuccessIllustration}
        alt="success illustration"
        id="successIllustration"
        width={425}
      />
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title>
              <Trans i18nKey="successful_card_title">
                Peräkärryn varaus
                <span style={{ color: '#469C56' }}>onnistui!</span>
              </Trans>
            </Card.Title>
            <Card.Text>
              {t('Lähetimme sähköpostiisi ohjeet ja varausvahvistuksen.')}
            </Card.Text>
            <Button
              className="proceedToPaymentButton"
              type="submit"
              id="proceedToPaymentButton"
              size="lg"
              onClick={handleClick}
            >
              {t('Varauksen tiedot')}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default SuccessfulRentalPage;
