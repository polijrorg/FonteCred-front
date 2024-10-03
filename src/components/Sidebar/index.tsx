import React, { useState } from 'react';
import * as S from './styles';

const Sidebar: React.FC = () => {
    const [activePage, setActivePage] = useState<string>('Home');

    const handleNavigation = (page: string) => {
        setActivePage(page);
        if (page === 'Home') {
            window.location.href = 'http://localhost:3001';
        } else if (page === 'Clientes') {
            window.location.href = 'http://localhost:3001/ClientList';
        } else if (page === 'Awards') {
            window.location.href = 'http://localhost:3001/Awards';
        } else if (page === 'ClientInfo') {
            window.location.href = 'http://localhost:3001/ClientInfo';
        } else if (page === 'Rules') {
            window.location.href = 'http://localhost:3001/Rules';
        } else if (page === 'StatusDelivery') {
            window.location.href = 'http://localhost:3001/StatusDelivery';
        } else if (page === 'StatusCoupon') {
            window.location.href = 'http://localhost:3001/StatusCoupon';
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
                    Politicas de Pontuação
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
