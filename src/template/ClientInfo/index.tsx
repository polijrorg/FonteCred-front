/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Table from 'components/InfoClientTable';
import ItemTable from 'components/ItemTable';
import ClientInfoService, { ClientInfos } from 'services/ClientInfoService';
import Modal from 'react-modal';
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

    const handleClientIdSubmit = async () => {
        if (clientId) {
            try {
                const data = await ClientInfoService.getClientInfo(clientId);
                console.log('Dados do cliente recebidos:', data); // Log para verificar os dados recebidos
                setClientData(data);

                // Filtrar somente os itens resgatados (onde redeemed é true)
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
                                lastRedeem: clientData.lastRedeem.name // Ajustando para passar apenas a string do nome
                            }}
                        />
                    )}
                    <ItemTable data={data2} />
                </S.Background>
            </S.Wrapper>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            >
                <h2>Insira o ID do Cliente</h2>
                <input
                    type="text"
                    value={clientId ?? ''}
                    onChange={(e) => setClientId(e.target.value)}
                />
                <button onClick={handleClientIdSubmit}> Consultar </button>
            </Modal>
        </S.Container>
    );
};

export default ClientInfoTemplate;
