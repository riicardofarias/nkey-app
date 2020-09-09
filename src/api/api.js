import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
	config.headers['Authorization'] = localStorage.getItem('token');
	return config;
});

export default api;