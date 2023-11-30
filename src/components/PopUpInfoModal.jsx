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
        {props.backButtonTxt && (
          <Button variant="outline-primary" onClick={props.onHide}>
            {props.backButtonTxt}
          </Button>
        )}
        <Button
          onClick={
            props.rentConfirmation === undefined ||
            props.rentConfirmation === false
              ? props.onHide
              : props.onPrimaryButtonClick
          }
        >
          {props.buttonTxt}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PopUpInfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  body: PropTypes.element,
  backButtonTxt: PropTypes.bool,
  buttonTxt: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  onPrimaryButtonClick: PropTypes.func,
  rentConfirmation: PropTypes.bool,
};
