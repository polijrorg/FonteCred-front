/* eslint-disable no-console */
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaEdit, FaTrash } from 'react-icons/fa';
import EditModal from 'components/RuleEditModal';
import RulesService from 'services/RulesService';
import * as S from './styles';

interface ExpandableListItemProps {
    id: string;
    title: string;
    content: string;
    onDelete: () => void;
}

const ExpandableListItem: React.FC<ExpandableListItemProps> = ({
    id,
    title,
    content,
    onDelete
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentContent, setCurrentContent] = useState(content);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = async (newContent: string) => {
        try {
            const response = await RulesService.patchRule(id, newContent);
            console.log(response);
            setCurrentContent(newContent);
            closeModal();
        } catch (err) {
            console.error('Erro ao atualizar a regra:', err);
        }
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <>
            <S.ListItem>
                <S.ListItemHeader>
                    <S.ListItemTitle>{title}</S.ListItemTitle>
                    <S.IconWrapper>
                        {isExpanded ? (
                            <FaChevronUp size={20} onClick={toggleExpansion} />
                        ) : (
                            <FaChevronDown
                                size={20}
                                onClick={toggleExpansion}
                            />
                        )}
                        <FaEdit size={20} onClick={openModal} />
                        <FaTrash size={20} onClick={handleDelete} />
                    </S.IconWrapper>
                </S.ListItemHeader>
                {isExpanded && (
                    <S.ListItemContent>{currentContent}</S.ListItemContent>
                )}
            </S.ListItem>
            <EditModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                content={currentContent}
                onSave={handleSave}
            />
        </>
    );
};

export default ExpandableListItem;
