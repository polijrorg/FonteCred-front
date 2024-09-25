import React, { useState } from 'react';
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

interface NewAward {
    name: string;
    percentage: number;
    imageUrl: string | null;
    description: string;
    sequencyValue: number;
    options: Option[];
    isCoupon: boolean;
}

interface AwardCreationModalProps {
    onClose: () => void;
    onSave: (newAward: NewAward) => void;
}

const AwardCreationModal: React.FC<AwardCreationModalProps> = ({
    onClose,
    onSave
}) => {
    const [addingColor, setAddingColor] = useState(false);
    const [awardDetails, setAwardDetails] = useState<NewAward>({
        name: '',
        percentage: 0,
        imageUrl: null,
        description: '',
        sequencyValue: 0,
        options: [],
        isCoupon: false
    });
    const colorOption = awardDetails.options?.find(
        (opt) => opt.title === 'cor'
    );

    const handleInputChange = (
        field: keyof NewAward,
        value: string | number
    ) => {
        setAwardDetails((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddColor = (colorName: string) => {
        if (colorOption) {
            setAwardDetails((prev) => ({
                ...prev,
                options: prev.options.map((opt) =>
                    opt.title === 'cor'
                        ? {
                              ...opt,
                              values: [
                                  ...opt.values,
                                  {
                                      id: Math.random().toString(),
                                      value: colorName,
                                      isAvailable: true,
                                      optionId: opt.id
                                  }
                              ]
                          }
                        : opt
                )
            }));
        } else {
            // Adiciona a opção "cor" se não existir
            setAwardDetails((prev) => ({
                ...prev,
                options: [
                    ...prev.options,
                    {
                        id: Math.random().toString(),
                        title: 'cor',
                        prizeCode: '',
                        prizeVersion: 1,
                        values: [
                            {
                                id: Math.random().toString(),
                                value: colorName,
                                isAvailable: true,
                                optionId: ''
                            }
                        ]
                    }
                ]
            }));
        }
    };

    const handleAddOption = (optionType: 'tamanho' | 'cor') => {
        if (optionType === 'cor') {
            setAddingColor(true); // Atualiza o estado para mostrar o input de cor
        }

        const newOption: Option = {
            id: Math.random().toString(),
            title: optionType,
            prizeCode: '', // Adicione esta linha
            prizeVersion: 1, // Adicione esta linha
            values:
                optionType === 'tamanho'
                    ? [
                          {
                              id: '1',
                              value: 'PP',
                              isAvailable: false,
                              optionId: ''
                          },
                          {
                              id: '2',
                              value: 'P',
                              isAvailable: false,
                              optionId: ''
                          },
                          {
                              id: '3',
                              value: 'M',
                              isAvailable: false,
                              optionId: ''
                          },
                          {
                              id: '4',
                              value: 'G',
                              isAvailable: false,
                              optionId: ''
                          },
                          {
                              id: '5',
                              value: 'GG',
                              isAvailable: false,
                              optionId: ''
                          }
                      ]
                    : []
        };

        setAwardDetails((prev) => ({
            ...prev,
            options: [...prev.options, newOption]
        }));
    };

    const handleSave = () => {
        onSave(awardDetails);
    };

    return (
        <S.Card>
            <S.TopSection>
                <S.ImageWrapper>
                    <S.ImagePlaceholder
                        src={
                            awardDetails.imageUrl ||
                            'assets/images/defaultPic.jpg'
                        }
                        alt="Placeholder"
                        onClick={() =>
                            document.getElementById('imageUpload')?.click()
                        }
                    />
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                const imageUrl = URL.createObjectURL(file);
                                setAwardDetails((prev) => ({
                                    ...prev,
                                    imageUrl
                                }));
                            }
                        }}
                    />

                    <S.ItemDetails>
                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>Nome do item</S.DetailTitle>
                                <input
                                    type="text"
                                    value={awardDetails.name}
                                    onChange={(e) =>
                                        handleInputChange(
                                            'name',
                                            e.target.value
                                        )
                                    }
                                />
                            </S.Detail>
                        </S.DetailDiv>

                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>
                                    Percentual de resgate
                                </S.DetailTitle>
                                <input
                                    type="number"
                                    value={awardDetails.percentage}
                                    onChange={(e) =>
                                        handleInputChange(
                                            'percentage',
                                            +e.target.value
                                        )
                                    }
                                />
                            </S.Detail>
                        </S.DetailDiv>

                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>Descrição</S.DetailTitle>
                                <input
                                    type="text"
                                    value={awardDetails.description}
                                    onChange={(e) =>
                                        handleInputChange(
                                            'description',
                                            e.target.value
                                        )
                                    }
                                />
                            </S.Detail>
                        </S.DetailDiv>

                        <S.DetailDiv>
                            <S.Detail>
                                <S.DetailTitle>
                                    Valor na Sequência
                                </S.DetailTitle>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={awardDetails.sequencyValue}
                                    onChange={(e) =>
                                        handleInputChange(
                                            'sequencyValue',
                                            +e.target.value
                                        )
                                    }
                                />
                            </S.Detail>
                        </S.DetailDiv>
                    </S.ItemDetails>
                </S.ImageWrapper>
            </S.TopSection>
            <S.ActionButtonsDiv>
                <S.ActionButtons>
                    <S.AddCharacteristicButton
                        onClick={() => handleAddOption('tamanho')}
                    >
                        Adicionar Tamanho
                    </S.AddCharacteristicButton>
                    <S.AddCharacteristicButton
                        onClick={() => {
                            handleAddOption('cor');
                            setAddingColor(true);
                        }}
                    >
                        Adicionar Cor
                    </S.AddCharacteristicButton>
                </S.ActionButtons>

                <S.ActionButtons>
                    <S.CancelButton onClick={onClose}>Cancelar</S.CancelButton>
                    <S.EditButton onClick={handleSave}>Salvar</S.EditButton>
                </S.ActionButtons>
            </S.ActionButtonsDiv>
            {awardDetails.options.some((opt) => opt.title === 'tamanho') && (
                <S.Sizes>
                    <S.SizeTitleContainer>
                        <S.SizeTitle>Tamanhos</S.SizeTitle>
                        <S.DeleteIcon2
                            src="assets/icons/delete.svg"
                            alt="Remover tamanhos"
                            onClick={() => {
                                setAwardDetails((prev) => ({
                                    ...prev,
                                    options: prev.options.filter(
                                        (opt) => opt.title !== 'tamanho'
                                    )
                                }));
                            }}
                        />
                    </S.SizeTitleContainer>
                    {awardDetails.options
                        .find((opt) => opt.title === 'tamanho')
                        ?.values.map(({ value, isAvailable, id }) => (
                            <S.SizeButton
                                key={id}
                                selected={isAvailable}
                                onClick={() =>
                                    setAwardDetails((prev) => ({
                                        ...prev,
                                        options: prev.options.map((opt) =>
                                            opt.title === 'tamanho'
                                                ? {
                                                      ...opt,
                                                      values: opt.values.map(
                                                          (val) =>
                                                              val.value ===
                                                              value
                                                                  ? {
                                                                        ...val,
                                                                        isAvailable:
                                                                            !val.isAvailable
                                                                    }
                                                                  : val
                                                      )
                                                  }
                                                : opt
                                        )
                                    }))
                                }
                            >
                                {value}
                            </S.SizeButton>
                        ))}
                </S.Sizes>
            )}

            {addingColor && (
                <S.ColorContainer>
                    <input
                        type="text"
                        placeholder="Digite o nome da cor e pressione Enter"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.currentTarget.value) {
                                handleAddColor(e.currentTarget.value);
                                e.currentTarget.value = ''; // Limpa o campo de input após adicionar
                            }
                        }}
                    />
                    <S.FinishButton onClick={() => setAddingColor(false)}>
                        Finalizar Adição de Cores
                    </S.FinishButton>
                </S.ColorContainer>
            )}

            {colorOption && colorOption.values?.length > 0 && (
                <S.Sizes>
                    <S.SizeTitleContainer>
                        <S.SizeTitle>Cores</S.SizeTitle>
                        <S.DeleteIcon2
                            src="assets/icons/delete.svg"
                            alt="Remover todas as cores"
                            onClick={() => {
                                setAwardDetails((prev) => ({
                                    ...prev,
                                    options: prev.options.filter(
                                        (opt) => opt.title !== 'cor'
                                    )
                                }));
                            }}
                        />
                    </S.SizeTitleContainer>
                    {colorOption.values.map(({ value }) => (
                        <S.ColorContainer key={value}>
                            <S.ColorBoxText>{value}</S.ColorBoxText>
                            <S.DeleteIcon3Div>
                                <S.DeleteIcon3
                                    src="assets/icons/delete.svg"
                                    alt="Remover cor"
                                    onClick={() => {
                                        setAwardDetails((prev) => ({
                                            ...prev,
                                            options: prev.options.map((opt) =>
                                                opt.title === 'cor'
                                                    ? {
                                                          ...opt,
                                                          values: opt.values.filter(
                                                              (val) =>
                                                                  val.value !==
                                                                  value
                                                          )
                                                      }
                                                    : opt
                                            )
                                        }));
                                    }}
                                />
                            </S.DeleteIcon3Div>
                        </S.ColorContainer>
                    ))}
                </S.Sizes>
            )}
        </S.Card>
    );
};

export default AwardCreationModal;
