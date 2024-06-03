import React, { useState } from 'react';
import * as S from './styles';

const Sidebar: React.FC = () => {
    const [activePage, setActivePage] = useState<string>('Home');

    const handleNavigation = (page: string) => {
        setActivePage(page);
        if (page === 'Home') {
            window.location.href = 'http://localhost:3000';
        } else if (page === 'Clientes') {
            window.location.href = 'http://localhost:3000/ClientList';
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
        </S.Wrapper>
    );
};

export default Sidebar;
