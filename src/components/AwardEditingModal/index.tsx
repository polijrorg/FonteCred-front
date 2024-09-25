/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import AwardsService from 'services/AwardsService';
import ConfirmationModal from 'components/ConfirmationModal';
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
    prizeCode: string;
    prizeVersion: number;
    values: Value[];
}

interface Awards {
    code: string;
    name: string;
    percentage: number;
    imageUrl: string | null;
    description: string;
    sequencyValue: number;
    options: Option[]; // Adicione esta linha para incluir as opções
}

interface Item extends Awards {
    size?: string; // Adicionado para a seleção de tamanho
    color?: string; // Adicionado para a seleção de cor
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
    const [sizes, setSizes] = useState<Value[]>([]);
    const [colors, setColors] = useState<Value[]>([]);
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
        useState(false);
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

    useEffect(() => {
        const fetchPrizeDetails = async () => {
            try {
                const prizeDetails = await AwardsService.getPrizeDetails(
                    item.code
                );

                // Não filtre por `isAvailable`, capture todos os valores
                const sizeOption = prizeDetails.options.find(
                    (option) => option.title.toLowerCase() === 'tamanho'
                );
                const colorOption = prizeDetails.options.find(
                    (option) => option.title.toLowerCase() === 'cor'
                );

                // Atualize os estados de tamanho e cor com todos os valores
                if (sizeOption) {
                    setSizes(sizeOption.values); // Agora setSizes espera um array do tipo Value[]
                }
                if (colorOption) {
                    setColors(colorOption.values); // Agora setColors espera um array do tipo Value[]
                }
            } catch (error) {
                console.error('Erro ao buscar os detalhes do prêmio:', error);
            }
        };

        fetchPrizeDetails();
    }, [item.code]);

    return (
        <S.Card>
            {isConfirmationModalVisible && (
                <ConfirmationModal
                    onConfirm={() => {
                        handleDeletePrize();
                        setIsConfirmationModalVisible(false);
                    }}
                    onCancel={() => setIsConfirmationModalVisible(false)}
                />
            )}
            <S.DeleteButtons>
                <S.DeleteIcon src="assets/icons/toggle.svg" />
                <S.DeleteIcon
                    src="assets/icons/delete.svg"
                    onClick={() => setIsConfirmationModalVisible(true)}
                />
            </S.DeleteButtons>
            <S.TopSection>
                <S.ImageWrapper>
                    {item.imageUrl ? (
                        <S.Image src={item.imageUrl} alt={item.name} />
                    ) : (
                        <S.ImagePlaceholder
                            src="assets/images/camera.svg"
                            alt="Placeholder"
                        />
                    )}
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
                                <S.DetailTitle>
                                    Percentual de resgate
                                </S.DetailTitle>
                                {editingFields.percentage ? (
                                    <input
                                        type="number"
                                        value={editedValues.percentage}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'percentage',
                                                +e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <S.DetailText>
                                        {editedValues.percentage}
                                    </S.DetailText>
                                )}
                            </S.Detail>
                            <S.EditPen
                                src="assets/icons/editingPen.svg"
                                onClick={() => handleEditClick('percentage')}
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
            {sizes.length > 0 && (
                <S.Sizes>
                    <S.SizeTitle>Tamanhos</S.SizeTitle>
                    {sizes.map(({ value, isAvailable }) => (
                        <S.SizeButton
                            key={value}
                            selected={isAvailable}
                            onClick={() =>
                                setEditedValues((prev) => ({
                                    ...prev,
                                    size: value
                                }))
                            }
                        >
                            {value}
                        </S.SizeButton>
                    ))}
                </S.Sizes>
            )}

            {colors.length > 0 && (
                <S.Colors>
                    <S.ColorTitle>Cores</S.ColorTitle>
                    {colors.map(({ value, isAvailable }) => (
                        <S.ColorButton
                            key={value}
                            selected={isAvailable} // Preenchida ou não dependendo de isAvailable
                            onClick={() =>
                                setEditedValues((prev) => ({
                                    ...prev,
                                    color: value
                                }))
                            }
                        >
                            {value}
                        </S.ColorButton>
                    ))}
                </S.Colors>
            )}
            <S.ActionButtons>
                <S.CancelButton onClick={onClose}>Cancelar</S.CancelButton>
                <S.EditButton onClick={handleSave}>Confirmar</S.EditButton>
            </S.ActionButtons>
        </S.Card>
    );
};

export default AwardEditingModal;
