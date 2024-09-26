/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Searchbar from 'components/Searchbar';
import Table from 'components/ClientTable';
import ClientService, { Client } from 'services/ClientListService';
import * as S from './styles';

const ClientListTemplate: React.FC = () => {
    const [data, setData] = useState<Client[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = data.filter((client) =>
        client.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clients = await ClientService.getClients(
                    0,
                    10,
                    'Nome',
                    'A-Z'
                );

                const mappedClients = clients.map((client) => {
                    // Verificar e formatar 'lastRedeem.date'
                    const formattedLastRedeemDate =
                        client.lastRedeem && client.lastRedeem.date
                            ? `${String(
                                  new Date(client.lastRedeem.date).getUTCDate()
                              ).padStart(2, '0')}/${String(
                                  new Date(
                                      client.lastRedeem.date
                                  ).getUTCMonth() + 1
                              ).padStart(2, '0')}/${new Date(
                                  client.lastRedeem.date
                              ).getUTCFullYear()}`
                            : 'Data não disponível';

                    return {
                        ...client,
                        ultimaRetirada: `${
                            client.lastRedeem?.name || 'Não especificado'
                        } - ${formattedLastRedeemDate}`, // Concatenando o nome e a data como uma única string
                        ultimoAcesso: client.lastLogin
                    };
                });

                setData(mappedClients);
            } catch (err) {
                console.error('Erro ao carregar os dados:', err);
            }
        };

        fetchData();
    }, []);

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Clientes</S.Subtitle>
                        <Searchbar onSearch={setSearchQuery} />
                    </S.SubtitleDiv>
                    <Table data={filteredData} />
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default ClientListTemplate;
