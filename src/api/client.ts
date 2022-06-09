import axios from 'axios'

const api = axios.create({
  baseURL: 'http://35.78.69.1:8080/',
  timeout: 1000,
});

export default api