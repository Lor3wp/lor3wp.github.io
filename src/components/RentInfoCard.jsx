import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import styles from '../css/RentInfoCard.module.css';
import PropTypes from 'prop-types';

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
        Varauksesi tiedot:
      </Card.Header>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{rentDate}</ListGroup.Item>
        <ListGroup.Item>
          {rentStartTime}-{rentEndTime}
        </ListGroup.Item>
        <ListGroup.Item>{itemType}</ListGroup.Item>
        <ListGroup.Item>{stationLocation}</ListGroup.Item>
      </ListGroup>
      <Card.Body className={styles.btn}>
        <Button variant="primary">Asiakaspalvelu</Button>
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
