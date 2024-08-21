/* eslint-disable no-console */
import React, { useState } from 'react';
import AwardsService from 'services/AwardsService';
import * as S from './styles';

interface Item {
    code: string;
    name: string;
    requiredPoints: number;
    imageUrl: string | null;
    description: string;
    sequencyValue: number;
}

interface AwardEditingModalProps {
    item: Item;
    onClose: () => void;
    onSave: (updateItem: Item | null) => void;
}

const AwardEditingModal: React.FC<AwardEditingModalProps> = ({
    item,
    onClose,
    onSave
}) => {
    const [editingFields, setEditingFields] = useState<{
        [key: string]: boolean;
    }>({});
    const [editedValues, setEditedValues] = useState<Item>(item);

    const handleEditClick = (field: string) => {
        setEditingFields((prev) => ({ ...prev, [field]: true }));
    };

    const handleInputChange = (field: string, value: string | number) => {
        setEditedValues((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        try {
            await AwardsService.updatePrize(editedValues);
            onSave(editedValues);
        } catch (error) {
            console.error('Erro ao atualizar o prêmio:', error);
        }
    };

    const handleDeletePrize = async () => {
        try {
            await AwardsService.deletePrize(item.code);
            onSave(null); // Passa null para remover o item da lista
        } catch (error) {
            console.error('Erro ao deletar o prêmio:', error);
        }
    };

    return (
        <S.Card>
            <S.DeleteButtons>
                <S.DeleteIcon src="assets/icons/toggle.svg" />
                <S.DeleteIcon
                    src="assets/icons/delete.svg"
                    onClick={handleDeletePrize}
                />
            </S.DeleteButtons>
            <S.TopSection>
                <S.ImageWrapper>
                    <S.ImagePlaceholder
                        src="assets/images/camera.svg"
                        alt="Placeholder"
                    />
                    <S.ItemDetails>
                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>Nome do item</S.DetailTitle>
                                {editingFields.name ? (
                                    <input
                                        type="text"
                                        value={editedValues.name}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'name',
                                                e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <S.DetailText>
                                        {editedValues.name}
                                    </S.DetailText>
                                )}
                            </S.Detail>
                            <S.EditPen
                                src="assets/icons/editingPen.svg"
                                onClick={() => handleEditClick('name')}
                            />
                        </S.DetailDiv>

                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>Pontos</S.DetailTitle>
                                {editingFields.requiredPoints ? (
                                    <input
                                        type="number"
                                        value={editedValues.requiredPoints}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'requiredPoints',
                                                +e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <S.DetailText>
                                        {editedValues.requiredPoints}
                                    </S.DetailText>
                                )}
                            </S.Detail>
                            <S.EditPen
                                src="assets/icons/editingPen.svg"
                                onClick={() =>
                                    handleEditClick('requiredPoints')
                                }
                            />
                        </S.DetailDiv>

                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>Descrição</S.DetailTitle>
                                {editingFields.description ? (
                                    <input
                                        type="text"
                                        value={editedValues.description}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'description',
                                                e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <S.DetailText>
                                        {editedValues.description}
                                    </S.DetailText>
                                )}
                            </S.Detail>
                            <S.EditPen
                                src="assets/icons/editingPen.svg"
                                onClick={() => handleEditClick('description')}
                            />
                        </S.DetailDiv>

                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>
                                    Valor na Sequência
                                </S.DetailTitle>
                                {editingFields.sequencyValue ? (
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={editedValues.sequencyValue}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'sequencyValue',
                                                +e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <S.DetailText>
                                        {editedValues.sequencyValue}
                                    </S.DetailText>
                                )}
                            </S.Detail>
                            <S.EditPen
                                src="assets/icons/editingPen.svg"
                                onClick={() => handleEditClick('sequencyValue')}
                            />
                        </S.DetailDiv>

                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>Código do Produto</S.DetailTitle>
                                {editingFields.code ? (
                                    <input
                                        type="text"
                                        value={editedValues.code}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'code',
                                                e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <S.DetailText>
                                        {editedValues.code}
                                    </S.DetailText>
                                )}
                            </S.Detail>
                            <S.EditPen
                                src="assets/icons/editingPen.svg"
                                onClick={() => handleEditClick('code')}
                            />
                        </S.DetailDiv>
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
                <S.EditButton onClick={handleSave}>Confirmar</S.EditButton>
            </S.ActionButtons>
        </S.Card>
    );
};

export default AwardEditingModal;
