import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const TableWrapper = styled.div`
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 150px;
    width: 1000px;
    padding: 16px;
    background-color: ${defaultTheme.colors.primary.dark};
`;

export const ButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

export const Table = styled.table`
    width: 650px;
    margin-top: 15px;
`;

export const TableHeader = styled.th`
    margin-left: 50px;
    font-size: 14px;
    display: flex;
    width: 200;
    color: ${defaultTheme.colors.secondary.light2};
    padding: 10px 0px;
    text-align: left;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
    }
`;

export const TableData = styled.td`
    font-size: 14px;
    font-family: Inter Light;
    height: 14px;
    color: #fff;
    width: 400px;
    padding: 10px 0px;
`;
