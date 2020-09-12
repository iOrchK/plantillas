import axios from 'axios';

const baseURL = 'https://www.omdbapi.com/?apiKey=ffd0c3a5';

export const apiCall = (url, data, headers, methods) => axios({
    methods,
    url: `${baseURL}${url}`,
    data,
    headers
})