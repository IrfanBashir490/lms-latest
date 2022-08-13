import axios from "axios";
import { UserService } from "../services/user-service";

export const Api = axios.create({
    baseURL: 'http://lms-api.ap-south-1.elasticbeanstalk.com/api',
    responseType: "json"
});

// Set the AUTH token for any request
Api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwt');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

//Handle are response errors or status
Api.interceptors.response.use(response => {
    if (response.status === 200) return response.data;
    if (response.status === 201) return response.data;

    if (response.status === 401) {
        localStorage.clear();
        authHead(false);
        UserService.logout();
    }
    return response;
}, err => {
    if (err && err.response && err.response.status
        && 401 === err.response.status) {
        //DO Something later
        localStorage.clear();
        authHead(false);
        console.log("LOGIN ERROR");
    } else {
        return Promise.reject(err);
    }
})

export const authHead = function setAuthHeaderToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
