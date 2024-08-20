import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Searchbar from 'components/Searchbar';
import Table from 'components/ClientTable';
import ClientService, { Client } from 'services/ClientListService';
import * as S from './styles';

const ClientListTemplate: React.FC = () => {
    const [data, setData] = useState<Client[]>([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

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

                const mappedClients = clients.map((client) => ({
                    ...client,
                    nome: client.name,
                    pontos: client.points,
                    ultimaRetirada: client.lastRedeem,
                    ultimoAcesso: client.lastLogin
                }));

                setData(mappedClients);
                // setLoading(false);
            } catch (err) {
                // setError('Erro ao carregar os dados');
                // setLoading(false);
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
