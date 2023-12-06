import PropTypes from 'prop-types';
import styles from '../css/BankButton.module.css';
import { useState } from 'react';
import PopUpWarningModal from '../components/PopUpWarningModal';
import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import useApi from '../hooks/useApi';
import { useStepper } from '../hooks/useStepper';
const BankButton = ({ logo, bankName, randomUUID }) => {
  const [showWarningModal, setShowWarningModal] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();
  const { userData } = useStepper();
  const { postRequest } = useApi();

  const handleClick = async (bankName) => {
    if (bankName === 'HSY') {
      handleOpenWarningModal();
    } else {
      try {
        const bodyData = {
          customerInfo: {
            name: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            email: userData.emailAddress,
            address: userData.streetName,
            zipCode: userData.postalCode,
            city: userData.cityName,
          },
          uuid: randomUUID,
        };

        const responce = await postRequest('add-reservation', bodyData);
        console.log('BankButton.jsx 36', responce.updatedReservation._id);
        navigate(`/rent-successful/${responce.updatedReservation._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOpenWarningModal = () => {
    setShowWarningModal(true);
  };

  const modalBodyContent = (
    <div>
      <p>
        <Trans i18nKey="pay_on_site_modal_paragraph">
          Perimme jätteiden vastaanotosta Sortti-asemien hinnaston mukaisen
          maksun. Peräkärryvuokran maksuvälineenä käy ainoastaan
          <span style={{ color: '#028882' }}> maksukortti. </span>
          Vuokra maksetaan <span style={{ color: '#028882' }}>
            {' '}
            INFOssa{' '}
          </span>{' '}
          kuorman tuonnin yhteydessä.
        </Trans>
      </p>
      <p>{t('Vahvistan, että haluan maksaa varauksen paikan päällä.')}</p>
    </div>
  );

  return (
    <>
      <PopUpWarningModal
        show={showWarningModal}
        onHide={() => setShowWarningModal(false)}
        title={t('Maksu paikan päällä')}
        body={modalBodyContent}
        backButton={t('Takaisin')}
        acceptButton={t('Kyllä')}
        acceptButtonVariant="primary"
        onPrimaryButtonClick={handleClick}
      />
      <div className={styles.buttonContainer}>
        <button
          className={styles.bankButton}
          onClick={() => handleClick(bankName)}
        >
          <img src={logo} height="100%" className={bankName} alt="Logo" />
        </button>
      </div>
    </>
  );
};

BankButton.propTypes = {
  logo: PropTypes.any.isRequired,
  bankName: PropTypes.string,
  randomUUID: PropTypes.string.isRequired,
};

export default BankButton;
