import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  // TODO: Probably stations needs to be fetched from the backend at some point
  const [stationsData, setStationsData] = useState([
    {
      stationName: 'Ruskeasanta',
      timeSlots: ['10-13', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: true,
      selected: false,
    },
    {
      stationName: 'Konala',
      timeSlots: ['11-13', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: false,
      trailer: true,
      selected: false,
    },
    {
      stationName: 'Kivikko',
      timeSlots: ['12-13', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: false,
      selected: false,
    },
    {
      stationName: 'Jorvas',
      timeSlots: ['13-14', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: false,
      trailer: true,
      selected: false,
    },
    {
      stationName: 'Ämmässuo',
      timeSlots: ['14-15', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: true,
      selected: false,
    },
    {
      stationName: 'Koivusuo',
      timeSlots: ['15-16', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: false,
      selected: false,
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectAdaptor, setSelectAdaptor] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStationAndTime, setSelectedStationAndTime] = useState({});
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    streetName: '',
    postalCode: '',
    cityName: '',
  });
  const [acceptTerms, setAcceptTerms] = useState({ tos: false, lease: false });

  return (
    <StepperContext.Provider
      value={{
        stationsData,
        setStationsData,
        selectedProduct,
        setSelectedProduct,
        selectAdaptor,
        setSelectAdaptor,
        selectedDate,
        setSelectedDate,
        selectedStationAndTime,
        setSelectedStationAndTime,
        userData,
        setUserData,
        acceptTerms,
        setAcceptTerms,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

StepperProvider.propTypes = {
  children: PropTypes.node,
};
