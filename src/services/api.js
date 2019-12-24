import axios from 'axios';

export const apiJobs = axios.create({
  baseURL: 'https://jobs.github.com/',
});

export const apiBackend = axios.create({
  baseURL: 'http://localhost:3333',
});
