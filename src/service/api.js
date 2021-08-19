import axios from 'axios';

export const api = axios.create({
    baseURL: "https://opentdb.com",
});

export default api;