import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const TableWrapper = styled.div`
    margin-left: 150px;
    margin-top: 15px;
    width: 1000px;
    overflow-x: auto;
    background-color: ${defaultTheme.colors.primary.dark};
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Icons = styled.img`
    height: 24px;
    width: 24px;

    :hover {
        transition: 100ms;
        scale: 1.3;
        cursor: pointer;
    }
`;

export const TableHeader = styled.th`
    background-color: #333;
    font-size: 12px;
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
    font-size: 12px;
    padding: 10px;
    border-bottom: 1px solid #333;
    color: #fff;
    text-align: left;
`;
