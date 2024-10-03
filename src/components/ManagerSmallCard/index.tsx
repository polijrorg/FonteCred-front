import React from 'react';
import * as S from './styles';

interface Props {
    source: string;
    subtitle: string;
    onClick?: () => void;
}

export const ManagerSmallCard: React.FC<Props> = ({
    source,
    subtitle,
    onClick
}) => {
    return (
        <S.Wrapper onClick={onClick}>
            <S.Symbol src={source} />
            <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Wrapper>
    );
};

export default ManagerSmallCard;
