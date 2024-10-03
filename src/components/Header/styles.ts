import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 100vw;
    height: 56px;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(
        to right,
        ${defaultTheme.colors.primary.light},
        ${defaultTheme.colors.primary.main}
    );
`;

export const RightHeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 15%;
    height: 70%;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    height: 32px;
    width: 138px;
`;

export const Symbol = styled.img`
    height: 16px;
    width: 16px;

    :hover {
        transition: 0.5s;
        cursor: pointer;
        scale: 1.3;
    }
`;

export const ProfilePic = styled.img`
    height: 30px;
    width: 30px;
`;
