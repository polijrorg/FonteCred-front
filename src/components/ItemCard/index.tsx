import React from 'react';
import * as S from './styles';

interface ItemCardProps {
    item: {
        id: string;
        name: string;
        points: number;
    };
    onEditClick: (item: { id: string; name: string; points: number }) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onEditClick }) => {
    return (
        <S.Card>
            <S.EditIcon
                src="assets/icons/edit.svg"
                alt="Edit"
                onClick={() => onEditClick(item)}
            />
            <S.Content>
                <S.Image src="assets/images/luva.jpg" />
            </S.Content>
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
