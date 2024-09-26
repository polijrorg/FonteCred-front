/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

export default class DownloadService {
    static async downloadCSVClients(): Promise<void> {
        try {
            const response = await api.get('/clients/download', {
                responseType: 'blob' // Isso é importante para receber o arquivo como um blob
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
                responseType: 'blob' // Recebe o arquivo como um blob
            });

            // Criar um link temporário para realizar o download do arquivo
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'redeemed_items.csv'); // Nome do arquivo a ser baixado
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Erro ao fazer download do CSV:', error);
        }
    }
}
