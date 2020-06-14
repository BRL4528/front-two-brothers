import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.81.209.27',
});

export default api;
