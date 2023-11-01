import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import styles from '../css/RentInfoCard.module.css';
import PropTypes from 'prop-types';
import {
  InfoCircleFill,
  TelephoneFill,
  Calendar2Event,
  ClockFill,
  GeoAltFill,
  TruckFrontFill,
} from 'react-bootstrap-icons';
import { PopUpInfoModal } from './PopUpInfoModal';

//Rent-info card component
export const RentInfoCard = ({
  rentDate,
  rentStartTime,
  rentEndTime,
  itemType,
  stationLocation,
}) => {
  const [modalShow, setModalShow] = useState(false);

  //Rent-info modal
  const modalBodyContent = (
    <div>
      <p>
        Vedenjakelun vikapäivystys ja automaattiset tiedotteet
        häiriötilanteissa: p. 09 1561 3000, palvelee 24/7.
      </p>
      <p>Asiakaspalvelu puhelimitse: p. 09 1561 2110. </p>
      Asiakaspalvelun aukioloajat:
      <ul>
        <li>Ma klo 8.30–15.30 </li>
        <li>Ti klo 8.30–11.00 </li>
        <li>Ke klo 8.30–15.30 </li>
        <li>To klo 13.00–15.30 </li>
        <li>Pe klo 8.30–15.30</li>
      </ul>
      <p>
        Jos peräkärry menee rikki tai joudut kolariin, soita asiakaspalveluun.{' '}
      </p>
    </div>
  );

  return (
    <>
      <PopUpInfoModal
        show={modalShow}
        title="Asiakaspalvelu"
        body={modalBodyContent}
        buttonTxt="Sulje"
        onHide={() => setModalShow(false)}
      />
      <Card className={styles.card}>
        <Card.Header as="h5" className={styles.cardHeader}>
          <InfoCircleFill className={styles.infoCircleIcon} /> Varauksesi
          tiedot:
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Calendar2Event className={styles.icons} /> {rentDate}
          </ListGroup.Item>
          <ListGroup.Item>
            <ClockFill className={styles.icons} /> {rentStartTime}-{rentEndTime}
          </ListGroup.Item>
          <ListGroup.Item>
            <TruckFrontFill className={styles.icons} />
            {itemType}
          </ListGroup.Item>
          <ListGroup.Item>
            <GeoAltFill className={styles.icons} /> {stationLocation}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body className={styles.btn}>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            <TelephoneFill /> Asiakaspalvelu
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

RentInfoCard.propTypes = {
  rentDate: PropTypes.instanceOf(Date).isRequired,
  rentStartTime: PropTypes.instanceOf(Date).isRequired,
  rentEndTime: PropTypes.instanceOf(Date).isRequired,
  itemType: PropTypes.string.isRequired,
  stationLocation: PropTypes.string.isRequired,
};
