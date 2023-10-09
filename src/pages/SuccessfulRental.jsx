import SuccessIllustration from '../assets/SuccessIllustration.svg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from '../css/successfulRental.module.css';

export const SuccessfulRental = () => {
  return (
    <Container>
      <Image
        className={styles.successIllustration}
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
      <Button className={styles.btn} variant="primary">
        Varauksen tiedot
      </Button>
    </Container>
  );
};
