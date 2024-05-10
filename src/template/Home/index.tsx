import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ManagerSmallCard from 'components/ManagerSmallCard';
import ManagerBigCard from 'components/ManagerBigCard';
import { useRef } from 'react';
import * as S from './styles';

const HomeTemplate = () => {
    // Reference to the container we want to scroll
    const lilCardsWrapperRef = useRef<HTMLDivElement>(null);

    // Scroll function triggered on arrow click
    const scrollLeft = () => {
        if (lilCardsWrapperRef.current) {
            lilCardsWrapperRef.current.scrollBy({
                left: 300, // Adjust this value to your desired scroll distance
                behavior: 'smooth' // Enables smooth scrolling
            });
        }
    };
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.Subtitle>Área do Gerente</S.Subtitle>
                    <S.LilCardsWrapper ref={lilCardsWrapperRef}>
                        <ManagerSmallCard
                            source="assets/icons/editSymbol.svg"
                            subtitle="Editar prêmios"
                        />
                        <ManagerSmallCard
                            source="assets/icons/trophySymbol.svg"
                            subtitle="Adicionar prêmio"
                        />
                        <ManagerSmallCard
                            source="assets/icons/ListaSymbol.svg"
                            subtitle="Lista de clientes"
                        />
                        <ManagerSmallCard
                            source="assets/icons/MailboxSymbol.svg"
                            subtitle="Status de Entregas"
                        />
                        <ManagerSmallCard
                            source="assets/icons/PranchetaSymbol.svg"
                            subtitle="Políticas de Pontuação"
                        />
                    </S.LilCardsWrapper>
                    <S.ArrowButton onClick={scrollLeft}>▶</S.ArrowButton>
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
