import axios from 'axios';

const api = axios.create({
  baseURL: 'https://americanas-locker-api.herokuapp.com',
  // baseURL: 'http://192.168.1.104:3333',
  // baseURL: 'http://localhost:3333',
});

export default api;
