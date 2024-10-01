/* eslint-disable no-alert */
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
    options: Option[];
    timesRedeemed: number;
}

interface Item extends Awards {
    size?: string;
    color?: string;
    isActive?: boolean;
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
    const [sizeOptionId, setSizeOptionId] = useState<string | null>(null);
    const [colorOptionId, setColorOptionId] = useState<string | null>(null);
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
        useState(false);
    const [editingFields, setEditingFields] = useState<{
        [key: string]: boolean;
    }>({});
    const [editedValues, setEditedValues] = useState<Item>(item);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isAddModalVisible2, setIsAddModalVisible2] = useState(false);
    const [newValue, setNewValue] = useState('');
    const [addType, setAddType] = useState<'size' | 'color' | null>(null);
    const [selectedAwardId, setSelectedAwardId] = useState<string | null>(null);
    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
        useState(false);
    const [deleteOptionType, setDeleteOptionType] = useState<
        'size' | 'color' | null
    >(null);

    const handleDeleteOption = async () => {
        try {
            const optionId =
                deleteOptionType === 'size' ? sizeOptionId : colorOptionId;

            if (!optionId) {
                console.error(
                    `ID de opção de ${deleteOptionType} não encontrado`
                );
                return;
            }

            // Enviando requisição DELETE
            await AwardsService.deletePrizeOption(optionId);

            // Atualizando o estado
            if (deleteOptionType === 'size') {
                setSizes([]);
                setSizeOptionId(null);
            } else if (deleteOptionType === 'color') {
                setColors([]);
                setColorOptionId(null);
            }

            window.alert(
                `${
                    deleteOptionType === 'size' ? 'Tamanho' : 'Cor'
                } deletado com sucesso.`
            );
            console.log(
                `${
                    deleteOptionType === 'size' ? 'Tamanho' : 'Cor'
                } deletado com sucesso.`
            );
        } catch (error) {
            console.error('Erro ao deletar a opção:', error);
            window.alert('Erro ao deletar a opção');
        } finally {
            setIsDeleteConfirmationVisible(false);
        }
    };

    const openDeleteConfirmation = (type: 'size' | 'color') => {
        setDeleteOptionType(type);
        setIsDeleteConfirmationVisible(true);
    };

    const toggleSizeAvailability = (value: string) => {
        setSizes((prevSizes) =>
            prevSizes.map((size) =>
                size.value === value
                    ? { ...size, isAvailable: !size.isAvailable }
                    : size
            )
        );
    };

    const handleCreateOption = async () => {
        if (!selectedAwardId || !addType) return;

        const payload: Option = {
            id: '', // valor padrão vazio para id
            prizeCode: selectedAwardId, // Certifique-se de que `selectedAwardId` está definido corretamente
            prizeVersion: 0, // Define uma versão padrão, ajuste conforme necessário
            title: addType === 'size' ? 'Tamanho' : 'Cor',
            values: [
                {
                    id: '', // Adicione o campo 'id' ao valor
                    optionId: selectedAwardId, // Adicione o campo 'optionId' ao valor
                    value: newValue,
                    isAvailable: true
                }
            ]
        };

        try {
            await AwardsService.createPrizeOptions(selectedAwardId, payload);
            window.alert(
                `${
                    addType === 'size' ? 'Tamanho' : 'Cor'
                } adicionado com sucesso.`
            );

            // Atualize os arrays de tamanhos ou cores após adicionar
            if (addType === 'size') {
                setSizes((prevSizes) => [
                    ...prevSizes,
                    {
                        id: '',
                        value: newValue,
                        isAvailable: true,
                        optionId: selectedAwardId
                    }
                ]);
            } else {
                setColors((prevColors) => [
                    ...prevColors,
                    {
                        id: '',
                        value: newValue,
                        isAvailable: true,
                        optionId: selectedAwardId
                    }
                ]);
            }

            setIsAddModalVisible2(false);
            setNewValue('');
        } catch (error) {
            console.error('Erro ao adicionar opção:', error);
            window.alert('Erro ao adicionar opção');
        }
    };

    const handleAddNewValue = () => {
        if (addType === 'size') {
            setSizes((prevSizes) => [
                ...prevSizes,
                { id: '', value: newValue, isAvailable: true, optionId: '' }
            ]);
        } else if (addType === 'color') {
            setColors((prevColors) => [
                ...prevColors,
                { id: '', value: newValue, isAvailable: true, optionId: '' }
            ]);
        }
        setIsAddModalVisible(false);
        setNewValue('');
    };

    const toggleColorAvailability = (value: string) => {
        setColors((prevColors) =>
            prevColors.map((color) =>
                color.value === value
                    ? { ...color, isAvailable: !color.isAvailable }
                    : color
            )
        );
    };

    const handleEditClick = (field: string) => {
        setEditingFields((prev) => ({ ...prev, [field]: true }));
    };

    const handleInputChange = (field: string, value: string | number) => {
        setEditedValues((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        try {
            const formData = new FormData();
            formData.append('code', editedValues.code);
            formData.append('name', editedValues.name);
            formData.append('percentage', String(editedValues.percentage));
            formData.append('description', editedValues.description);
            formData.append(
                'sequencyValue',
                String(editedValues.sequencyValue)
            );
            if (editedValues.imageUrl) {
                formData.append('imageUrl', editedValues.imageUrl);
            }

            await AwardsService.updatePrize(formData);
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

    const openAddModal = (type: 'size' | 'color') => {
        setAddType(type);
        setIsAddModalVisible(true);
    };

    const openAddModal2 = (type: 'size' | 'color') => {
        setAddType(type);
        setIsAddModalVisible2(true);
    };

    const handleRemoveSize = (value: string) => {
        setSizes((prevSizes) =>
            prevSizes.filter((size) => size.value !== value)
        );
    };

    const handleRemoveColor = (value: string) => {
        setColors((prevColors) =>
            prevColors.filter((color) => color.value !== value)
        );
    };

    const handleSavePatch = async (optionType: 'size' | 'color') => {
        try {
            const optionId =
                optionType === 'size' ? sizeOptionId : colorOptionId;
            const values = optionType === 'size' ? sizes : colors;

            if (!optionId) {
                console.error(`ID de opção de ${optionType} não encontrado`);
                return;
            }

            const payload = {
                values: values.map(({ value, isAvailable }) => ({
                    value,
                    isAvailable
                }))
            };

            console.log(`Enviando PATCH para ${optionType} com ID:`, optionId);
            console.log('Payload:', payload);

            await AwardsService.updatePrizeOption(optionId, payload);

            window.alert(`Opções de ${optionType} atualizadas com sucesso.`);
            console.log(`Opções de ${optionType} atualizadas com sucesso.`);
        } catch (error) {
            window.alert(`Erro ao atualizar opções`);
        }
    };

    useEffect(() => {
        const fetchPrizeDetails = async () => {
            try {
                const prizeDetails = await AwardsService.getPrizeDetails(
                    item.code
                );

                const sizeOption = prizeDetails.options.find(
                    (option) => option.title.toLowerCase() === 'tamanho'
                );
                const colorOption = prizeDetails.options.find(
                    (option) => option.title.toLowerCase() === 'cor'
                );

                if (sizeOption) {
                    setSizeOptionId(sizeOption.id);
                    setSizes(sizeOption.values);
                }

                if (colorOption) {
                    setColorOptionId(colorOption.id);
                    setColors(colorOption.values);
                }

                setSelectedAwardId(item.code);
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
                    message="Tem certeza que deseja excluir esse prêmio?"
                />
            )}

            {isAddModalVisible && (
                <S.AddModalBackdrop>
                    <S.AddModalContent>
                        <S.AddModalTitle>
                            Adicionar Novo(a){' '}
                            {addType === 'size' ? 'Tamanho' : 'Cor'}
                        </S.AddModalTitle>
                        <S.AddModalInput
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            placeholder={`Digite o novo ${
                                addType === 'size' ? 'tamanho' : 'cor'
                            }`}
                        />
                        <S.DeleteButtons>
                            <S.CancelButton
                                onClick={() => setIsAddModalVisible(false)}
                            >
                                Cancelar
                            </S.CancelButton>
                            <S.EditButton onClick={handleAddNewValue}>
                                Adicionar
                            </S.EditButton>
                        </S.DeleteButtons>
                    </S.AddModalContent>
                </S.AddModalBackdrop>
            )}

            {isAddModalVisible2 && (
                <S.AddModalBackdrop>
                    <S.AddModalContent>
                        <S.AddModalTitle>
                            Adicionar Novo(a){' '}
                            {addType === 'size' ? 'Tamanho' : 'Cor'}
                        </S.AddModalTitle>
                        <S.AddModalInput
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            placeholder={`Digite o novo ${
                                addType === 'size' ? 'tamanho' : 'cor'
                            }`}
                        />
                        <S.DeleteButtons>
                            <S.CancelButton
                                onClick={() => setIsAddModalVisible(false)}
                            >
                                Cancelar
                            </S.CancelButton>
                            <S.EditButton onClick={handleCreateOption}>
                                Adicionar
                            </S.EditButton>
                        </S.DeleteButtons>
                    </S.AddModalContent>
                </S.AddModalBackdrop>
            )}

            {isDeleteConfirmationVisible && (
                <ConfirmationModal
                    onConfirm={handleDeleteOption}
                    onCancel={() => setIsDeleteConfirmationVisible(false)}
                    message="Tem certeza que deseja excluir esse atributo?"
                />
            )}

            <S.DeleteButtons>
                <S.ActiveButton
                    src="assets/icons/toggle.svg"
                    style={{
                        transform: !editedValues.isActive
                            ? 'rotate(0deg)'
                            : 'rotate(180deg)',
                        transition: 'transform 0.3s ease',
                        background: editedValues.isActive ? '#56B634' : '#fff'
                    }}
                    onClick={async () => {
                        const newIsActive = !editedValues.isActive;

                        // Atualiza o estado local
                        setEditedValues((prev) => ({
                            ...prev,
                            isActive: newIsActive
                        }));

                        try {
                            // Faz a requisição PATCH para atualizar o estado isActive
                            const formData = new FormData();
                            formData.append('code', editedValues.code);
                            formData.append('isActive', String(newIsActive));

                            await AwardsService.updatePrize(formData);
                            window.alert(
                                'Estado de ativação atualizado com sucesso.'
                            );
                        } catch (error) {
                            console.error(
                                'Erro ao atualizar o estado de ativação:',
                                error
                            );
                            window.alert(
                                'Erro ao atualizar o estado de ativação.'
                            );
                        }
                    }}
                />

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
                        {sizes.length === 0 && (
                            <S.EditButton2
                                onClick={() => openAddModal2('size')}
                            >
                                Adicionar Tamanho
                            </S.EditButton2>
                        )}

                        {colors.length === 0 && (
                            <S.EditButton2
                                onClick={() => openAddModal2('color')}
                            >
                                Adicionar Cor
                            </S.EditButton2>
                        )}
                    </S.ItemDetails>
                </S.ImageWrapper>
            </S.TopSection>
            {sizes.length > 0 && (
                <S.Sizes>
                    <S.SizeTitle>
                        Tamanhos
                        <S.RemoveButtonCategory
                            onClick={() => openDeleteConfirmation('size')}
                        >
                            ×
                        </S.RemoveButtonCategory>
                    </S.SizeTitle>
                    {sizes.map(({ value, isAvailable }) => (
                        <S.SizeButton
                            key={value}
                            selected={isAvailable}
                            onClick={() => toggleSizeAvailability(value)}
                        >
                            {value}
                            <S.RemoveButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveSize(value);
                                }}
                            >
                                ×
                            </S.RemoveButton>
                        </S.SizeButton>
                    ))}
                    <S.CancelButton onClick={() => openAddModal('size')}>
                        Adicionar
                    </S.CancelButton>
                    <S.EditButton onClick={() => handleSavePatch('size')}>
                        Salvar
                    </S.EditButton>
                </S.Sizes>
            )}

            {colors.length > 0 && (
                <S.Colors>
                    <S.ColorTitle>
                        Cores
                        <S.RemoveButtonCategory
                            onClick={() => openDeleteConfirmation('color')}
                        >
                            ×
                        </S.RemoveButtonCategory>
                    </S.ColorTitle>
                    {colors.map(({ value, isAvailable }) => (
                        <S.ColorButton
                            key={value}
                            selected={isAvailable}
                            onClick={() => toggleColorAvailability(value)}
                        >
                            {value}
                            <S.RemoveButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveColor(value);
                                }}
                            >
                                ×
                            </S.RemoveButton>
                        </S.ColorButton>
                    ))}
                    <S.CancelButton onClick={() => openAddModal('color')}>
                        Adicionar
                    </S.CancelButton>
                    <S.EditButton onClick={() => handleSavePatch('color')}>
                        Salvar
                    </S.EditButton>
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
