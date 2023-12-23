import axios from 'axios';

function createAPIClient() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL as string,
    });

    return api;
}

export const request = createAPIClient();