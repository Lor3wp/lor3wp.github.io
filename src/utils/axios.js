import axios from 'axios';
import { NODE_ENV, PUBLIC_DOMAIN, PUBLIC_PORT } from './constants';

const baseURL =
  NODE_ENV === 'production'
    ? 'https://hsytrailerapi.azurewebsites.net/api/'
    : `http://${PUBLIC_DOMAIN ?? 'localhost'}:${PUBLIC_PORT ?? '3000'}/api/`;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
