import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../css/ReturnTrailer.module.css';
import PropTypes from 'prop-types';
import RateTrailer from './RateTrailer';


const ReturnCard = ( {clicked, onClick} ) => {

  return(
    <>    {!clicked ?
    <div className={styles.returnContainer}>
    <Card>
      <Card.Header>Huom!</Card.Header>
      <Card.Body>
        <Card.Title>Ennen palautusta</Card.Title>
        <Card.Text>
        tuotteen tulee olla Sortti-asemalla! 
        Myöhästyneestä palautuksesta veloitetaan sopimusehtojen mukaisesti <span style={{color: "#008782"}}>40€</span> myöhästymismaksu.
        </Card.Text>
        <Button className={styles.returnButton} variant="flat" size="lg" onClick={onClick}
>Palauta</Button>
      </Card.Body>
    </Card>
    </div>
    : 
    <RateTrailer></RateTrailer>
    }
    </>
  );
}
ReturnCard.propTypes = {
  clicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ReturnCard;