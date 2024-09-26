/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import ItemCard from 'components/ItemCard';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Searchbar from 'components/Searchbar';
import AwardEditingModal from 'components/AwardEditingModal';
import AwardsService from 'services/AwardsService';
import AwardCreationModal from 'components/AwardCreationModal';
import * as S from './styles';

interface Value {
    id: string;
    value: string;
    isAvailable: boolean;
    optionId: string;
}

interface Option {
    id: string;
    title: string;
    values: Value[];
    prizeCode: string;
    prizeVersion: number;
}

interface Awards {
    code: string;
    name: string;
    percentage: number;
    imageUrl: string | null;
    description: string;
    sequencyValue: number;
    options: Option[];
    timesRedeemed: number;
}

interface Item extends Awards {
    options: Option[];
}

interface NewAward {
    code?: string;
    name: string;
    percentage: number;
    prizeImage?: File | null;
    description: string;
    sequencyValue: number;
    isCoupon: boolean;
    options: Option[];
}

const Awards: React.FC = () => {
    const [data, setData] = useState<Awards[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [isCreatingNewAward, setIsCreatingNewAward] = useState(false);

    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEditClick = (item: Item) => {
        setSelectedItem(item);
    };

    const handleCreateAward = () => {
        setIsCreatingNewAward(true);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setIsCreatingNewAward(false);
    };

    const handleSaveNewAward = async (newAward: NewAward) => {
        try {
            // Prepara os dados para o envio na requisição
            const formData = new FormData();
            if (newAward.code) {
                formData.append('code', newAward.code.toString());
            }
            formData.append('name', newAward.name);
            formData.append('percentage', newAward.percentage.toString());
            formData.append('description', newAward.description);
            formData.append('sequencyValue', newAward.sequencyValue.toString());

            // Adiciona a imagem do prêmio (caso exista)
            if (newAward.prizeImage) {
                formData.append('prizeImage', newAward.prizeImage);
            }

            formData.append('isCoupon', newAward.isCoupon.toString());

            // Adiciona as opções (tamanho e cor) se existirem
            if (newAward.options && newAward.options.length > 0) {
                formData.append('options', JSON.stringify(newAward.options));
            }

            // Faz a requisição para criar o novo prêmio
            await AwardsService.createPrize(formData);

            // Atualiza a lista de prêmios e fecha o modal
            const updatedAwards = await AwardsService.getAwardsInfo(
                0,
                10,
                'Nome',
                'A-Z'
            );
            setData(updatedAwards);
            handleCloseModal();
        } catch (error) {
            console.error('Erro ao criar o prêmio:', error);
        }
    };

    const handleUpdateItem = (updateItem: Awards | null) => {
        if (updateItem === null) {
            setData((prevData) =>
                prevData.filter((item) => item.code !== selectedItem?.code)
            );
        } else {
            setData((prevData) =>
                prevData.map((item) =>
                    item.code === updateItem.code ? updateItem : item
                )
            );
        }
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
                points: award.percentage,
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
                        <S.CreateAwardButton onClick={handleCreateAward}>
                            Criar novo prêmio
                        </S.CreateAwardButton>
                        <Searchbar onSearch={setSearchQuery} />
                    </S.SubtitleDiv>
                    <S.Grid>
                        {filteredItems.map((item) => (
                            <ItemCard
                                key={item.code}
                                item={{
                                    code: item.code,
                                    name: item.name,
                                    percentage: item.percentage,
                                    imageUrl: item.imageUrl,
                                    description: item.description,
                                    sequencyValue: item.sequencyValue,
                                    ...(item.options && {
                                        options: item.options
                                    })
                                }}
                                onEditClick={() =>
                                    handleEditClick({
                                        ...item,
                                        options: item.options || []
                                    })
                                }
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
            {isCreatingNewAward && (
                <>
                    <S.Overlay onClick={handleCloseModal} />
                    <S.Modal>
                        <AwardCreationModal
                            onClose={handleCloseModal}
                            onSave={handleSaveNewAward}
                        />
                    </S.Modal>
                </>
            )}
        </S.Container>
    );
};

export default Awards;
