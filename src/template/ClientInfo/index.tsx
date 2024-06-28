import React from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Table from 'components/InfoClientTable';
import ItemTable from 'components/ItemTable';
import * as S from './styles';

interface DataItem {
    id: string;
    Item: string;
    Cor: string;
    Codigo: string;
    DataResgate: string;
}

const ClientInfoTemplate: React.FC = () => {
    const data = {
        id: '1',
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024',
        cpf: 'XXXXXXXXXXXXXX',
        rua: 'FonteCred',
        bairro: 'FonteCred',
        cidade: 'FonteCred',
        estado: 'FonteCred',
        cep: 'XXXXXXXXXXXXXX',
        complemento: 'FonteCred',
        itensFavoritados: 'XXXXXXXXXXXXXX'
    };

    const data2: DataItem[] = [
        {
            id: 'FonteCred',
            Item: 'Luva',
            Cor: 'Branco',
            Codigo: 'xxxxxxxxx',
            DataResgate: '01/01/2024'
        },
        {
            id: 'FonteCred',
            Item: 'Luva',
            Cor: 'Branco',
            Codigo: 'xxxxxxxxx',
            DataResgate: '01/01/2024'
        }
    ];
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Informações do cliente</S.Subtitle>
                    </S.SubtitleDiv>
                    <Table data={data} />
                    <ItemTable data={data2} />
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default ClientInfoTemplate;
