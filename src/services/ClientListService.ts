import { AxiosResponse } from 'axios';
import api from './api';

export interface Client {
    id: string;
    name: string;
    points: number;
    lastRedeem: string;
    lastLogin: string;
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
