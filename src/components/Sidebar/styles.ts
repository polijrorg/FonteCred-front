import styled from 'styled-components';
import { defaultTheme } from 'styles';

interface PageTitleProps {
    isActive: boolean;
}

export const Wrapper = styled.div`
    padding-left: 15px;
    width: 220px;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${defaultTheme.colors.primary.dark};
`;

export const MniWrapper = styled.div`
    height: 41px;
    width: 220px;
    background-color: ${defaultTheme.colors.primary.dark2};
    padding-left: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    :hover {
        transition: 0.3s;
        scale: 1.05;
        cursor: pointer;
    }
`;

export const PageTitle = styled.span<PageTitleProps>`
    font-family: Inter Light;
    font-size: 14px;
    color: ${({ isActive }) =>
        isActive
            ? defaultTheme.colors.primary.main
            : defaultTheme.colors.primary.light};
`;

export const Symbol = styled.img`
    height: 16px;
    width: 16px;
`;
