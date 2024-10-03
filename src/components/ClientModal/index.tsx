import React from 'react';
import * as S from './styles';

interface ClientIdModalProps {
    clientId: string;
    setClientId: (id: string) => void;
    onConfirm: () => void;
    onCancel: () => void;
    isOpen: boolean;
}

export const ClientIdModal: React.FC<ClientIdModalProps> = ({
    clientId,
    setClientId,
    onConfirm,
    onCancel,
    isOpen
}) => {
    return (
        <S.ModalWrapper isOpen={isOpen}>
            <S.ModalContent>
                <S.Question>Insira o ID do Cliente</S.Question>
                <S.Input
                    type="text"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    placeholder="ID do Cliente"
                />
                <S.ButtonsWrapper>
                    <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
                    <S.ConfirmButton onClick={onConfirm}>
                        Consultar
                    </S.ConfirmButton>
                </S.ButtonsWrapper>
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default ClientIdModal;
