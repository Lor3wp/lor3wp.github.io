import API from '../utils/axios';
import { useState } from 'react';
import { errorHandling } from '../utils/errorHandling';

const useApi = () => {
  const [error, setError] = useState(null);

  const getRentById = async (rentId) => {
    const fetchRent = async () => {
      return await API.get(`reservation-info-by-id/${rentId}`);
    };

    return await errorHandling(fetchRent, (err) => setError(err));
  };

  return { getRentById, error };
};

export default useApi;
