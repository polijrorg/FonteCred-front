import React from 'react';
import * as S from './styles';

interface Props {
    tabletitle: string;
    leftTitle: string;
    rightTitle: string;
    leftText: string;
    rightText: string;
}

export const ManagerBigCard: React.FC<Props> = ({
    tabletitle,
    leftTitle,
    rightTitle,
    leftText,
    rightText
}) => {
    return (
        <S.Wrapper>
            <S.TitleCardDiv>
                <S.InvisibleDiv />
                <S.Subtitle>{tabletitle}</S.Subtitle>
                <S.Symbol src="assets/icons/Download.svg" />
            </S.TitleCardDiv>
            <S.TitleTableDiv>
                <S.TableTitle>{leftTitle}</S.TableTitle>
                <S.TableTitle>{rightTitle}</S.TableTitle>
            </S.TitleTableDiv>
            <S.TableTextDiv>
                <S.TableText>{leftText}</S.TableText>
                <S.TableText>{rightText}</S.TableText>
            </S.TableTextDiv>
        </S.Wrapper>
    );
};

export default ManagerBigCard;
