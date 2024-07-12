import axios from "axios";

const API_BASE_URL =  (window as any).env.API_BASE_URL
if (!API_BASE_URL) {
    console.log('API_BASE_URL is not defined');
}

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

apiService.interceptors.request.use(config => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]');

    if (csrfToken) {
        const token = csrfToken.getAttribute("content");
        if (token) {
            config.headers['X-CSRF-Token'] = token;
        }
    }

    return config;
}, error => {
    return Promise.reject(error);
});

export default apiService;
