import { useState } from 'react';
import FinnishFlag from '../assets/finland-flag-icon.svg';
import EnglishFlag from '../assets/united-kingdom-flag-icon.svg';
import SwedishFlag from '../assets/sweden-flag-icon.svg';

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Suomi');

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
