import styled from 'styled-components';

export const TableWrapper = styled.div`
    padding: 16px;
    overflow-x: auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableHeader = styled.th`
    background-color: #333;
    color: #fff;
    padding: 8px;
    text-align: left;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export const TableData = styled.td`
    padding: 8px;
    border: 1px solid #ddd;
`;
