import React, { useState } from 'react';
import ItemCard from 'components/ItemCard';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Searchbar from 'components/Searchbar';
import AwardEditingModal from 'components/AwardEditingModal';
import * as S from './styles';

interface Item {
    id: string;
    name: string;
    points: number;
}

const items: Item[] = [
    { id: '1', name: 'Capacete branco', points: 500 },
    { id: '2', name: 'Luva', points: 250 },
    { id: '3', name: 'Capacete preto', points: 500 },
    { id: '4', name: 'Chaveiro', points: 150 }
];

const Awards: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEditClick = (item: Item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Title>Prêmios</S.Title>
                        <Searchbar onSearch={setSearchQuery} />
                    </S.SubtitleDiv>
                    <S.Grid>
                        {filteredItems.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                onEditClick={handleEditClick}
                            />
                        ))}
                    </S.Grid>
                </S.Background>
            </S.Wrapper>
            {selectedItem && (
                <>
                    <S.Overlay onClick={handleCloseModal} />
                    <S.Modal>
                        <AwardEditingModal
                            item={selectedItem}
                            onClose={handleCloseModal}
                        />
                    </S.Modal>
                </>
            )}
        </S.Container>
    );
};

export default Awards;
