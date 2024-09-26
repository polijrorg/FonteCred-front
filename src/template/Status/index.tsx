/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Searchbar from 'components/Searchbar';
import DeliverStatusService from 'services/DeliverStatusService';
import * as S from './styles';

interface DataItem {
    id: string;
    client: {
        name: string;
    };
    redeemedDate: string;
    prize: {
        name: string;
    };
    endereco: string;
    posted: boolean;
}

const StatusEntregaTemplate: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState<DataItem[]>([]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleCheckboxChange = async (id: string, currentStatus: boolean) => {
        try {
            // Atualiza imediatamente no estado local para fornecer feedback visual
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ? { ...item, posted: !currentStatus } : item
                )
            );

            // Chama o serviço para atualizar o status no backend
            await DeliverStatusService.updateDeliverStatus(id, !currentStatus);
        } catch (error) {
            console.error('Erro ao atualizar status:', error);

            // Reverte a atualização local se a requisição falhar
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ? { ...item, posted: currentStatus } : item
                )
            );
        }
    };

    const filteredData = data.filter(
        (item) =>
            item.prize &&
            item.prize.name &&
            item.prize.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const status = await DeliverStatusService.getDeliverStatus();
                setData(status);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
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
                        <S.Subtitle>Status de Entrega</S.Subtitle>
                        <Searchbar onSearch={handleSearch} />
                    </S.SubtitleDiv>
                    <S.Table>
                        <thead>
                            <tr>
                                <S.Th>Nome</S.Th>
                                <S.Th>Data de Resgate</S.Th>
                                <S.Th>Pedido</S.Th>
                                <S.Th>Endereço</S.Th>
                                <S.Th>Postado</S.Th>
                                <S.Th> </S.Th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => {
                                const date = new Date(item.redeemedDate);
                                const formattedDate = `${String(
                                    date.getDate()
                                ).padStart(2, '0')}/${String(
                                    date.getMonth() + 1
                                ).padStart(2, '0')}/${date.getFullYear()}`;

                                return (
                                    <S.Tr key={item.id}>
                                        <S.Td>{item.client.name}</S.Td>
                                        <S.Td>{formattedDate}</S.Td>
                                        <S.Td>{item.prize.name}</S.Td>
                                        <S.Td>{item.endereco}</S.Td>
                                        <S.Td>
                                            {item.posted ? 'Sim' : 'Não'}
                                        </S.Td>
                                        <S.Td>
                                            <S.Checkbox
                                                type="checkbox"
                                                checked={item.posted}
                                                onChange={() =>
                                                    handleCheckboxChange(
                                                        item.id,
                                                        item.posted
                                                    )
                                                }
                                            />
                                        </S.Td>
                                    </S.Tr>
                                );
                            })}
                        </tbody>
                    </S.Table>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default StatusEntregaTemplate;
