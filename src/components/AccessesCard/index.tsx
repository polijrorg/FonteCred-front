/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import ClientListService, { Client } from 'services/ClientListService';
import DownloadService from 'services/DownloadService'; // Importar o novo service
import * as S from './styles';

interface Props {
    tabletitle: string;
    leftTitle: string;
    rightTitle: string;
}

export const AccessesCard: React.FC<Props> = ({
    tabletitle,
    leftTitle,
    rightTitle
}) => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const clientsData = await ClientListService.getClients();
                const sortedClients = clientsData.sort(
                    (a, b) => b.accesses - a.accesses
                );
                const topFiveClients = sortedClients.slice(0, 5);
                setClients(topFiveClients);
            } catch (error) {
                console.error('Erro ao buscar os clientes:', error);
            }
        };

        fetchClients();
    }, []);

    // Função para fazer o download do CSV
    const handleDownload = async () => {
        await DownloadService.downloadCSVClients();
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
            {clients.map((client) => (
                <S.TableTextDiv key={client.id}>
                    <S.TableText>{client.name}</S.TableText>
                    <S.TableText>{client.accesses}</S.TableText>
                </S.TableTextDiv>
            ))}
        </S.Wrapper>
    );
};

export default AccessesCard;
