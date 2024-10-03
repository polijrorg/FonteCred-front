import React, { useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';

interface CreateRuleModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onSave: (title: string, content: string) => void;
}

const CreateRuleModal: React.FC<CreateRuleModalProps> = ({
    isOpen,
    onRequestClose,
    onSave
}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        onSave(title, content);
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            style={S.customModalStyles}
        >
            <S.ModalContent>
                <S.ModalInput
                    type="text"
                    placeholder="Título da Regra"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <S.ModalTextArea
                    placeholder="Conteúdo da Regra"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <S.ModalButtons>
                    <S.ModalButton onClick={handleSave}>Salvar</S.ModalButton>
                    <S.ModalButton onClick={onRequestClose}>
                        Cancelar
                    </S.ModalButton>
                </S.ModalButtons>
            </S.ModalContent>
        </Modal>
    );
};

export default CreateRuleModal;
