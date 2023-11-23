import { Modal, Button, Form } from 'react-bootstrap';
import RentInfoBoxList from './RentalInfo';
import styles from '../css/RulesModal.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RulesModal = ({
  showModal,
  handleClose,
  handleCheckBox,
  isChecked,
  items,
}) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleRentClick = () => {
    if (isChecked) {
      navigate('/rent-process');
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.modalPadding} closeButton>
        <Modal.Title className={styles.headingInfo2}>
          {t('Säännöt Sortti-peräkärryn vuokraukseen ja käyttöön')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalPadding}>
        <RentInfoBoxList items={items} />
        <p>
          {t(
            'Perimme jätteiden vastaanotosta Sortti-asemien hinnaston mukaisen maksun. Vuokran voi maksaa INFOssa kuorman tuonnin yhteydessä.',
          )}
        </p>
        <Form.Check
          type="checkbox"
          label={t('Olen lukenut ja ymmärtänyt säännöt')}
          checked={isChecked}
          onChange={handleCheckBox}
          style={{ fontWeight: 'bold' }}
        />
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button
          className={styles.rentButton}
          variant="primary"
          onClick={handleRentClick}
          disabled={!isChecked}
        >
          {t('Vuokraamaan')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

RulesModal.propTypes = {
  showModal: PropTypes.bool,
  handleClose: PropTypes.func,
  handleCheckBox: PropTypes.func,
  isChecked: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string),
};

export default RulesModal;
