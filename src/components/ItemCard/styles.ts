import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Card = styled.div`
    width: 150px;
    height: 220px;
    border-radius: 8px;
    background-color: ${defaultTheme.colors.primary.dark};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    :hover {
        cursor: pointer;
        transition: 0.1s;
        scale: 1.1;
    }
`;

export const EditIcon = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Footer = styled.div`
    background-color: ${defaultTheme.colors.primary.dark2};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 10px;
    color: ${defaultTheme.colors.primary.light};
    display: flex;
    flex-direction: column;
`;

export const ItemName = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${defaultTheme.colors.primary.light};
`;

export const Points = styled.div`
    font-size: 12px;
    margin-top: 4px;
    color: ${defaultTheme.colors.secondary.light2};

    span {
        font-weight: bold;
        color: ${defaultTheme.colors.secondary.light};
    }
`;
