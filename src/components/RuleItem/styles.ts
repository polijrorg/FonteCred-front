import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const ListWrapper = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #333;
    overflow: hidden;
`;

export const ListItem = styled.div`
    border-bottom: 1px solid #fff;
`;

export const ListItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: ${defaultTheme.colors.primary.dark};
    cursor: pointer;

    &:hover {
        background-color: ${defaultTheme.colors.primary.dark2};
    }
`;

export const ListItemTitle = styled.span`
    font-size: 16px;
    color: ${defaultTheme.colors.white};
`;

export const ListItemContent = styled.div`
    padding: 16px;
    background-color: #444;
    color: ${defaultTheme.colors.white};
    font-size: 14px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    svg {
        color: ${defaultTheme.colors.white};
        cursor: pointer;

        &:hover {
            color: ${defaultTheme.colors.white};
        }
    }
`;
