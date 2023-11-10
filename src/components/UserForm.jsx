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
import { PopUpInfoModal } from './PopUpInfoModal';
import hsyLogo from '../assets/hsy_logo_dark.png';

const UserForm = ({ onSubmit, confirmedRent, setConfirmRent, onPrevStep }) => {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isTos, setIsTos] = useState(false);

  const navigate = useNavigate();

  console.log(confirmedRent);
  const handleSubmit = (event) => {
    event.preventDefault();

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
    navigate('/', { replace: true });
  };

  // TODO: Fill in the details of the rental dynamically
  const modalBodyContent = isTos ? (
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
  ) : (
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

  const handleOpenLaModal = () => {
    setIsTos(false);
    setModalShow(true);
  };

  const handleOpenTosModal = () => {
    setIsTos(true);
    setModalShow(true);
  };

  return (
    <>
      <PopUpInfoModal
        show={modalShow}
        title={isTos ? 'Yleiset sopimusehdot' : 'Vuokrasopimus'}
        body={modalBodyContent}
        size="xl"
        buttonTxt="Sulje"
        onHide={() => setModalShow(false)}
      />
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
            feedbackText="Kirjoita sähköposti muodossa nimi@esimerkki.com"
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
            linkText="yleiset sopimusehdot"
            isRequired={true}
            onClick={handleOpenTosModal}
            id={styles.acceptTermsCheckbox}
            className={styles.checkboxContainer}
          />
          <Checkbox
            label="Olen lukenut"
            onClick={handleOpenLaModal}
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
