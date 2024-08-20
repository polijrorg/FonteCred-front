import { AxiosResponse } from 'axios';
import api from './api';

export interface Deliveries {
    prizeCode: string;
    redeemDate: Date;
    itemName: string;
    color: string;
}

export interface FavoritePrizes {
    name: string;
    code: string;
}

export interface ClientInfos {
    id: string;
    name: string;
    points: number;
    lastRedeem: string;
    lastLogin: string;
    cep: string;
    cpf: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento: string;
    favoritePrizes: FavoritePrizes[];
    deliveries: Deliveries[];
}

export default class ClientInfoService {
    static async getClientInfo(id: string): Promise<ClientInfos> {
        const response: AxiosResponse<ClientInfos> = await api.get(
            `/clients/${id}`
        );
        return response.data;
    }
}
