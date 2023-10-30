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
} from 'react-bootstrap-icons';
import { PopUpInfoModal } from './PopUpInfoModal';

// TODO: Change item icon depending on item type
export const RentInfoCard = ({
  rentDate,
  rentStartTime,
  rentEndTime,
  itemType,
  stationLocation,
}) => {
  const [modalShow, setModalShow] = useState(false);

  const modalBodyContent = (
    <div>
      <p>Vedenjakelun vikapäivystys ja automaattiset tiedotteet</p>
      <p>häiriötilanteista: p. 09 1561 3000 palvelee 24/7</p>
      <p>Palvelu puhelimitse 09 1561 2110 </p>
      Vaihteen aukioloaika: arkisin klo 8.30–15.30 Asiakaspalvelun aukioloajat:
      <ul>
        <li> ma klo 8.30–15.30 </li>
        <li>ti klo 8.30–11.00 </li>
        <li>ke klo 8.30–15.30 </li>
        <li>to klo 13.00–15.30 </li>
        <li>pe klo 8.30–15.30</li>
      </ul>
      <p>
        Miten toimia jos kärry meni rikki, tai jos kolaroit. Horem ipsum dolor
        sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.
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
          <InfoCircleFill /> Varauksesi tiedot:
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Calendar2Event /> {rentDate}
          </ListGroup.Item>
          <ListGroup.Item>
            <ClockFill /> {rentStartTime}-{rentEndTime}
          </ListGroup.Item>
          <ListGroup.Item>{itemType}</ListGroup.Item>
          <ListGroup.Item>
            <GeoAltFill /> {stationLocation}
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
