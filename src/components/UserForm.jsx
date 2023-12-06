import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from '../css/UserForm.module.css';
import FormField from './FormField';
import Button from 'react-bootstrap/Button';
import Checkbox from './Checkbox';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ChevronCompactLeft } from 'react-bootstrap-icons';
import { ChevronCompactRight } from 'react-bootstrap-icons';
import { PopUpInfoModal } from './PopUpInfoModal';
import PopUpWarningModal from '../components/PopUpWarningModal';
import hsyLogo from '../assets/hsy_logo_dark.png';
import { useStepper } from '../hooks/useStepper';
import { useTranslation } from 'react-i18next';
import useApi from '../hooks/useApi';
const UserForm = ({ onSubmit, onPrevStep, randomUUID }) => {
  const [validated, setValidated] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [infoModalBody, setInfoModalBody] = useState();
  const [infoModalTitle, setInfoModalTitle] = useState();
  const [rentConfirmation, setRentConfirmation] = useState(false);
  const [submitEvent, setSubmitEvent] = useState(null);

  const {
    selectedDate,
    selectedStationAndTime,
    selectedProduct,
    userData,
    setUserData,
    acceptTerms,
    setAcceptTerms,
  } = useStepper();

  const { postRequest } = useApi();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const tosInfoTitle = `${t('Yleiset sopimusehdot')}`;
  const leaseInfoTitle = `${t('Vuokrasopimus')}`;
  const confirmInfoTitle = `${t('Vahvista vuokraus')}`;

  const tosInfoBody = (
    <div>
      <h3>{t('Peräkärryn vuokrauksen sopimusehdot')}</h3>
      <ol>
        <li>{t('PERÄKÄRRYN KÄYTTÖ')}</li>
        <p>{t('tos_info_paragraph_1')}</p>
        <li> {t('PERÄKÄRRYN VUOKRAAJAN VASTUU')}</li>
        <p>{t('tos_info_paragraph_2')}</p>
        <p>{t('tos_info_paragraph_3')}</p>
        <p>{t('tos_info_paragraph_4')}</p>
        <li>{t('PERÄKÄRRYN VUOKRA-AIKA JA PALAUTTAMINEN')}</li>
        <p>{t('tos_info_paragraph_5')}</p>
        <p>{t('tos_info_paragraph_6')}</p>
      </ol>
    </div>
  );

  const rentStart = `${new Date(selectedDate).toLocaleDateString()} ${
    selectedStationAndTime[Object.keys(selectedStationAndTime)[0]][0]
  }${selectedStationAndTime[Object.keys(selectedStationAndTime)[0]][1]}:00`;
  const rentEnd = `${new Date(selectedDate).toLocaleDateString()} ${
    selectedStationAndTime[Object.keys(selectedStationAndTime)[0]][3]
  }${selectedStationAndTime[Object.keys(selectedStationAndTime)[0]][4]}:00`;

  // TODO: Station address missing.
  const leaseInfoBody = (
    <div>
      <img className={styles.frontPagePicture} src={hsyLogo} />
      <p />
      <h1>{t('Vuokrasopimus')}</h1>
      <h2>{t('Vuokralleantaja')}</h2>
      <p>
        {t('Helsingin seudun ympäristöpalvelut -kuntayhtymä')}
        <br />
        PL 100 <br />
        00066 HSY
      </p>
      <h2>{t('Vuokrauspaikka')}</h2>
      <p>
        {t('Asema')}: {Object.keys(selectedStationAndTime)} <br />
        **station address**
      </p>
      <h2>{t('Vuokralleottajan tiedot')}</h2>
      <p>
        {userData.firstName} {userData.lastName}
        <br />
        {userData.streetName} <br />
        {userData.postalCode} {userData.cityName}
      </p>
      <p>
        {t('Puhelin')}: {userData.phoneNumber}
        <br />
        {t('Sähköposti')}: {userData.emailAddress}
      </p>
      <h2>{t('Vuokraesine')}</h2>
      <p>
        {t(
          'Vuokralleantaja vuokraa vuokralleottajalle seuraavan vuokraesineen seuraavassa säädetyin ehdoin.',
        )}
      </p>
      <h3>{t('Perävaunu')}</h3>
      <p>
        {t('Vuokra-aika: 3 tuntia')}
        <br />
        {t('Nouto')}: {rentStart}
        <br />
        {t('Palautus')}: {rentEnd}
      </p>
      <p>{t('Vuokrauksen hinta 5 €')}</p>
      <p>
        {t(
          'Jos peräkärryllä ei tuoda jätettä Sortti-asemalle tai peräkärry palautetaan myöhässä, hinta on 40 €.',
        )}
      </p>
      <h2>{t('Muut ehdot')}</h2>
      <p>
        {t(
          'Edellä ilmoitettujen ehtojen lisäksi ovat voimassa liitteenä olevat yleiset sopimusehdot.',
        )}
      </p>
      <p>{t('Jos kärry hajoaa vuokrauksen aikana, ota yhteyttä')}:</p>
      <ul>
        <li>
          {t('ma-pe kello 8.30-15.30 HSY:n asiakaspalveluun')} 09 1561 2110
        </li>
        <li>
          {t('ma-pe kello 15.30-21.00, la-su kello 10-18.00 päivystysnumeroon')}{' '}
          050 4766905.
        </li>
      </ul>
    </div>
  );

  const confirmInfoBody = (
    <div>
      <p>{t('confirm_info_paragraph_1')}</p>
      <p>{t('confirm_info_paragraph_2')}</p>
      <ul>
        <li>
          {t('Varauksen päivämäärä')}:{' '}
          {new Date(selectedDate).toLocaleDateString()}
        </li>
        <li>
          {t('Aika')}:{' '}
          {selectedStationAndTime[Object.keys(selectedStationAndTime)[0]]}
        </li>
        <li>
          {t('Tuote')}: {selectedProduct}
        </li>
        <li>
          {t('Asema')}: {Object.keys(selectedStationAndTime)}
        </li>
      </ul>
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setSubmitEvent(form);
      handleOpenConfirmInfoModal();
    }
    setValidated(true);
  };

  const frontPage = () => {
    navigate('/', { replace: true });
  };

  const handleConfirmRentInfo = async () => {
    onSubmit({
      firstName: submitEvent.elements.firstName.value,
      lastName: submitEvent.elements.lastName.value,
      phoneNumber: submitEvent.elements.phoneNumber.value,
      emailAddress: submitEvent.elements.emailAddress.value,
      streetName: submitEvent.elements.streetName.value,
      postalCode: submitEvent.elements.postalCode.value,
      cityName: submitEvent.elements.cityName.value,
    });

    try {
      const bodyData = {
        customerInfo: {
          name: submitEvent.elements.firstName.value,
          lastName: submitEvent.elements.lastName.value,
          phoneNumber: submitEvent.elements.phoneNumber.value,
          email: submitEvent.elements.emailAddress.value,
          addres: submitEvent.elements.streetName.value,
          zipCode: submitEvent.elements.postalCode.value,
          city: submitEvent.elements.cityName.value,
        },
        idPrepaid: false,
        uuid: randomUUID,
      };
      console.log(bodyData);
      const responce = await postRequest('add-reservation', bodyData);
      console.log('UserForm.jsx 209', responce);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenTosModal = () => {
    setInfoModalTitle(tosInfoTitle);
    setInfoModalBody(tosInfoBody);
    setRentConfirmation(false);
    setShowInfoModal(true);
  };

  const handleOpenLeaseModal = () => {
    setInfoModalTitle(leaseInfoTitle);
    setInfoModalBody(leaseInfoBody);
    setRentConfirmation(false);
    setShowInfoModal(true);
  };

  const handleOpenConfirmInfoModal = () => {
    setInfoModalTitle(confirmInfoTitle);
    setInfoModalBody(confirmInfoBody);
    setRentConfirmation(true);
    setShowInfoModal(true);
  };

  const handleOpenWarningModal = () => {
    setShowWarningModal(true);
  };

  const handleFieldChange = (name, value) => {
    setUserData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <PopUpInfoModal
        show={showInfoModal}
        onHide={() => setShowInfoModal(false)}
        title={infoModalTitle}
        body={infoModalBody}
        size="xl"
        backButtonTxt={rentConfirmation && `${t('Takaisin')}`}
        buttonTxt={rentConfirmation ? `${t('Vahvista')}` : `${t('Sulje')}`}
        rentConfirmation={rentConfirmation}
        onPrimaryButtonClick={handleConfirmRentInfo}
      />
      <PopUpWarningModal
        show={showWarningModal}
        onHide={() => setShowWarningModal(false)}
        title={t('Haluatko varmasti poistua sivustolta?')}
        body={t('Tekemiäsi muutoksia ei tallenneta.')}
        backButton={t('Takaisin')}
        acceptButton={t('Kyllä')}
        acceptButtonVariant="danger"
        onPrimaryButtonClick={frontPage}
      />

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className={styles.fieldContainer}>
          <FormField
            controlId="firstName"
            label={t('Etunimi')}
            type="text"
            feedbackText={t('Syötä etunimi')}
            value={userData.firstName}
            onChange={(e) => handleFieldChange('firstName', e.target.value)}
          />
          <FormField
            controlId="lastName"
            label={t('Sukunimi')}
            type="text"
            feedbackText={t('Syötä sukunimi')}
            value={userData.lastName}
            onChange={(e) => handleFieldChange('lastName', e.target.value)}
          />
          <FormField
            controlId="phoneNumber"
            label={t('Puhelinnumero')}
            type="text"
            feedbackText={t('Syötä puhelinnumero')}
            value={userData.phoneNumber}
            onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
          />
          <FormField
            controlId="emailAddress"
            label={t('Sähköposti')}
            type="email"
            feedbackText={t('Kirjoita sähköposti muodossa nimi@esimerkki.com')}
            value={userData.emailAddress}
            onChange={(e) => handleFieldChange('emailAddress', e.target.value)}
          />
          <FormField
            controlId="streetName"
            label={t('Katuosoite')}
            type="text"
            feedbackText={t('Syötä katuosoite')}
            value={userData.streetName}
            onChange={(e) => handleFieldChange('streetName', e.target.value)}
          />
          <FormField
            controlId="postalCode"
            label={t('Postinumero')}
            type="text"
            feedbackText={t('Syötä postinumero')}
            value={userData.postalCode}
            onChange={(e) => handleFieldChange('postalCode', e.target.value)}
          />
          <FormField
            controlId="cityName"
            label={t('Postitoimipaikka')}
            type="text"
            feedbackText={t('Syötä postitoimipaikka')}
            value={userData.cityName}
            onChange={(e) => handleFieldChange('cityName', e.target.value)}
          />
          <Checkbox
            label={t('Hyväksyn')}
            linkText={t('yleiset sopimusehdot')}
            isRequired={true}
            onClick={handleOpenTosModal}
            id={styles.acceptTermsCheckbox}
            className={styles.checkboxContainer}
            checked={acceptTerms.tos}
            onChange={() =>
              setAcceptTerms((prevState) => ({
                ...prevState,
                tos: !prevState.tos,
              }))
            }
          />
          <Checkbox
            label={t('Olen lukenut')}
            linkText={t('vuokrasopimuksen')}
            isRequired={true}
            onClick={handleOpenLeaseModal}
            id={styles.acceptTermsCheckbox}
            className={styles.checkboxContainer}
            checked={acceptTerms.lease}
            onChange={() =>
              setAcceptTerms((prevState) => ({
                ...prevState,
                lease: !prevState.lease,
              }))
            }
          />

          <div className={styles.buttonsContainer}>
            <div className={styles.leftButtons}>
              <Button variant="outline-primary" onClick={onPrevStep}>
                <ChevronCompactLeft />
                {t('Edellinen')}
              </Button>
              <Button variant="outline-danger" onClick={handleOpenWarningModal}>
                {t('Peruuta')}
              </Button>
            </div>
            <Button type="submit" id="proceedToPaymentButton" size="lg">
              {t('Siirry maksamaan')}
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
  handleInfoModal: PropTypes.func,
  onPrevStep: PropTypes.func.isRequired,
  randomUUID: PropTypes.string.isRequired,
};

export default UserForm;
