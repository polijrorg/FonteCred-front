import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ManagerSmallCard from 'components/ManagerSmallCard';
import AccessesCard from 'components/AccessesCard';
import MostRedeemedItens from 'components/MostRedeemedItens';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

const HomeTemplate = () => {
    const [, setActivePage] = useState<string>('Home');
    const router = useRouter();

    const handleClick = (page: string) => {
        setActivePage(page);
        if (page === 'Home') {
            router.push('/');
        } else if (page === 'ClientList') {
            router.push('/ClientList');
        } else if (page === 'StatusDelivery') {
            router.push('/StatusDelivery');
        } else if (page === 'Rules') {
            router.push('/Rules');
        } else if (page === 'Awards') {
            router.push('/Awards');
        }
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
                            onClick={() => handleClick('Awards')}
                        />
                        <ManagerSmallCard
                            source="assets/icons/trophySymbol.svg"
                            subtitle="Adicionar prêmio"
                            onClick={() => handleClick('Awards')}
                        />
                        <ManagerSmallCard
                            source="assets/icons/ListaSymbol.svg"
                            subtitle="Lista de clientes"
                            onClick={() => handleClick('ClientList')}
                        />
                        <ManagerSmallCard
                            source="assets/icons/MailboxSymbol.svg"
                            subtitle="Status de Entregas"
                            onClick={() => handleClick('StatusDelivery')}
                        />
                        <ManagerSmallCard
                            source="assets/icons/PranchetaSymbol.svg"
                            subtitle="Políticas de Pontuação"
                            onClick={() => handleClick('Rules')}
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
