import React from 'react';
import * as S from './styles';

interface ItemCardProps {
    item: {
        code: string;
        name: string;
        requiredPoints: number;
        imageUrl: string | null;
        description: string;
        sequencyValue: number;
    };
    onEditClick: (item: {
        code: string;
        name: string;
        requiredPoints: number;
        imageUrl: string | null;
        description: string;
        sequencyValue: number;
    }) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onEditClick }) => {
    return (
        <S.Card>
            <S.EditIcon
                src="assets/icons/edit.svg"
                alt="Edit"
                onClick={() =>
                    onEditClick({
                        ...item,
                        requiredPoints: item.requiredPoints
                    })
                }
            />
            <S.Content>
                <S.Image src={item.imageUrl || 'assets/images/default.jpg'} />{' '}
            </S.Content>
            <S.Footer>
                <S.ItemName>{item.name}</S.ItemName>
                <S.Points>
                    Pontos <span>{item.requiredPoints}</span>
                </S.Points>
            </S.Footer>
        </S.Card>
    );
};

export default ItemCard;
