import { AxiosResponse } from 'axios';
import api from './api';

interface Value {
    id: string;
    value: string;
    isAvailable: boolean;
    optionId: string;
}

interface Option {
    id: string;
    title: string;
    prizeCode: string;
    prizeVersion: number;
    values: Value[];
}

interface Awards {
    code: string;
    name: string;
    percentage: number;
    imageUrl: string | null;
    description: string;
    sequencyValue: number;
    options: Option[]; // Adicione esta linha para incluir as opções
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

    static async createPrize(formData: FormData): Promise<Awards> {
        const response = await api.post<Awards>('/prizes/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }

    static async createPrizeOptions(
        prizeId: string,
        option: Option
    ): Promise<void> {
        await api.post(`/prizes/create-option/${prizeId}`, option, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
