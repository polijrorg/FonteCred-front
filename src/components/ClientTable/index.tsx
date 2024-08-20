import React from 'react';
import { Client } from 'services/ClientListService';
import * as S from './styles';

// interface DataItem {
//     id: string;
//     nome: string;
//     pontos: number;
//     ultimaRetirada: string;
//     ultimoAcesso: string;
// }

interface TableProps {
    data: Client[];
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <S.TableWrapper>
            <S.Table>
                <thead>
                    <tr>
                        <S.TableHeader>Nome</S.TableHeader>
                        <S.TableHeader>Pontos</S.TableHeader>
                        <S.TableHeader>Última retirada</S.TableHeader>
                        <S.TableHeader>Último acesso</S.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((client) => (
                        <S.TableRow key={client.id}>
                            <S.TableData>{client.name}</S.TableData>
                            <S.TableData>{client.points}</S.TableData>
                            <S.TableData>{client.lastRedeem}</S.TableData>
                            <S.TableData>{client.lastLogin}</S.TableData>
                        </S.TableRow>
                    ))}
                </tbody>
            </S.Table>
        </S.TableWrapper>
    );
};

export default Table;
