import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from '../css/UserForm.module.css';
import FormField from './FormField';
import MainButton from './MainButton';
import Checkbox from './Checkbox';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      navigate('/payment');
    }
    console.log('submitted!');
    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className={styles.fieldContainer}>
          <FormField
            controlId="firstName"
            label="Etunimi"
            type="text"
            feedbackText="Syötä etunimi"
          />
          <FormField
            controlId="lastName"
            label="Sukunimi"
            type="text"
            feedbackText="Syötä sukunimi"
          />
          <FormField
            controlId="phoneNumber"
            label="Puhelinnumero"
            type="text"
            feedbackText="Syötä puhelinnumero"
          />
          <FormField
            controlId="emailAddress"
            label="Sähköposti"
            type="email"
            feedbackText="Virheellinen sähköpostiosoite. Kirjoita muodossa nimi@esimerkki.com"
          />
          <FormField
            controlId="streetName"
            label="Katuosoite"
            type="text"
            feedbackText="Syötä katuosoite"
          />
          <FormField
            controlId="postalCode"
            label="Postinumero"
            type="text"
            feedbackText="Syötä postinumero"
          />
          <FormField
            controlId="cityName"
            label="Postitoimipaikka"
            type="text"
            feedbackText="Syötä postitoimipaikka"
          />
          <Checkbox
            label="Hyväksyn"
            routeName="/terms-and-conditions"
            linkText="käyttöehdot"
            isRequired={true}
            id={styles.acceptTermsCheckbox}
            className={styles.checkboxContainer}
          ></Checkbox>
          <Checkbox
            label="Olen lukenut"
            routeName="/rental-contract"
            linkText="vuokrasopimuksen"
            isRequired={true}
            id={styles.acceptTermsCheckbox}
            className={styles.checkboxContainer}
          ></Checkbox>
          <MainButton
            buttonText="Siirry maksamaan"
            type="submit"
            size="lg"
            id="proceedToPaymentButton"
          ></MainButton>
        </div>
      </Form>
    </>
  );
};

export default UserForm;
