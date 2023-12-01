import API from '../utils/axios';
import { useState } from 'react';
import { errorHandling } from '../utils/errorHandling';

const useApi = () => {
  const [rentInfo, setRentInfo] = useState({});

  const getRentById = async (rentId) => {
    const { data } = await errorHandling(() =>
      API.get(`reservation-info-by-id/${rentId}`),
    );
    console.log(data);
    setRentInfo(data);
  };

  return { getRentById, rentInfo };
};

export default useApi;
