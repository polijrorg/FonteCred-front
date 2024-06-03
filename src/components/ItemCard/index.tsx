import React from 'react';
import * as S from './styles';

interface ItemCardProps {
    item: {
        name: string;
        points: number;
    };
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <S.Card>
            <S.EditIcon src="assets/icons/edit.svg" alt="Edit" />
            <S.Content>{/* colocar imagem aqui */}</S.Content>
            <S.Footer>
                <S.ItemName>{item.name}</S.ItemName>
                <S.Points>
                    Pontos <span>{item.points}</span>
                </S.Points>
            </S.Footer>
        </S.Card>
    );
};

export default ItemCard;
