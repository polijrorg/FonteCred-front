import React from 'react';
import ItemCard from 'components/ItemCard';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Searchbar from 'components/Searchbar';
import * as S from './styles';

const items = [
    { id: '1', name: 'Capacete branco', points: 500 },
    { id: '2', name: 'Luva', points: 250 },
    { id: '3', name: 'Capacete preto', points: 500 }
    // Adicione mais itens conforme necessário
];

const Awards: React.FC = () => {
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Title>Prêmios</S.Title>
                        <Searchbar />
                    </S.SubtitleDiv>
                    <S.Grid>
                        {items.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </S.Grid>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default Awards;
