import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-front-end.bovcontrol.com/',
});

export default api;
