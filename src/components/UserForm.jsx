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

const UserForm = ({ onSubmit, onPrevStep }) => {
  const [validated, setValidated] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [infoModalBody, setInfoModalBody] = useState();
  const [infoModalTitle, setInfoModalTitle] = useState();
  const [rentConfirmation, setRentConfirmation] = useState(false);
  const [submitEvent, setSubmitEvent] = useState(null);

  const {
    selectedDate,
    selectedTime,
    selectedProduct,
    selectedStations,
    userData,
    setUserData,
    acceptTerms,
    setAcceptTerms,
  } = useStepper();

  const navigate = useNavigate();

  const tosInfoTitle = 'Yleiset sopimusehdot';
  const leaseInfoTitle = 'Vuokrasopimus';
  const confirmInfoTitle = 'Vahvista vuokraus';

  const stations = [
    'Ruskeasanta',
    'Konala',
    'Kivikko',
    'Jorvas',
    'Ämmässuo',
    'Koivusuo',
  ];

  // Maps selected stations to their names, filters out unselected stations.
  const selectedStationNames = selectedStations
    .map((isSelected, index) => {
      if (isSelected) {
        const station = stations[index];
        return station;
      }
    })
    .filter(Boolean);

  const tosInfoBody = (
    <div>
      <h3>Peräkärryn vuokrauksen sopimusehdot</h3>
      <ol>
        <li>PERÄKÄRRYN KÄYTTÖ</li>
        <p>
          HSY on vuokrannut peräkärryn asiakkaalle jätteiden kuljettamiseksi
          Sortti-asemalle. Peräkärryä saa käyttää ainoastaan asiakas omaan
          lukuunsa eikä asiakas saa luovuttaa peräkärryä tai tätä sopimusta
          kolmannelle osapuolelle. Asiakkaan tulee käyttää peräkärryä
          huolellisesti ja palauttaa peräkärry samassa kunnossa kuin se oli
          vuokrahetkellä. Asiakkaan tulee huomioida peräkärryn kantavuus ja
          kuorman sidonta, ettei mahdollisesti liikkuva kuorma aiheuta
          peräkärrylle vahinkoa.
        </p>
        <li>PERÄKÄRRYN VUOKRAAJAN VASTUU </li>
        <p>
          Asiakkaalla tulee olla ajoneuvoyhdistelmän kuljettamiseen oikeuttava
          ajokortti. Asiakas vastaa siitä, että vuokrattua peräkärryä ja sen
          käyttöä koskevia säännöksiä, mukaan lukien pysäköintiä koskevia
          säännöksiä, noudatetaan. Asiakas vastaa mahdollisista rikemaksuista,
          pysäköintivirhemaksuista ja sakoista tai ylikuormamaksuista, jotka hän
          on saanut vuokraperäkärryä käyttäessään.
        </p>
        <p>
          Asiakas on velvollinen korvaamaan vahingon, joka on aiheutunut
          tahallisen tai huolimattoman käsittelyn, ylikuorman, puutteellisen
          kuorman sidonnan tai muun vastaavan syyn johdosta tai vuokra-ajan
          ylittymisen johdosta. Asiakas on velvollinen korvaamaan vuokra-aikana
          tuhoutuneen tai kadonneen peräkärryn sen uushankinta-arvoon.
          Peräkärryn vakavasta vaurioitumisesta, katoamisesta tai kolarista on
          viipymättä ilmoitettava HSY:lle.
        </p>
        <p>
          Peräkärry on vakuutettu HSY:n toimesta liikennevakuutuksella.
          Asiakkaan omavastuu vahinkotapauksessa on 350 euroa.
        </p>
        <li>PERÄKÄRRYN VUOKRA-AIKA JA PALAUTTAMINEN</li>
        <p>
          Peräkärryn vuokra-aika on kolme tuntia. Peräkärry luovutetaan
          asiakkaalle HSY:n toimipisteestä. Peräkärry tulee palauttaa
          vuokra-ajan päätyttyä samaan toimipisteeseen, ellei muusta paikasta
          ole sovittu.
        </p>
        <p>
          Mikäli vuokraperäkärry palautetaan sovittua palautusajankohtaa
          myöhemmin tai sitä on käytetty muuhun tarkoitukseen kuin jätteiden
          kuljettamiseen Sortti-asemalle, HSY:llä on oikeus veloittaa
          myöhästymismaksu 40 € /alkava vuorokausi.
        </p>
      </ol>
    </div>
  );

  // TODO: Fill in the details of the rental dynamically
  const leaseInfoBody = (
    <div>
      <img className={styles.frontPagePicture} src={hsyLogo} />
      <p />
      <h1>Vuokrasopimus</h1>
      <h2>Vuokralleantaja</h2>
      <p>
        Helsingin seudun ympäristöpalvelut -kuntayhtymä <br />
        PL 100 <br />
        00066 HSY
      </p>
      <h2>Vuokrauspaikka</h2>
      <p>
        Aseman nimi <br />
        aseman paikka
      </p>
      <h2>Vuokralleottajan tiedot</h2>
      <p>
        Nimi Nimi
        <br />
        Katuosoite <br />
        postinum postitoimipaikka
      </p>
      <p>
        Puhelin:
        <br /> Sähköposti:
      </p>
      <h2>Vuokraesine</h2>
      <p>
        Vuokralleantaja vuokraa vuokralleottajalle seuraavan vuokraesineen
        seuraavassa säädetyin ehdoin.
      </p>
      <h3>Perävaunu</h3>
      <p>
        Vuokra-aika: 3 tuntia
        <br /> Nouto: <br /> Palautus:
      </p>
      <p>Vuokrauksen hinta 5 €</p>
      <p>
        Jos peräkärryllä ei tuoda jätettä Sortti-asemalle tai peräkärry
        palautetaan myöhässä, hinta on 40 €.
      </p>
      <h2>Muut ehdot</h2>
      <p>
        Edellä ilmoitettujen ehtojen lisäksi ovat voimassa liitteenä olevat
        Yleiset sopimusehdot.
      </p>
      <p>Jos kärry hajoaa vuokrauksen aikana, ota yhteyttä:</p>
      <ul>
        <li>ma-pe kello 8.30-15.30 HSY:n asiakaspalveluun 09 1561 2110</li>
        <li>
          ma-pe kello 15.30-21.00, la-su kello 10-18.00 päivystysnumeroon 050
          4766905.
        </li>
      </ul>
    </div>
  );

  const confirmInfoBody = (
    <div>
      <p>
        Ulkomitat: pituus 418 cm, leveys 167 cm Tavaratilan mitat: tilavuus 5 m3
        pituus 265 cm, leveys 125 cm korkeus 50 cm, korkeus kuomun kanssa 150 cm
        Peräkärryn omapaino 195 kg Kantavuus 555 kg Kokonaispaino 750 kg
        Peräkärryssä ei ole jarruja eikä talvirenkaita.
      </p>
      <p>
        Vahvista peräkärrynvuokraus Sortti-aseman INFO:ssa näyttämällä
        henkilöllisyystodistuksesi. Henkilökuntamme opastaa, mistä kärry
        asemalla noudetaan.
      </p>
      <ul>
        <li>
          Varauksen päivämäärä: {new Date(selectedDate).toLocaleDateString()}
        </li>
        <li>Aika: {selectedTime}</li>
        <li>Tuote: {selectedProduct}</li>
        <li>Asema: {selectedStationNames.join(', ')}</li>
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

  const handleConfirmRentInfo = () => {
    onSubmit({
      firstName: submitEvent.elements.firstName.value,
      lastName: submitEvent.elements.lastName.value,
      phoneNumber: submitEvent.elements.phoneNumber.value,
      emailAddress: submitEvent.elements.emailAddress.value,
      streetName: submitEvent.elements.streetName.value,
      postalCode: submitEvent.elements.postalCode.value,
      cityName: submitEvent.elements.cityName.value,
    });
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
        backButtonTxt={rentConfirmation && 'Takaisin'}
        buttonTxt={rentConfirmation ? 'Vahvista' : 'Sulje'}
        rentConfirmation={rentConfirmation}
        onPrimaryButtonClick={handleConfirmRentInfo}
      />
      <PopUpWarningModal
        show={showWarningModal}
        onHide={() => setShowWarningModal(false)}
        title="Peruuta varaus"
        body="Oletko varma, että haluat peruuttaa varauksen?"
        backButton="Takaisin"
        acceptButton="Kyllä"
        acceptButtonVariant="danger"
        onPrimaryButtonClick={frontPage}
      />

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className={styles.fieldContainer}>
          <FormField
            controlId="firstName"
            label="Etunimi"
            type="text"
            feedbackText="Syötä etunimi"
            value={userData.firstName}
            onChange={(e) => handleFieldChange('firstName', e.target.value)}
          />
          <FormField
            controlId="lastName"
            label="Sukunimi"
            type="text"
            feedbackText="Syötä sukunimi"
            value={userData.lastName}
            onChange={(e) => handleFieldChange('lastName', e.target.value)}
          />
          <FormField
            controlId="phoneNumber"
            label="Puhelinnumero"
            type="text"
            feedbackText="Syötä puhelinnumero"
            value={userData.phoneNumber}
            onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
          />
          <FormField
            controlId="emailAddress"
            label="Sähköposti"
            type="email"
            feedbackText="Kirjoita sähköposti muodossa nimi@esimerkki.com"
            value={userData.emailAddress}
            onChange={(e) => handleFieldChange('emailAddress', e.target.value)}
          />
          <FormField
            controlId="streetName"
            label="Katuosoite"
            type="text"
            feedbackText="Syötä katuosoite"
            value={userData.streetName}
            onChange={(e) => handleFieldChange('streetName', e.target.value)}
          />
          <FormField
            controlId="postalCode"
            label="Postinumero"
            type="text"
            feedbackText="Syötä postinumero"
            value={userData.postalCode}
            onChange={(e) => handleFieldChange('postalCode', e.target.value)}
          />
          <FormField
            controlId="cityName"
            label="Postitoimipaikka"
            type="text"
            feedbackText="Syötä postitoimipaikka"
            value={userData.cityName}
            onChange={(e) => handleFieldChange('cityName', e.target.value)}
          />
          <Checkbox
            label="Hyväksyn"
            linkText="yleiset sopimusehdot"
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
            label="Olen lukenut"
            onClick={handleOpenLeaseModal}
            linkText="vuokrasopimuksen"
            isRequired={true}
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
                Edellinen
              </Button>
              <Button variant="outline-danger" onClick={handleOpenWarningModal}>
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
  handleInfoModal: PropTypes.func,
  onPrevStep: PropTypes.func.isRequired,
};

export default UserForm;
