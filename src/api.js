import axios from "axios";

const API_BASE_URL = 'https://64db4d9d593f57e435b0c0fa.mockapi.io/adverts';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchAdverts = async () => {
    const response = await api.get('adverts');
    return response.data;
};

export const fetchAdvertById = async (advertId) => {
    const response = await api.get(`adverts/${advertId}`);
    return response.data;
};