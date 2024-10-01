/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Searchbar from 'components/Searchbar';
import Table from 'components/ClientTable';
import ClientService, { Client } from 'services/ClientListService';
import * as S from './styles';

// Função para formatar a data no formato "dd/mm/aaaa hh:mm:ss"
const formatDateTime = (dateStr: string) => {
    try {
        const dateObj = new Date(dateStr);
        const day = String(dateObj.getUTCDate()).padStart(2, '0');
        const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
        const year = dateObj.getUTCFullYear();
        const hours = String(dateObj.getUTCHours()).padStart(2, '0');
        const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');
        const seconds = String(dateObj.getUTCSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    } catch (error) {
        return 'Data inválida';
    }
};

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
                    // Verificar e formatar 'lastRedeem.date' usando a função formatDateTime
                    const formattedLastRedeemDate =
                        client.lastRedeem && client.lastRedeem.date
                            ? formatDateTime(client.lastRedeem.date.toString())
                            : 'Data não disponível';

                    // Formatar 'lastLogin' para o formato dd/mm/aaaa hh:mm:ss
                    const formattedLastLogin = client.lastLogin
                        ? formatDateTime(client.lastLogin)
                        : 'Data não disponível';

                    return {
                        ...client,
                        ultimaRetirada: `${
                            client.lastRedeem?.name || 'Não especificado'
                        } - ${formattedLastRedeemDate}`, // Concatenando o nome e a data
                        ultimoAcesso: formattedLastLogin // Atualizando o último acesso com a data formatada
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
