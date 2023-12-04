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
import cargo_bike_icon from '../assets/cargobike.svg';
import trailer_icon from '../assets/trailer.svg';
import { useTranslation } from 'react-i18next';

export const RentInfoCard = ({
  rentDate,
  timeSlot,
  itemType,
  stationLocation,
}) => {
  const [modalShow, setModalShow] = useState(false);

  const { t } = useTranslation();

  //Rent-info modal
  const modalBodyContent = (
    <div>
      <p>
        {t(
          'Vedenjakelun vikapäivystys ja automaattiset tiedotteet häiriötilanteissa: p. 09 1561 3000, palvelee 24/7.',
        )}
      </p>
      <p>{t('Asiakaspalvelu puhelimitse: p. 09 1561 2110')}</p>
      {t('Asiakaspalvelun aukioloajat')}:
      <ul>
        <li>{t('ma klo 8.30–15.30')}</li>
        <li>{t('ti klo 8.30–11.00')}</li>
        <li>{t('ke klo 8.30–15.30')}</li>
        <li>{t('to klo 13.00–15.30')}</li>
        <li>{t('pe klo 8.30–15.30')}</li>
      </ul>
      <p>
        {t(
          'Jos peräkärry menee rikki tai joudut kolariin, soita asiakaspalveluun.',
        )}
      </p>
    </div>
  );

  return (
    <>
      <PopUpInfoModal
        show={modalShow}
        title={t('Asiakaspalvelu')}
        body={modalBodyContent}
        buttonTxt={t('Sulje')}
        onHide={() => setModalShow(false)}
      />
      <Card className={styles.card}>
        <Card.Header as="h5" className={styles.cardHeader}>
          <InfoCircleFill className={styles.infoCircleIcon} />{' '}
          {t('Varauksesi tiedot')}:
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Calendar2Event className={styles.icons} /> {rentDate}
          </ListGroup.Item>
          <ListGroup.Item>
            <ClockFill className={styles.icons} /> {timeSlot}
          </ListGroup.Item>
          <ListGroup.Item className={styles.rentItem}>
            <img
              style={{ width: '25px', height: '30px' }}
              src={itemType === 'bike' ? cargo_bike_icon : trailer_icon}
              alt="item icon"
              className={styles.itemIcon}
            />{' '}
            {itemType === 'bike' ? t('Laatikkopyörä') : t('Peräkärry')}
          </ListGroup.Item>
          <ListGroup.Item>
            <GeoAltFill className={styles.icons} /> {stationLocation}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body className={styles.btn}>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            <TelephoneFill /> {t('Asiakaspalvelu')}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

RentInfoCard.propTypes = {
  rentDate: PropTypes.instanceOf(Date).isRequired,
  timeSlot: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  stationLocation: PropTypes.string.isRequired,
};
