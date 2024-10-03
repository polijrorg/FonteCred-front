import React from 'react';
import * as S from './styles';

interface DataItem {
    id: string;
    name: string;
    points: number;
    lastRedeem: string;
    lastLogin: string;
    cpf: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    complemento: string;
}

interface TableProps {
    data: DataItem;
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <S.TableWrapper>
            <S.Table>
                <tbody>
                    <S.TableRow>
                        <S.TableHeader>Nome:</S.TableHeader>
                        <S.TableData>{data.name}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Última retirada:</S.TableHeader>
                        <S.TableData>{data.lastRedeem}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Último acesso:</S.TableHeader>
                        <S.TableData>{data.lastLogin}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>CPF:</S.TableHeader>
                        <S.TableData>{data.cpf}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Rua:</S.TableHeader>
                        <S.TableData>{data.endereco}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Bairro:</S.TableHeader>
                        <S.TableData>{data.bairro}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Cidade:</S.TableHeader>
                        <S.TableData>{data.cidade}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Estado:</S.TableHeader>
                        <S.TableData>{data.uf}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>CEP:</S.TableHeader>
                        <S.TableData>{data.cep}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Complemento:</S.TableHeader>
                        <S.TableData>{data.complemento}</S.TableData>
                    </S.TableRow>
                </tbody>
            </S.Table>
        </S.TableWrapper>
    );
};

export default Table;
