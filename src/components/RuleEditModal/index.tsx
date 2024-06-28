import React from 'react';
import Modal from 'react-modal';
import * as S from './styles';

interface EditModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    content: string;
    onSave: (newContent: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({
    isOpen,
    onRequestClose,
    content,
    onSave
}) => {
    const [newContent, setNewContent] = React.useState(content);

    const handleSave = () => {
        onSave(newContent);
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            style={S.customModalStyles} // Aplica os estilos personalizados
        >
            <S.ModalContent>
                <S.ModalTextArea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
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

export default EditModal;
