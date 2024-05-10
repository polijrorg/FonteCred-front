import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ManagerSmallCard from 'components/ManagerSmallCard';
import ManagerBigCard from 'components/ManagerBigCard';
import * as S from './styles';

const HomeTemplate = () => {
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
                        />
                        <ManagerSmallCard
                            source="assetsicons/trophySymbol.svg"
                            subtitle="Adicionar prêmio"
                        />
                        <ManagerSmallCard
                            source="assets/icons/ListaSymbol.svg"
                            subtitle="Lista de clientes"
                        />
                    </S.LilCardsWrapper>
                    <S.BigCardsWrapper>
                        <ManagerBigCard
                            tabletitle="Clientes que mais acessam"
                            leftTitle="Nome"
                            rightTitle="Pontos"
                            leftText="FonteCred"
                            rightText="1000"
                        />
                        <ManagerBigCard
                            tabletitle="Itens mais resgatados"
                            leftTitle="Nome"
                            rightTitle="Quantidade"
                            leftText="Luva"
                            rightText="50"
                        />
                        <ManagerBigCard
                            tabletitle="Clientes com mais pontos"
                            leftTitle="Nome"
                            rightTitle="Pontos"
                            leftText="FonteCred"
                            rightText="1000"
                        />
                        <ManagerBigCard
                            tabletitle="Itens mais favoritados"
                            leftTitle="Nome"
                            rightTitle="Quantidade"
                            leftText="Luva"
                            rightText="50"
                        />
                    </S.BigCardsWrapper>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default HomeTemplate;
