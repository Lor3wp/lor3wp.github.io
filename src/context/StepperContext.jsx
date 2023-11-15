import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  // TODO: Probably stations needs to be fetched from the backend at some point
  const [selectedStations, setSelectedStations] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectAdaptor, setSelectAdaptor] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
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
        selectedStations,
        setSelectedStations,
        selectedProduct,
        setSelectedProduct,
        selectAdaptor,
        setSelectAdaptor,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
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
