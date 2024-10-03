import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 568px;
    height: 267px;
    padding: 8px;
    border-radius: 4px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${defaultTheme.colors.primary.dark};
    gap: 15px;
`;

export const Symbol = styled.img`
    height: 32px;
    width: 32px;

    :hover {
        transition: 0.5s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const Subtitle = styled.text`
    font-family: Inter Light;
    font-size: 22px;
    color: ${defaultTheme.colors.white};
`;

export const TitleCardDiv = styled.div`
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleTableDiv = styled.div`
    height: 16px;
    width: 100%;
    padding: 0px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${defaultTheme.colors.white};
`;

export const InvisibleDiv = styled.div`
    height: 48px;
    width: 32px;
`;

export const TableTitle = styled.text`
    font-family: Inter Bold;
    font-size: 16px;
`;

export const TableText = styled.text`
    font-family: Inter Light;
    font-size: 16px;
`;

export const TableTextDiv = styled.div`
    height: 16px;
    width: 100%;
    padding: 0px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${defaultTheme.colors.white};
`;
