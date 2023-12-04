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

  const updateRent = async (rentId, data) => {
    const updateRent = async () => {
      return await API.put(`update-reservation/${rentId}`, data);
    };

    return await errorHandling(updateRent, (err) => setError(err));
  };

  const deleteRent = async (rentId) => {
    const deleteRent = async () => {
      return await API.delete(`delete-reservation/${rentId}`);
    };

    return await errorHandling(deleteRent, (err) => setError(err));
  };

  return { getRentById, updateRent, deleteRent, error };
};

export default useApi;