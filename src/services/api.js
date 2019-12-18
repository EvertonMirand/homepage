import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jobs.github.com/positions.json?',
});

export default api;
