import React from 'react';
import ExpandableListItem from 'components/RuleItem';
import * as S from './styles';

interface RuleListProps {
    rules: Array<{
        id: string;
        title: string;
        content: string;
    }>;
}

const RuleList: React.FC<RuleListProps> = ({ rules }) => {
    return (
        <S.ListWrapper>
            {rules.map((rule) => (
                <ExpandableListItem
                    key={rule.id}
                    title={rule.title}
                    content={rule.content}
                />
            ))}
        </S.ListWrapper>
    );
};

export default RuleList;
