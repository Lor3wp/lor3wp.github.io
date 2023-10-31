import PropTypes from 'prop-types';

/* Google Maps map component for each location */

const GoogleMap = ({ stationLocation }) => {
  const generateMapSrc = (stationLocation) => {
    if (stationLocation === 'Kivikon Sortti-asema') {
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.3118495403837!2d25.04846202088959!3d60.23680115201916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469208ea5370bfbd%3A0x29ed900154fccc6d!2sKivikon%20Sortti-asema!5e0!3m2!1sfi!2sfi!4v1698780242158!5m2!1sfi!2sfi';
    } else if (stationLocation === 'Konalan Sortti-asema') {
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.741006586516!2d24.83206717669943!3d60.251202336891524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df655ff312c6b%3A0x97894bc0c7d3aa90!2sSortti-asema%20Konala!5e0!3m2!1sfi!2sfi!4v1698783872304!5m2!1sfi!2sfi';
    } else if (stationLocation === 'Ruskeasannan Sortti-asema') {
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.58165076051!2d24.990991676704354!3d60.31997603133454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df87e8b6a9c87%3A0xd1d40798f0ca8a2!2sSortti-asema%20Ruskeasanta!5e0!3m2!1sfi!2sfi!4v1698784191866!5m2!1sfi!2sfi';
    } else if (stationLocation === 'Jorvaksen Sortti-asema') {
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.6493313853439!2d24.520375576691134!3d60.13687084612163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468d8d1d863fd1bd%3A0x553c2ab46c5c2d83!2sJorvaksen%20Sortti-asema!5e0!3m2!1sfi!2sfi!4v1698784339873!5m2!1sfi!2sfi';
    } else if (stationLocation === 'Ämmässuon Sortti-asema') {
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.3584160766723!2d24.538450876698665!3d60.24098963771647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468dedf57a039571%3A0x850c4b3c115023fc!2sSortti-asema%20%C3%84mm%C3%A4ssuo!5e0!3m2!1sfi!2sfi!4v1698784496918!5m2!1sfi!2sfi';
    } else if (stationLocation === 'Koivukylän Sortti-pienasema') {
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.7598799139714!2d25.058810976704134!3d60.31703003157269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469207f26a1e7bdd%3A0x299a920ce8e760ae!2sSortti-pienasema%20Koivukyl%C3%A4!5e0!3m2!1sfi!2sfi!4v1698784551749!5m2!1sfi!2sfi';
    } else {
      // Handle unknown station names or provide default map URL
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254498.04822866534!2d24.68904923595835!3d60.11009634907045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2sHelsinki!5e0!3m2!1sfi!2sfi!4v1698784049795!5m2!1sfi!2sfi';
    }
  };

  const mapSrc = generateMapSrc(stationLocation);

  return (
    <div className="map-container">
      {mapSrc && (
        <iframe
          src={mapSrc}
          width="70%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      )}
    </div>
  );
};

GoogleMap.propTypes = {
  stationLocation: PropTypes.string.isRequired,
};

export default GoogleMap;
