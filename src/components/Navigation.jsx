import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/hsy_logo.png';
import '../css/navigation.css';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const FrontPageNavBar = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="white" variant="dark" expand="lg">
      <Navbar.Brand>
        <img
          src={Logo}
          width="30"
          height="30"
          className="logo d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <LanguageSelector />
      <div className="container-fluid">
        <div className="container-txt">
          <p>{t('Sorttiasemat')}</p>
          <p>{t('Jäteopas')}</p>
          <p>{t('Asiakaspalvelu')}</p>
        </div>
      </div>
    </Navbar>
  );
};

export default FrontPageNavBar;
