import React from 'react';
import ExpandableListItem from 'components/RuleItem';
import { RulesList } from 'services/RulesService';
import * as S from './styles';

interface RuleListProps {
    rules: RulesList[];
    deletar: (id: string) => void;
}

const RuleList: React.FC<RuleListProps> = ({ rules, deletar }) => {
    return (
        <S.ListWrapper>
            {rules.map((rule) => (
                <ExpandableListItem
                    key={rule.id}
                    title={rule.policyName}
                    content={rule.policyDescription}
                    onDelete={() => deletar(rule.id)}
                    id={rule.id}
                />
            ))}
        </S.ListWrapper>
    );
};

export default RuleList;
