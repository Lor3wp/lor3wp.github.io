import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from '../css/UserForm.module.css';
import FormField from './FormField';
import Button from 'react-bootstrap/Button';
import Checkbox from './Checkbox';
import { useNavigate } from 'react-router-dom';
import RentalConfirmation from './RentalConfirmation';
import PropTypes from 'prop-types';
import { ChevronCompactLeft } from 'react-bootstrap-icons';
import { ChevronCompactRight } from 'react-bootstrap-icons';

const UserForm = ({ onSubmit, confirmedRent, setConfirmRent, onPrevStep }) => {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  console.log(confirmedRent);
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      onSubmit({
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        phoneNumber: form.elements.phoneNumber.value,
        emailAddress: form.elements.emailAddress.value,
        streetName: form.elements.streetName.value,
        postalCode: form.elements.postalCode.value,
        cityName: form.elements.cityName.value,
      });
      setConfirmRent(true);
    }
    setValidated(true);
  };

  const navigateForward = () => {
    navigate('/payment');
  };

  const frontPage = () => {
    if (confirm('Oletko varma?')) {
      navigate('/', { replace: true });
    }
  };

  return (
    <>
      {confirmedRent && (
        <>
          <RentalConfirmation
            setConfirmRent={setConfirmRent}
            navigateForward={navigateForward}
          />
        </>
      )}

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
          />
          <Checkbox
            label="Olen lukenut"
            routeName="/rental-contract"
            linkText="vuokrasopimuksen"
            isRequired={true}
            id={styles.acceptTermsCheckbox}
            className={styles.checkboxContainer}
          />

          <div className={styles.buttonsContainer}>
            <div className={styles.leftButtons}>
              <Button variant="outline-primary" onClick={onPrevStep}>
                <ChevronCompactLeft />
                Edellinen
              </Button>
              <Button variant="outline-danger" onClick={frontPage}>
                Peruuta
              </Button>
            </div>
            <Button type="submit" id="proceedToPaymentButton" size="lg">
              Siirry maksamaan
              <ChevronCompactRight />
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  confirmedRent: PropTypes.func.isRequired,
  setConfirmRent: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
};

export default UserForm;
