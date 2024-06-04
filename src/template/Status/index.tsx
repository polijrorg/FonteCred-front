import React, { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Searchbar from 'components/Searchbar';
import * as S from './styles';

interface DataItem {
    id: string;
    nome: string;
    dataResgate: string;
    pedido: string;
    endereco: string;
    postado: boolean;
}

const initialData: DataItem[] = [
    {
        id: '1',
        nome: 'Bruno vinicius',
        dataResgate: '01/02/2024',
        pedido: 'Luva',
        endereco: 'Rua Corinto, 100',
        postado: false
    },
    {
        id: '2',
        nome: 'FonteCred',
        dataResgate: '01/01/2024',
        pedido: 'Chaveiro',
        endereco: 'Rua Font Cred, 100',
        postado: true
    },
    {
        id: '3',
        nome: 'Danteo',
        dataResgate: '01/01/2024',
        pedido: 'Luva',
        endereco: 'Rua Font Cred, 100',
        postado: true
    }
];

const StatusEntregaTemplate: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState(initialData);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleCheckboxChange = (id: string) => {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, postado: !item.postado } : item
            )
        );
    };

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
                        <S.Subtitle>Status de Entrega</S.Subtitle>
                        <Searchbar onSearch={handleSearch} />
                    </S.SubtitleDiv>
                    <S.Table>
                        <thead>
                            <tr>
                                <S.Th> </S.Th>
                                <S.Th>Nome</S.Th>
                                <S.Th>Data de Resgate</S.Th>
                                <S.Th>Pedido</S.Th>
                                <S.Th>Endereço</S.Th>
                                <S.Th>Postado</S.Th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => (
                                <S.Tr key={item.id}>
                                    <S.Td>
                                        <S.Checkbox
                                            type="checkbox"
                                            checked={item.postado}
                                            onChange={() =>
                                                handleCheckboxChange(item.id)
                                            }
                                        />
                                    </S.Td>
                                    <S.Td>{item.nome}</S.Td>
                                    <S.Td>{item.dataResgate}</S.Td>
                                    <S.Td>{item.pedido}</S.Td>
                                    <S.Td>{item.endereco}</S.Td>
                                    <S.Td>{item.postado ? 'Sim' : 'Não'}</S.Td>
                                </S.Tr>
                            ))}
                        </tbody>
                    </S.Table>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default StatusEntregaTemplate;
