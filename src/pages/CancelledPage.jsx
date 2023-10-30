import bgImage from '../assets/frontpagepicture.webp';
import { Button, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { applyVersionClass, removeVersionClass } from '../utils/BodyVersion';
import { useEffect } from 'react';
import styles from '../css/Cancelled.module.css';

//Reservation cancelled succesfully page
const Cancelled = () => {
  const navigate = useNavigate();

  const frontPage = () => {
    navigate('/', { replace: true });
  };
  useEffect(() => {
    applyVersionClass();
    return () => {
      removeVersionClass();
    };
  }, []);

  return (
    <div
      className={styles.backgroundImage}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container className={styles.contentContainer}>
        <Col>
          <p>Varauksesi on peruutettu onnistuneesti!</p>
        </Col>
        <Col style={{ marginTop: '50px' }}>
          <Button onClick={frontPage}>Etusivulle</Button>
        </Col>
      </Container>
    </div>
  );
};

export default Cancelled;
