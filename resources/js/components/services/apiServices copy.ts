import axios from "axios";
import { config } from "process";

const API_BASE_URL =  (window as any).env.API_BASE_URL

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

apiService.interceptors.request.use(config => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')

    if (csrfToken) {
        const token = csrfToken.getAttribute("content");
        // config.headers['X-CSRF-Token'] = csrfToken;
        if(token){
             config.headers['X-CSRF-Token'] = token;
        }
    }

    return config;
}, error => {
    return Promise.reject(error);
});

export default apiService
