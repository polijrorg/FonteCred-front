import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
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

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${defaultTheme.colors.primary.dark2};
    padding: 20px;
`;

export const SubtitleDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Subtitle = styled.text`
    font-family: Inter Light;
    font-size: 24px;
    color: ${defaultTheme.colors.white};
`;

export const Table = styled.table`
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: ${defaultTheme.colors.primary.dark};
`;

export const Th = styled.th`
    font-size: 12px;
    padding: 8px;
    text-align: left;
    color: ${defaultTheme.colors.white};
`;

export const Td = styled.td`
    font-size: 12px;
    padding: 8px;
    text-align: left;
    color: ${defaultTheme.colors.white};
`;

export const Tr = styled.tr`
    &:nth-child(even) {
        background-color: ${defaultTheme.colors.primary.dark};
    }
`;

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
`;

export const CheckboxAll = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
`;
