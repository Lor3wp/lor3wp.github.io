import PropTypes from 'prop-types';
import styles from '../css/BankButton.module.css';
import { useState } from 'react';
import PopUpWarningModal from '../components/PopUpWarningModal';
import { useNavigate } from 'react-router-dom';

const BankButton = ({ logo, bankName }) => {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = (bankName) => {
    if (bankName === 'HSY') {
      handleOpenWarningModal();
    } else {
      navigate('/rent-successful');
    }
  };

  const handleOpenWarningModal = () => {
    setShowWarningModal(true);
  };

  const modalBodyContent = (
    <div>
      <p>
        Perimme jätteiden vastaanotosta Sortti-asemien hinnaston mukaisen
        maksun. Peräkärryvuokran maksuvälineenä käy ainoastaan
        <span style={{ color: '#028882' }}> maksukortti. </span>
        Vuokra maksetaan <span style={{ color: '#028882' }}>INFOssa</span>{' '}
        kuorman tuonnin yhteydessä.
      </p>
      <p>Vahvistan, että haluan maksaa varauksen paikan päällä.</p>
    </div>
  );

  return (
    <>
      <PopUpWarningModal
        show={showWarningModal}
        onHide={() => setShowWarningModal(false)}
        title="Maksu paikan päällä"
        body={modalBodyContent}
        backButton="Takaisin"
        acceptButton="Kyllä"
        acceptButtonVariant="danger"
        onPrimaryButtonClick={() => {
          setShowWarningModal(false);
          handleClick();
        }}
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
};

export default BankButton;
