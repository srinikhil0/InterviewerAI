import axios, { InternalAxiosRequestConfig } from 'axios';

const isDevelopment = import.meta.env.MODE === 'development';

const baseURL = isDevelopment 
  ? 'http://localhost:5001/interviewerai-62292/us-central1/api'
  : 'https://us-central1-interviewerai-62292.cloudfunctions.net/api';

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor for authentication
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

export default api; 