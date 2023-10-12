import UserForm from '../components/UserForm';
import styles from '../css/UserForm.module.css'

const RentForm = () => {
  return (
    <div className={styles.userFormContainer}>
    <UserForm></UserForm>
    </div>
  );
}
export default RentForm;