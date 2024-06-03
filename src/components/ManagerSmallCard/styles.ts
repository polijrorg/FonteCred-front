import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 380px;
    height: 131px;
    padding: 0px 20px;
    border-radius: 4px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${defaultTheme.colors.primary.dark};
    gap: 15px;

    :hover {
        transition: 0.5s;
        cursor: pointer;
        scale: 1.05;
    }
`;

export const Symbol = styled.img`
    height: 48px;
    width: 48px;
`;

export const Subtitle = styled.text`
    font-family: Inter Light;
    font-size: 16px;
    color: ${defaultTheme.colors.white};
`;
