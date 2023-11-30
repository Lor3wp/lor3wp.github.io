import { postRequest } from '../services/ApiServices';
import { useNavigate } from 'react-router-dom';

export const useApi = () => {
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

  return {
    postRequest: postApiRequest,
  };
};
