import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://naruto-api.herokuapp.com/api/v1',
    timeout: 7000 
});