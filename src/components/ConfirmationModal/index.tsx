import React from 'react';
import * as S from './styles';

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    onConfirm,
    onCancel,
    message
}) => {
    return (
        <S.ModalWrapper>
            <S.ModalContent>
                <S.Question>{message}</S.Question>
                <S.ButtonsWrapper>
                    <S.CancelButton onClick={onCancel}>Não</S.CancelButton>
                    <S.ConfirmButton onClick={onConfirm}>Sim</S.ConfirmButton>
                </S.ButtonsWrapper>
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default ConfirmationModal;
