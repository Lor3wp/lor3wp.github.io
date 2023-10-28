import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/hsy_logo.png';
import '../css/navigation.css';
import FinnishFlag from '../assets/finland-flag-icon.svg';
import EnglishFlag from '../assets/united-kingdom-flag-icon.svg';
import SwedishFlag from '../assets/sweden-flag-icon.svg';

/* Navigation component */
const Navigation = () => {
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
      <div className="dropdown show">
        <a
          className="languageBtn btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bi bi-globe-americas"></i> Suomi
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">
            <img className="flags" src={FinnishFlag} width="30" height="30" />{' '}
            Suomi
          </a>
          <a className="dropdown-item" href="#">
            <img className="flags" src={EnglishFlag} width="30" height="30" />
            English
          </a>
          <a className="dropdown-item" href="#">
            <img className="flags" src={SwedishFlag} width="30" height="30" />
            Svenska
          </a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-txt">
          <p>Sorttiasemat</p>
          <p>Jäteopas</p>
          <p>Asiakaspalvelu</p>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
