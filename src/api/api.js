import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nkey-api.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
	config.headers['Authorization'] = localStorage.getItem('token');
	return config;
});

export default api;