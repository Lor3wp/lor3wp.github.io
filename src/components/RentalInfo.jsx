import PropTypes from 'prop-types';

const RentInfoBoxList = ({ items }) => {
  const highlightText = (text) => {
    const replacements = [
      { pattern: /5 €/g, replacement: '<span class="highlighted-text">$&</span>' },
      { pattern: /vain henkilöasiakkaille jätteen kuljettamiseen Sortti-asemille\./g, replacement: '<span class="highlighted-text">$&</span>' },
      { pattern: /kolmen tunnin/g, replacement: '<span class="highlighted-text">$&</span>' },
      {pattern: /40 euroa./g, replacement: '<span class="highlighted-text">$&</span>' },
      { pattern: /Peräkärryä ei voi/g, replacement: '<span class="highlighted-text">$&</span>' },
      {pattern: /henkilöllisyystodistuksesi/g, replacement: '<span class="highlighted-text">$&</span>' }
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
        <li className="infolist" key={index} dangerouslySetInnerHTML={{ __html: highlightText(item) }} />
      ))}
    </ul>
  );
};

RentInfoBoxList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RentInfoBoxList;




