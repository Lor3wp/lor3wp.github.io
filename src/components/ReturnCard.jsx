import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../css/ReturnTrailer.module.css';
import PropTypes from 'prop-types';
import RateTrailer from './RateTrailer';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Return trailer component

// TODO: Probably needs to prevent the user from going back to "RETURN" on page refresh when we get the backend in shape.
const ReturnCard = ({ clicked, onClick }) => {
  const navigate = useNavigate();

  const goToRentInfo = () => {
    navigate('/rent-info');
  };
  return (
    <>
      <Container className={styles.returnContainer}>
        {!clicked ? (
          <div className={styles.returnContainer}>
            <Button className={styles.backButton} onClick={goToRentInfo}>
              Takaisin
            </Button>
            <Card className={styles.returnCard}>
              <Card.Header className={styles.returnCardHeader}>
                Huom!
              </Card.Header>
              <Card.Body>
                <Card.Title>Ennen palautusta</Card.Title>
                <Card.Text>
                  Tuotteen tulee olla Sortti-asemalla! Myöhästyneestä
                  palautuksesta veloitetaan sopimusehtojen mukaisesti{' '}
                  <span style={{ color: '#008782' }}>40€</span>{' '}
                  myöhästymismaksu.
                </Card.Text>
                <Button
                  className={styles.returnButton}
                  variant="flat"
                  size="lg"
                  onClick={onClick}
                >
                  Palauta
                </Button>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <RateTrailer></RateTrailer>
        )}
      </Container>
    </>
  );
};

ReturnCard.propTypes = {
  clicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ReturnCard;
