import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: ${defaultTheme.colors.primary.dark};

    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${defaultTheme.colors.secondary.light};
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

export const LilCardsWrapper = styled.div`
    height: 131px;
    width: 1172px;
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    gap: 12px;

    align-items: center;
    justify-content: center;
`;

export const BigCardsWrapper = styled.div`
    width: 100%;
    padding: 75px 0px;
    gap: 36px;

    display: flex;
    flex-wrap: wrap;
`;

export const ArrowButton = styled.button`
    position: absolute;
    right: 20px; /* Adjust based on your layout */
    top: 50%; /* Vertically centered */
    transform: translateY(-50%);
    background: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
        background: ${defaultTheme.colors.white};
    }
`;

export const Icon = styled.img`
    height: 24px;
    width: 24px;

    :hover {
        transition: 100ms;
        scale: 1.2;
        cursor: pointer;
    }
`;
