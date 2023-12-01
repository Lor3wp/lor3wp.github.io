import axios from 'axios';
import { API_URL, NODE_ENV, PUBLIC_DOMAIN, PUBLIC_PORT } from './constants';

const baseURL =
  NODE_ENV === 'production'
    ? API_URL
    : `http://${PUBLIC_DOMAIN ?? 'localhost'}:${PUBLIC_PORT ?? '3000'}/api/`;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
