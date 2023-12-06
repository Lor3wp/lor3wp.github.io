import API from '../utils/axios';
import { useState } from 'react';
import { errorHandling } from '../utils/errorHandling';
import {
  postRequest,
  deleteRequest,
  getRequest,
} from '../services/ApiServices';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleApiError = (error) => {
    console.error('API Error:', error);
    navigate('/error');
  };

  const handleApiSuccess = (response) => {
    console.log('API Response:', response);
  };

  const postApiRequest = async (endpoint, data) => {
    try {
      const response = await postRequest(endpoint, data);
      handleApiSuccess(response);
    } catch (error) {
      handleApiError(error);
    }
  };
  const deleteApiRequest = async (endpoint, uuid) => {
    try {
      const response = await deleteRequest(endpoint, uuid);
      handleApiSuccess(response);
    } catch (error) {
      handleApiError(error);
    }
  };

  const getApiRequest = async (endpoint, queryParams) => {
    try {
      const response = await getRequest(endpoint, queryParams);
      handleApiSuccess(response);
      return response; // Return the response if needed in the calling code
    } catch (error) {
      handleApiError(error);
      throw error; // Re-throw the error to propagate it to the calling code
    }
  };

  return {
    postRequest: postApiRequest,
    deleteRequest: deleteApiRequest,
    getRequest: getApiRequest,
    getRentById,
    updateRent,
    deleteRent,
    error,
  };
};

export default useApi;