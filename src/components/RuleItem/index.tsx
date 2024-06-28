import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaEdit, FaTrash } from 'react-icons/fa';
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

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <S.ListItem>
            <S.ListItemHeader>
                <S.ListItemTitle>{title}</S.ListItemTitle>
                <S.IconWrapper>
                    {isExpanded ? (
                        <FaChevronUp size={20} onClick={toggleExpansion} />
                    ) : (
                        <FaChevronDown size={20} onClick={toggleExpansion} />
                    )}
                    <FaEdit size={20} />
                    <FaTrash size={20} />
                </S.IconWrapper>
            </S.ListItemHeader>
            {isExpanded && <S.ListItemContent>{content}</S.ListItemContent>}
        </S.ListItem>
    );
};

export default ExpandableListItem;
