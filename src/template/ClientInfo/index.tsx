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
    Cor: string;
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
            const data = await ClientInfoService.getClientInfo(clientId);
            setClientData(data);

            const mappedDeliveries = data.deliveries.map((delivery) => {
                let formattedDate = 'Data Inválida';
                if (delivery.redeemDate) {
                    const date = new Date(delivery.redeemDate);
                    if (!isNaN(date.getTime())) {
                        const day = String(date.getUTCDate()).padStart(2, '0');
                        const month = String(date.getUTCMonth() + 1).padStart(
                            2,
                            '0'
                        );
                        const year = String(date.getUTCFullYear());
                        formattedDate = `${day}/${month}/${year}`;
                    }
                }

                return {
                    id: delivery.prizeCode,
                    Item: delivery.itemName || 'Item não especificado',
                    Cor: delivery.color || 'Cor não especificada',
                    Codigo: delivery.prizeCode,
                    DataResgate: formattedDate
                };
            });

            setData2(mappedDeliveries);
            setIsModalOpen(false);
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
                    {clientData && <Table data={clientData} />}
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
