import React from 'react';
import * as S from './styles';

interface Props {
    source: string;
    subtitle: string;
}

export const ManagerSmallCard: React.FC<Props> = ({ source, subtitle }) => {
    return (
        <S.Wrapper>
            <S.Symbol src={source} />
            <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Wrapper>
    );
};

export default ManagerSmallCard;
