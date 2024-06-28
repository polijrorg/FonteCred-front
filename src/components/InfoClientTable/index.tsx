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
    data: DataItem[];
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
                        <S.TableHeader>CPF</S.TableHeader>
                        <S.TableHeader>Rua</S.TableHeader>
                        <S.TableHeader>Bairro</S.TableHeader>
                        <S.TableHeader>Cidade</S.TableHeader>
                        <S.TableHeader>Estado</S.TableHeader>
                        <S.TableHeader>CEP</S.TableHeader>
                        <S.TableHeader>Complemento</S.TableHeader>
                        <S.TableHeader>Itens favoritados</S.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: DataItem) => (
                        <S.TableRow key={item.id}>
                            <S.TableData>{item.nome}</S.TableData>
                            <S.TableData>{item.pontos}</S.TableData>
                            <S.TableData>{item.ultimaRetirada}</S.TableData>
                            <S.TableData>{item.ultimoAcesso}</S.TableData>
                            <S.TableData>{item.cpf}</S.TableData>
                            <S.TableData>{item.rua}</S.TableData>
                            <S.TableData>{item.bairro}</S.TableData>
                            <S.TableData>{item.cidade}</S.TableData>
                            <S.TableData>{item.estado}</S.TableData>
                            <S.TableData>{item.cep}</S.TableData>
                            <S.TableData>{item.complemento}</S.TableData>
                            <S.TableData>{item.itensFavoritados}</S.TableData>
                        </S.TableRow>
                    ))}
                </tbody>
            </S.Table>
        </S.TableWrapper>
    );
};

export default Table;
