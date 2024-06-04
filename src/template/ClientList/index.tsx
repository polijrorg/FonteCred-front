import React, { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Searchbar from 'components/Searchbar';
import Table from 'components/ClientTable';
import * as S from './styles';

interface DataItem {
    id: string;
    nome: string;
    pontos: number;
    ultimaRetirada: string;
    ultimoAcesso: string;
}

const data: DataItem[] = [
    {
        id: '1',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '2',
        nome: 'FonteCred',
        pontos: 150,
        ultimaRetirada: 'Chaveiro',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '3',
        nome: 'FonteCred',
        pontos: 400,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '4',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '5',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '6',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '7',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '8',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '9',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        id: '10',
        nome: 'Bruno vinicius',
        pontos: 100,
        ultimaRetirada: 'Capacete preto',
        ultimoAcesso: '03/06/2024'
    }
];

const ClientListTemplate: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = data.filter((item) =>
        item.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
