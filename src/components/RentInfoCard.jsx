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

// TODO: Change item icon depending on item type
export const RentInfoCard = ({
  rentDate,
  rentStartTime,
  rentEndTime,
  itemType,
  stationLocation,
}) => {
  return (
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
        <Button variant="primary">
          <TelephoneFill /> Asiakaspalvelu
        </Button>
      </Card.Body>
    </Card>
  );
};

RentInfoCard.propTypes = {
  rentDate: PropTypes.instanceOf(Date).isRequired,
  rentStartTime: PropTypes.number.isRequired,
  rentEndTime: PropTypes.number.isRequired,
  itemType: PropTypes.string.isRequired,
  stationLocation: PropTypes.string.isRequired,
};