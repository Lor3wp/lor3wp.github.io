import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [stationsData, setStationsData] = useState([
    {
      stationName: 'Ruskeasanta',
      timeSlots: ['10-13', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: true,
      selected: false,
      latitude: 60.32061898389687,
      longitude: 24.993732557209405,
    },
    {
      stationName: 'Konala',
      timeSlots: ['11-13', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: false,
      trailer: true,
      selected: false,
      latitude: 60.25360884865695,
      longitude: 24.836624427068696,
    },
    {
      stationName: 'Kivikko',
      timeSlots: ['12-13', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: false,
      selected: false,
      latitude: 60.23686341263375,
      longitude: 25.05107185536083,
    },
    {
      stationName: 'Jorvas',
      timeSlots: ['13-14', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: false,
      trailer: true,
      selected: false,
      latitude: 60.13714913277058,
      longitude: 24.523249868537707,
    },
    {
      stationName: 'Ämmässuo',
      timeSlots: ['14-15', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: true,
      selected: false,
      latitude: 60.24107750488621,
      longitude: 24.540993611186675,
    },
    {
      stationName: 'Koivukylä',
      timeSlots: ['15-16', '11-14', '12-15', '13-16', '14-17', '15-18'],
      cargoBike: true,
      trailer: false,
      selected: false,
      latitude: 60.31712294344029,
      longitude: 25.061342971463368,
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
