import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/hsy_logo.png';
import '../css/navigation.css';
import FinnishFlag from '../assets/finland-flag-icon.svg';
import EnglishFlag from '../assets/united-kingdom-flag-icon.svg';
import SwedishFlag from '../assets/sweden-flag-icon.svg';

/* Navigation component */
const FrontPageNavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Suomi');

  // Language dropdown component
  const LanguageDropdown = () => {
    const languageOptions = [
      { language: 'Suomi', flag: FinnishFlag },
      { language: 'English', flag: EnglishFlag },
      { language: 'Svenska', flag: SwedishFlag },
    ];

    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
    };

    return (
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
          <i className="bi bi-globe-americas"></i>{' '}
          <span className="hide-on-small-screens">{selectedLanguage}</span>
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {languageOptions.map((option, index) => (
            <a
              className="dropdown-item"
              href="#"
              key={index}
              onClick={() => handleLanguageChange(option.language)}
            >
              <img
                className="flags"
                src={option.flag}
                width="30"
                height="30"
                alt={option.language}
              />{' '}
              {option.language}
            </a>
          ))}
        </div>
      </div>
    );
  };

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
      <LanguageDropdown />
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

export default FrontPageNavBar;
