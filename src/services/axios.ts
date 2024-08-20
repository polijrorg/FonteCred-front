// services/axios.ts
import axios from 'axios';
import { parseCookies } from 'nookies';

export function getApi() {
    parseCookies();

    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/' // Altere para sua URL base
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.auth = {
        username: 'admin',
        password: 'senha'
    };

    return api;
}
