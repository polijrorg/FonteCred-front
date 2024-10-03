/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import api from './api';

export interface Deliveries {
    prizeCode: string;
    redeemDate: Date;
    itemName: string;
    color: string;
}

export interface PrizeDetails {
    code: string;
    version: number;
    name: string;
    percentage: number;
    description: string;
    sequencyValue: number;
    timesRedeemed: number;
    imageUrl: string | null;
    externalUrl: string | null;
    isActive: boolean;
    isCoupon: boolean;
    isLegacy: boolean;
}

export interface AvailablePrizes {
    prizeCode: string;
    prizeVersion: number;
    clientId: string;
    available: boolean;
    available_at: string;
    redeemed: boolean;
    redeemed_at: string | null;
    couponCode: string | null;
    couponUsed: boolean;
    deliveryId: string | null;
    created_at: string;
    updated_at: string;
    prize: PrizeDetails;
}

export interface ClientInfos {
    id: string;
    name: string;
    points: number;
    lastLogin: string;
    cep: string;
    cpf: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento: string;
    deliveries: Deliveries[];
    availablePrizes: AvailablePrizes[];
    lastRedeem: {
        name: string;
        date: Date;
    };
}

export default class ClientInfoService {
    static async getClientInfo(id: string): Promise<ClientInfos> {
        const response: AxiosResponse<ClientInfos> = await api.get(
            `/clients/${id}`
        );
        return response.data;
    }
}
