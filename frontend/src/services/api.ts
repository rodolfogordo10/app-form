import axios from 'axios';

export const isAxiosError = axios.isAxiosError;

export const apiBackend = axios.create({
  baseURL: `http://localhost:5000/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': 'pt-BR',
  },
});
