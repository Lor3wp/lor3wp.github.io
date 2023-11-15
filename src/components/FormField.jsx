import Form from 'react-bootstrap/Form';
import styles from '../css/UserForm.module.css';
import PropTypes from 'prop-types';

const FormField = ({
  controlId,
  label,
  type,
  feedbackText,
  onChange,
  value,
}) => {
  return (
    <>
      <Form.Group
        className={`${styles.formContainer} ${'mb-3'}`}
        md="100"
        controlId={controlId}
      >
        <Form.Label className={styles.formLabel}>{label}</Form.Label>
        <Form.Control
          required
          type={type}
          className={styles.customInput}
          onChange={onChange}
          value={value}
        />
        <Form.Control.Feedback type="invalid" className={styles.feedbackText}>
          {feedbackText}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

FormField.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  feedbackText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormField;
