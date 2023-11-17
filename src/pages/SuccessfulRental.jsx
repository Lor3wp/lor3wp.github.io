import { useEffect } from 'react';
import SuccessIllustration from '../assets/SuccessIllustration.svg';
import { applyVersionClass2, removeVersionClass2 } from '../utils/BodyVersion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from '../css/SuccessfulRental.module.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const SuccessfulRentalPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/rent-info');
  };

  // Use the "useEffect" hook to apply and remove body version class
  useEffect(() => {
    applyVersionClass2(); // Apply version 3 to the body
    return () => {
      removeVersionClass2(); // Remove version 3 from the body when the component unmounts
    };
  }, []);

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

      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>
            Peräkärryn varaus {''}
            <span style={{ color: '#469C56' }}>onnistui!</span>
          </Card.Title>
          <Card.Text>
            Lähetimme sähköpostiisi ohjeet ja varausvahvistuksen.
          </Card.Text>
        </Card.Body>
      </Card>

      <Button
        className="proceedToPaymentButton"
        type="submit"
        id="proceedToPaymentButton"
        size="lg"
        onClick={handleClick}
      >
        Varauksen tiedot
      </Button>
    </Container>
  );
};

export default SuccessfulRentalPage;
