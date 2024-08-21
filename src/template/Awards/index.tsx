import React, { useEffect, useState } from 'react';
import ItemCard from 'components/ItemCard';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Searchbar from 'components/Searchbar';
import AwardEditingModal from 'components/AwardEditingModal';
import AwardsService from 'services/AwardsService';
import * as S from './styles';

interface Awards {
    code: string;
    name: string;
    requiredPoints: number;
    imageUrl: string | null;
    description: string;
    sequencyValue: number;
}

const Awards: React.FC = () => {
    const [data, setData] = useState<Awards[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<Awards | null>(null);

    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEditClick = (item: Awards) => {
        setSelectedItem(item);
    };

    const handleUpdateItem = (updateItem: Awards | null) => {
        if (updateItem === null) {
            // Se updateItem for null, remove o item do estado
            setData((prevData) =>
                prevData.filter((item) => item.code !== selectedItem?.code)
            );
        } else {
            // Atualiza o item no estado
            setData((prevData) =>
                prevData.map((item) =>
                    item.code === updateItem.code ? updateItem : item
                )
            );
        }
        setSelectedItem(null);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            const awards = await AwardsService.getAwardsInfo(
                0,
                10,
                'Nome',
                'A-Z'
            );
            const mappedAwards = awards.map((award) => ({
                ...award,
                code: award.code,
                name: award.name,
                points: award.requiredPoints,
                imageUrl: award.imageUrl || null,
                description: award.description,
                sequencyValue: award.sequencyValue
            }));
            setData(mappedAwards);
        };
        fetchData();
    }, []);

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
                                key={item.code} // Usando code como key
                                item={{
                                    code: item.code, // Usando code ao invés de id
                                    name: item.name,
                                    requiredPoints: item.requiredPoints,
                                    imageUrl: item.imageUrl,
                                    description: item.description,
                                    sequencyValue: item.sequencyValue
                                }}
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
                            onSave={handleUpdateItem}
                        />
                    </S.Modal>
                </>
            )}
        </S.Container>
    );
};

export default Awards;
