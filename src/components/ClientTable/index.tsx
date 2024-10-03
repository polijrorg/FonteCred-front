import React from 'react';
import { Client } from 'services/ClientListService';
import * as S from './styles';

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
                        <S.TableHeader>Última retirada</S.TableHeader>
                        <S.TableHeader>Último acesso</S.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((client) => (
                        <S.TableRow key={client.id}>
                            <S.TableData>{client.name}</S.TableData>
                            <S.TableData>{client.ultimaRetirada}</S.TableData>
                            <S.TableData>{client.ultimoAcesso}</S.TableData>
                        </S.TableRow>
                    ))}
                </tbody>
            </S.Table>
        </S.TableWrapper>
    );
};

export default Table;
