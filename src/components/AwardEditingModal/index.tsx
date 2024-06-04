import React from 'react';
import * as S from './styles';

interface Item {
    id: string;
    name: string;
    points: number;
}

interface AwardEditingModalProps {
    item: Item;
    onClose: () => void;
}

const AwardEditingModal: React.FC<AwardEditingModalProps> = ({
    item,
    onClose
}) => {
    return (
        <S.Card>
            <S.DeleteButtons>
                <S.DeleteIcon src="assets/icons/toggle.svg" />
                <S.DeleteIcon src="assets/icons/delete.svg" />
            </S.DeleteButtons>
            <S.TopSection>
                <S.ImageWrapper>
                    <S.ImagePlaceholder
                        src="assets/images/camera.svg"
                        alt="Placeholder"
                    />
                    <S.ItemDetails>
                        <S.Detail>
                            <S.DetailTitle>Nome do item</S.DetailTitle>
                            <S.DetailText>{item.name}</S.DetailText>
                        </S.Detail>
                        <S.Detail>
                            <S.DetailTitle>Pontos</S.DetailTitle>
                            <S.DetailText>{item.points}</S.DetailText>
                        </S.Detail>
                        <S.Detail>
                            <S.DetailTitle>Descrição</S.DetailTitle>
                            <S.DetailText>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt
                            </S.DetailText>
                        </S.Detail>
                        <S.Detail>
                            <S.DetailTitle>Valor na Sequência</S.DetailTitle>
                            <S.DetailText>XX</S.DetailText>
                        </S.Detail>
                        <S.Detail>
                            <S.DetailTitle>Código do Produto</S.DetailTitle>
                            <S.DetailText>XXXXXX</S.DetailText>
                        </S.Detail>
                    </S.ItemDetails>
                </S.ImageWrapper>
            </S.TopSection>
            <S.Sizes>
                <S.SizeTitle>Tamanhos</S.SizeTitle>
                {['PP', 'P', 'M', 'G', 'GG'].map((size) => (
                    <S.SizeButton key={size} selected={size === 'P'}>
                        {size}
                    </S.SizeButton>
                ))}
            </S.Sizes>
            <S.ActionButtons>
                <S.CancelButton onClick={onClose}>Cancelar</S.CancelButton>
                <S.EditButton>Confirmar</S.EditButton>
            </S.ActionButtons>
        </S.Card>
    );
};

export default AwardEditingModal;
