import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Searchbar from 'components/Searchbar';
import Table from 'components/ClientTable';
import * as S from './styles';

const data = [
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 150,
        ultimaRetirada: 'Chaveiro',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 400,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    },
    {
        nome: 'FonteCred',
        pontos: 100,
        ultimaRetirada: 'Luva',
        ultimoAcesso: '01/01/2024'
    }
];

const ClientListTemplate = () => {
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Clientes</S.Subtitle>
                        <Searchbar />
                    </S.SubtitleDiv>
                    <Table data={data} />
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default ClientListTemplate;
