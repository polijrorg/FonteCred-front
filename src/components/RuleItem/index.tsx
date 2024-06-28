import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaEdit, FaTrash } from 'react-icons/fa';
import EditModal from 'components/RuleEditModal';
import * as S from './styles';

interface ExpandableListItemProps {
    title: string;
    content: string;
}

const ExpandableListItem: React.FC<ExpandableListItemProps> = ({
    title,
    content
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

    const handleSave = (newContent: string) => {
        setCurrentContent(newContent);
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
                        <FaTrash size={20} />
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
