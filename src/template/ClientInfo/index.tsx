/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Table from 'components/InfoClientTable';
import ItemTable from 'components/ItemTable';
import ClientInfoService, { ClientInfos } from 'services/ClientInfoService';
import ClientIdModal from 'components/ClientModal';
import DownloadService from 'services/DownloadService';
import * as S from './styles';

interface DataItemDelivery {
    id: string;
    Item: string;
    Codigo: string;
    DataResgate: string;
}

const ClientInfoTemplate: React.FC = () => {
    const [clientId, setClientId] = useState<string | null>(null);
    const [clientData, setClientData] = useState<ClientInfos | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [data2, setData2] = useState<DataItemDelivery[]>([]);

    const handleDownload = async (clientId: string) => {
        try {
            await DownloadService.downloadCSVClientPrizes(clientId);
        } catch (error) {
            console.error('Erro ao baixar o arquivo:', error);
        }
    };

    const handleClientIdSubmit = async () => {
        if (clientId) {
            try {
                const data = await ClientInfoService.getClientInfo(clientId);
                console.log('Dados do cliente recebidos:', data);
                setClientData(data);

                const redeemedItems = data.availablePrizes
                    .filter((prize) => prize.redeemed === true)
                    .map((prize) => {
                        let formattedDate = 'Data Inválida';
                        if (prize.redeemed_at) {
                            const date = new Date(prize.redeemed_at);
                            if (!isNaN(date.getTime())) {
                                const day = String(date.getUTCDate()).padStart(
                                    2,
                                    '0'
                                );
                                const month = String(
                                    date.getUTCMonth() + 1
                                ).padStart(2, '0');
                                const year = String(date.getUTCFullYear());
                                formattedDate = `${day}/${month}/${year}`;
                            }
                        }

                        return {
                            id: prize.prizeCode,
                            Item: prize.prize?.name || 'Item não especificado',
                            Codigo: prize.prizeCode,
                            DataResgate: formattedDate
                        };
                    });

                setData2(redeemedItems);
                setIsModalOpen(false);
            } catch (error) {
                console.error('Erro ao buscar informações do cliente:', error);
            }
        }
    };

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Informações do cliente</S.Subtitle>
                    </S.SubtitleDiv>
                    {clientData && (
                        <Table
                            data={{
                                ...clientData,
                                lastRedeem: clientData.lastRedeem.name
                            }}
                        />
                    )}
                    <S.DownloadDiv>
                        <S.Icons
                            src="assets/icons/Download.svg"
                            onClick={() => handleDownload(clientId ?? '')}
                        />
                    </S.DownloadDiv>
                    <ItemTable data={data2} />
                </S.Background>
            </S.Wrapper>

            <ClientIdModal
                clientId={clientId ?? ''}
                setClientId={setClientId}
                onConfirm={handleClientIdSubmit}
                onCancel={() => setIsModalOpen(false)}
                isOpen={isModalOpen}
            />
        </S.Container>
    );
};

export default ClientInfoTemplate;
