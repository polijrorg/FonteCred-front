import { AxiosResponse } from 'axios';
import api from './api';

export interface DeliverStatus {
    id: string;
    client: {
        name: string;
    };
    redeemedDate: string;
    prize: {
        name: string;
    };
    endereco: string;
    posted: boolean;
}

export default class DeliverStatusService {
    static async getDeliverStatus(
        page = 0,
        pageSize = 10,
        rank = 'Nome',
        order = 'A-Z'
    ): Promise<DeliverStatus[]> {
        const response: AxiosResponse<DeliverStatus[]> = await api.get(
            '/deliveries/',
            {
                params: {
                    page,
                    pageSize,
                    rank,
                    order
                }
            }
        );
        return response.data;
    }

    static async updateDeliverStatus(
        deliveryId: string,
        newStatus: boolean
    ): Promise<void> {
        await api.put('/deliveries/post', {
            deliveryId,
            newStatus
        });
    }
}
