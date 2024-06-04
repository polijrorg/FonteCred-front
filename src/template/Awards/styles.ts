import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Background = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: ${defaultTheme.colors.primary.dark};
    min-height: 100vh;
`;

export const SubtitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Title = styled.text`
    font-family: Inter Light;
    font-size: 24px;

    color: ${defaultTheme.colors.white};
`;

export const Searchbar = styled.div`
    display: flex;
    align-items: center;
    background-color: ${defaultTheme.colors.secondary.light2};
    border-radius: 32px;
    padding: 4px 7px;
    width: 300px;
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    flex: 1;
    font-size: 14px;
    color: ${defaultTheme.colors.primary.light};

    &::placeholder {
        color: ${defaultTheme.colors.primary.light};
    }
`;

export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    width: 100%;
    justify-items: center;
`;

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
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #333;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;
