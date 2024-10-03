/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Awards from 'template/Awards';
import AwardsService from 'services/AwardsService';
import DownloadService from 'services/DownloadService';
import * as S from './styles';

interface Props {
    tabletitle: string;
    leftTitle: string;
    rightTitle: string;
}

export const MostRedeemedItens: React.FC<Props> = ({
    tabletitle,
    leftTitle,
    rightTitle
}) => {
    const [awards, setAwards] = useState<Awards[]>([]);

    useEffect(() => {
        const fetchAwards = async () => {
            try {
                const awardsData = await AwardsService.getAwardsInfo();
                // Ordenar os prêmios por 'timesRedeemed' em ordem decrescente
                const sortedAwards = awardsData.sort(
                    (a, b) => b.timesRedeemed - a.timesRedeemed
                );
                // Limitar para apenas os 5 primeiros
                const topFiveAwards = sortedAwards.slice(0, 5);
                setAwards(topFiveAwards);
            } catch (error) {
                console.error('Erro ao buscar os prêmios:', error);
            }
        };

        fetchAwards();
    }, []);

    // Função para fazer o download do CSV
    const handleDownload = async () => {
        await DownloadService.downloadCSVItens();
    };

    return (
        <S.Wrapper>
            <S.TitleCardDiv>
                <S.InvisibleDiv />
                <S.Subtitle>{tabletitle}</S.Subtitle>
                <S.Symbol
                    src="assets/icons/Download.svg"
                    onClick={handleDownload}
                />{' '}
                {/* Adicionei o evento onClick */}
            </S.TitleCardDiv>
            <S.TitleTableDiv>
                <S.TableTitle>{leftTitle}</S.TableTitle>
                <S.TableTitle>{rightTitle}</S.TableTitle>
            </S.TitleTableDiv>
            {awards.map((award) => (
                <S.TableTextDiv key={award.code}>
                    <S.TableText>{award.name}</S.TableText>
                    <S.TableText>{award.timesRedeemed}</S.TableText>
                </S.TableTextDiv>
            ))}
        </S.Wrapper>
    );
};

export default MostRedeemedItens;
