import React from 'react';
import * as S from './styles';

interface DataItem {
    id: string; // Adicione um campo id único
    nome: string;
    pontos: number;
    ultimaRetirada: string;
    ultimoAcesso: string;
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
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: DataItem) => (
                        <S.TableRow key={item.id}>
                            <S.TableData>{item.nome}</S.TableData>
                            <S.TableData>{item.pontos}</S.TableData>
                            <S.TableData>{item.ultimaRetirada}</S.TableData>
                            <S.TableData>{item.ultimoAcesso}</S.TableData>
                        </S.TableRow>
                    ))}
                </tbody>
            </S.Table>
        </S.TableWrapper>
    );
};

export default Table;
