import styled from 'styled-components';

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableHeader = styled.th`
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: left;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #2e2e2e;
    }
    &:nth-child(odd) {
        background-color: #1e1e1e;
    }
`;

export const TableData = styled.td`
    padding: 10px;
    border-bottom: 1px solid #333;
    color: #fff;
    text-align: left;
`;
