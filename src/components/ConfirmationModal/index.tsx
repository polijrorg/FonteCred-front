import React from 'react';
import * as S from './styles';

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    onConfirm,
    onCancel
}) => {
    return (
        <S.ModalWrapper>
            <S.ModalContent>
                <S.Question>
                    Tem certeza que deseja apagar esse prêmio?
                </S.Question>
                <S.ButtonsWrapper>
                    <S.CancelButton onClick={onCancel}>Não</S.CancelButton>
                    <S.ConfirmButton onClick={onConfirm}>Sim</S.ConfirmButton>
                </S.ButtonsWrapper>
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default ConfirmationModal;
