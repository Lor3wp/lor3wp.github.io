import Form from 'react-bootstrap/Form';
import styles from '../css/UserForm.module.css';
import PropTypes from 'prop-types';

const Checkbox = ({label, routeName, linkText}) => {
  const bootstrapClasses = {
    'mb-3': 'mb-3',
  };
  return (
    <div key="default-checkbox" className={`${styles.checkboxContainer} ${bootstrapClasses['mb-3']}`}>
      <Form.Check
        required
        type="checkbox"
        id={styles.acceptTermsCheckbox}
        label={
          <span>
            {label} <a href={routeName}>{linkText}</a>
          </span>
        }
      />
    </div>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
export default Checkbox;