import PropTypes from 'prop-types';
import styles from '../css/FrontPage.module.css';

/* Frontpage's rental info text highlight */
const RentInfoBoxList = ({ items }) => {
  const highlightText = (text) => {
    const replacements = [
      {
        pattern: /5 €/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /€5/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern:
          /vain henkilöasiakkaille jätteen kuljettamiseen Sortti-asemille\./g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /for private customers only./g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern:
          /endast avsedd för transport av avfall till sorteringsstationer för privatkunder\./g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /kolmen tunnin/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /three-hour shift/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /för ett tretimmarsskift/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /40 euroa\./g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /40 euros\./g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /40 euro\./g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /Peräkärryä ei voi/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /trailer cannot/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /Det går inte/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /henkilöllisyystodistuksesi/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /your ID/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
      {
        pattern: /genom att visa ditt ID/g,
        replacement: `<span class="${styles.highlightedText}">$&</span>`,
      },
    ];

    let highlightedText = text;
    replacements.forEach(({ pattern, replacement }) => {
      highlightedText = highlightedText.replace(pattern, replacement);
    });

    return highlightedText;
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          className={styles.infoList}
          key={index}
          dangerouslySetInnerHTML={{ __html: highlightText(item) }}
        />
      ))}
    </ul>
  );
};

RentInfoBoxList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RentInfoBoxList;
