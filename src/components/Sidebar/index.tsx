import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

const Sidebar: React.FC = () => {
    const [activePage, setActivePage] = useState<string>('Home');
    const router = useRouter();

    const handleNavigation = (page: string) => {
        setActivePage(page);
        if (page === 'Home') {
            router.push('/');
        } else if (page === 'Clientes') {
            router.push('/ClientList');
        } else if (page === 'Awards') {
            router.push('/Awards');
        } else if (page === 'ClientInfo') {
            router.push('/ClientInfo');
        } else if (page === 'Rules') {
            router.push('/Rules');
        } else if (page === 'StatusDelivery') {
            router.push('/StatusDelivery');
        } else if (page === 'StatusCoupon') {
            router.push('/StatusCoupon');
        }
    };

    return (
        <S.Wrapper>
            <S.MniWrapper onClick={() => handleNavigation('Home')}>
                <S.Symbol src="assets/icons/HomeSymbol.svg" />
                <S.PageTitle isActive={activePage === 'Home'}>Home</S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('Clientes')}>
                <S.Symbol src="assets/icons/cliente.png" />
                <S.PageTitle isActive={activePage === 'Clientes'}>
                    Clientes
                </S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('Awards')}>
                <S.Symbol src="assets/icons/gift.png" />
                <S.PageTitle isActive={activePage === 'Awards'}>
                    Prêmios
                </S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('ClientInfo')}>
                <S.Symbol src="assets/icons/cliente.png" />
                <S.PageTitle isActive={activePage === 'ClientInfo'}>
                    Informações do Cliente
                </S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('Rules')}>
                <S.Symbol src="assets/icons/PranchetaSymbol.svg" />
                <S.PageTitle isActive={activePage === 'Rules'}>
                    Políticas de Pontuação
                </S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('StatusDelivery')}>
                <S.Symbol src="assets/icons/PranchetaSymbol.svg" />
                <S.PageTitle isActive={activePage === 'StatusDelivery'}>
                    Status de Entregas
                </S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('StatusCoupon')}>
                <S.Symbol src="assets/icons/PranchetaSymbol.svg" />
                <S.PageTitle isActive={activePage === 'StatusCoupon'}>
                    Status de Cupons
                </S.PageTitle>
            </S.MniWrapper>
        </S.Wrapper>
    );
};

export default Sidebar;
