import { Modal, Button, Form } from 'react-bootstrap';
import RentInfoBoxList from './RentalInfo';
import styles from '../css/RulesModal.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const items = [
  'Peräkärryn vuokraus maksaa 5 € kolmelta tunnilta.',
  'Peräkärry on tarkoitettu vain henkilöasiakkaille jätteen kuljettamiseen Sortti-asemille.',
  'Yksi asiakas saa vuokrata peräkärryn vain yhdeksi kolmen tunnin vuoroksi päivässä.',
  'Jos vuokra-aikasi ylittää kolme tuntia tai et tuo jätettä kärryllä Sortti-asemalle, peritään vuokrauksesta 40 euroa.',
  'Peräkärryä ei voi vuokrata Kivikon ja Ämmässuon Sortti-asemalla myytävän mullan kuljettamiseen.',
  'Jos maksat paikan päällä, käy vahvistamassa peräkärrynvuokrauksen aloitus Sortti-aseman INFOssa näyttämällä henkilöllisyystodistuksesi. Henkilökuntamme opastaa, mistä kärry asemalla noudetaan.',
];

const RulesModal = ({ showModal, handleClose, handleCheckBox, isChecked }) => {
  const navigate = useNavigate();

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
          Säännöt Sortti-peräkärryn vuokraukseen ja käyttöön
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalPadding}>
        <RentInfoBoxList items={items} />
        <p>
          Perimme jätteiden vastaanotosta Sortti-asemien hinnaston mukaisen
          maksun. Vuokran voi maksaa INFOssa kuorman tuonnin yhteydessä.
        </p>
        <Form.Check
          type="checkbox"
          label="Olen lukenut ja ymmärtänyt säännöt"
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
          Vuokraamaan
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
};

export default RulesModal;