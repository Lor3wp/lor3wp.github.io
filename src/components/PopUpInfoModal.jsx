import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import styles from '../css/PopUpWarningModal.module.css';

export const PopUpInfoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.modalTitle}
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{props.buttonTxt}</Button>
      </Modal.Footer>
    </Modal>
  );
};

PopUpInfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  buttonTxt: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
};
