/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

export default class DownloadService {
    static async downloadCSVClients(): Promise<void> {
        try {
            const response = await api.get('/clients/download', {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'clients.csv');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Erro ao fazer download do CSV:', error);
        }
    }

    static async downloadCSVItens(): Promise<void> {
        try {
            const response = await api.get('/prizes/download', {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'redeemed_items.csv');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Erro ao fazer download do CSV:', error);
        }
    }

    static async downloadCSVDeliveries(
        startOfPeriod: string,
        endOfPeriod: string
    ): Promise<void> {
        try {
            const response = await api.get('/deliveries/download', {
                params: {
                    startOfPeriod,
                    endOfPeriod
                },
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'deliveries.csv');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Erro ao fazer download do CSV:', error);
        }
    }

    static async downloadCSVCoupons(
        startOfPeriod: string,
        endOfPeriod: string
    ): Promise<void> {
        try {
            const response = await api.get('/prizes/coupons/download', {
                params: {
                    startOfPeriod,
                    endOfPeriod
                },
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'coupons.csv');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Erro ao fazer download do CSV:', error);
        }
    }
}
