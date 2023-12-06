import axios from 'axios';

const baseURL = 'https://hsytrailerapi.azurewebsites.net/api/';

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
