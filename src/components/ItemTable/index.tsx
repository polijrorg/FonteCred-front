import React from 'react';
import * as S from './styles';

interface DataItem {
    id: string;
    Item: string;
    Cor: string;
    Codigo: string;
    DataResgate: string;
}

interface TableProps {
    data: DataItem[];
}

const ItemTable: React.FC<TableProps> = ({ data }) => {
    return (
        <S.TableWrapper>
            <S.Table>
                <thead>
                    <tr>
                        <S.TableHeader>Item resgatado</S.TableHeader>
                        <S.TableHeader>Cor</S.TableHeader>
                        <S.TableHeader>Código do produto</S.TableHeader>
                        <S.TableHeader>Data de resgate</S.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: DataItem) => (
                        <S.TableRow key={item.id}>
                            <S.TableData>{item.Item}</S.TableData>
                            <S.TableData>{item.Cor}</S.TableData>
                            <S.TableData>{item.Codigo}</S.TableData>
                            <S.TableData>{item.DataResgate}</S.TableData>
                        </S.TableRow>
                    ))}
                </tbody>
            </S.Table>
        </S.TableWrapper>
    );
};

export default ItemTable;
