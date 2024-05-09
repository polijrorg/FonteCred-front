import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 220px;
    height: 968px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${defaultTheme.colors.primary.dark};
`;

export const MniWrapper = styled.div`
    height: 41px;
    width: 220px;
    background-color: ${defaultTheme.colors.primary.dark2};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const PageTitle = styled.text`
    font-family: Inter Light;
    font-size: 14px;
    color: ${defaultTheme.colors.primary.light};
`;

export const Symbol = styled.img`
    height: 16px;
    width: 16px;
`;
