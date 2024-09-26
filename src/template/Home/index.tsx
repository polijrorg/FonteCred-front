import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ManagerSmallCard from 'components/ManagerSmallCard';
import AccessesCard from 'components/AccessesCard';
import MostRedeemedItens from 'components/MostRedeemedItens';
import * as S from './styles';

const HomeTemplate = () => {
    const handleClick = () => {
        window.location.href = 'http://localhost:3001/Awards';
    };
    const handleClick2 = () => {
        window.location.href = 'http://localhost:3001/ClientList';
    };
    const handleClick3 = () => {
        window.location.href = 'http://localhost:3001/Status';
    };
    const handleClick4 = () => {
        window.location.href = 'http://localhost:3001/Rules';
    };

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.Subtitle>Área do Gerente</S.Subtitle>
                    <S.LilCardsWrapper>
                        <ManagerSmallCard
                            source="assets/icons/editSymbol.svg"
                            subtitle="Editar prêmios"
                            onClick={handleClick}
                        />
                        <ManagerSmallCard
                            source="assets/icons/trophySymbol.svg"
                            subtitle="Adicionar prêmio"
                            onClick={handleClick}
                        />
                        <ManagerSmallCard
                            source="assets/icons/ListaSymbol.svg"
                            subtitle="Lista de clientes"
                            onClick={handleClick2}
                        />
                        <ManagerSmallCard
                            source="assets/icons/MailboxSymbol.svg"
                            subtitle="Status de Entregas"
                            onClick={handleClick3}
                        />
                        <ManagerSmallCard
                            source="assets/icons/PranchetaSymbol.svg"
                            subtitle="Políticas de Pontuação"
                            onClick={handleClick4}
                        />
                    </S.LilCardsWrapper>
                    <S.BigCardsWrapper>
                        <AccessesCard
                            tabletitle="Clientes que mais acessam"
                            leftTitle="Nome"
                            rightTitle="Acessos"
                        />
                        <MostRedeemedItens
                            tabletitle="Itens mais resgatados"
                            leftTitle="Nome"
                            rightTitle="Resgates"
                        />
                    </S.BigCardsWrapper>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default HomeTemplate;
