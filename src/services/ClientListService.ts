/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import api from './api';

export interface Client {
    id: string;
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    uf: string;
    cidade: string;
    blockedProgression: boolean;
    progression: number;
    singleMonthProgression: number;
    lastLogin: string;
    accesses: number;
    avatar: number;
    created_at: string;
    updated_at: string;
    lastRedeem: {
        name: string;
        date: Date;
    };
}

export default class ClientListService {
    static async getClients(
        page = 0,
        pageSize = 10,
        rank = 'Nome',
        order = 'A-Z'
    ): Promise<Client[]> {
        const response: AxiosResponse<Client[]> = await api.get('/clients/', {
            params: {
                page,
                pageSize,
                rank,
                order
            }
        });
        return response.data;
    }
}
