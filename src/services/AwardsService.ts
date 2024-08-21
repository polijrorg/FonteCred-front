import { AxiosResponse } from 'axios';
import api from './api';

interface Awards {
    code: string;
    name: string;
    requiredPoints: number;
    imageUrl: string | null;
    description: string;
    sequencyValue: number;
}
export default class AwardsService {
    static async getAwardsInfo(
        page = 0,
        pageSize = 10,
        rank = 'Nome',
        order = 'A-Z'
    ): Promise<Awards[]> {
        const response: AxiosResponse<Awards[]> = await api.get('/prizes/', {
            params: {
                page,
                pageSize,
                rank,
                order
            }
        });
        return response.data;
    }

    static async updatePrize(updatePrize: Awards): Promise<void> {
        await api.patch('/prizes/update', updatePrize);
    }

    static async getPrizeDetails(itemCode: string): Promise<Awards> {
        const response = await api.get(`/prizes/${itemCode}`);
        return {
            ...response.data,
            options: response.data.options || [] // Garante que options seja sempre um array
        };
    }

    static async deletePrize(prizeId: string): Promise<void> {
        await api.delete(`/prizes/delete/${prizeId}`);
    }
}
