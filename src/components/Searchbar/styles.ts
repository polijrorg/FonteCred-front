import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 296px;
    height: 32px;
    border-radius: 32px;
    padding: 4px 7px;
    gap: 10px;
    display: flex;
    align-items: center;
    background-color: ${defaultTheme.colors.secondary.light2};
`;

export const SearchInput = styled.input`
    height: 24px;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    color: ${defaultTheme.colors.primary.dark2};

    &::placeholder {
        color: ${defaultTheme.colors.primary.dark2};
    }
`;

export const Symbol = styled.img`
    height: 24px;
    width: 24px;

    :hover {
        transition: 0.1s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const PageTitle = styled.text`
    font-family: Inter Light;
    font-size: 14px;
    color: ${defaultTheme.colors.primary.light};
`;
