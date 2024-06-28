import React from 'react';
import * as S from './styles';

interface DataItem {
    id: string;
    nome: string;
    pontos: number;
    ultimaRetirada: string;
    ultimoAcesso: string;
    cpf: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
    itensFavoritados: string;
}

interface TableProps {
    data: DataItem;
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <S.TableWrapper>
            <S.ButtonsDiv>
                <S.Icons src="assets/icons/greenPen.svg" />
                <S.Icons src="assets/icons/Download2.svg" />
            </S.ButtonsDiv>
            <S.Table>
                <tbody>
                    <S.TableRow>
                        <S.TableHeader>Nome:</S.TableHeader>
                        <S.TableData>{data.nome}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Pontos:</S.TableHeader>
                        <S.TableData>{data.pontos}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Última retirada:</S.TableHeader>
                        <S.TableData>{data.ultimaRetirada}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Último acesso:</S.TableHeader>
                        <S.TableData>{data.ultimoAcesso}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>CPF:</S.TableHeader>
                        <S.TableData>{data.cpf}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Rua:</S.TableHeader>
                        <S.TableData>{data.rua}</S.TableData>
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
                        <S.TableData>{data.estado}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>CEP:</S.TableHeader>
                        <S.TableData>{data.cep}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Complemento:</S.TableHeader>
                        <S.TableData>{data.complemento}</S.TableData>
                    </S.TableRow>
                    <S.TableRow>
                        <S.TableHeader>Itens favoritados:</S.TableHeader>
                        <S.TableData>{data.itensFavoritados}</S.TableData>
                    </S.TableRow>
                </tbody>
            </S.Table>
        </S.TableWrapper>
    );
};

export default Table;
