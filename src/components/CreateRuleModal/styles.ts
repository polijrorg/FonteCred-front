import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
`;

export const Background = styled.div`
    flex: 1;
    background-color: #f0f2f5;
    padding: 20px;
`;

export const SubtitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
    font-size: 24px;
    color: ${defaultTheme.colors.primary.dark};
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

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

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: ${defaultTheme.colors.secondary.light};
    border-radius: 10px;
    outline: none;
    width: 100%;
    max-width: 600px;
    height: 80%;
    margin-top: 45px;
    color: ${defaultTheme.colors.white};
`;

export const ModalInput = styled.input`
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${defaultTheme.colors.primary.dark2};
    border-radius: 5px;
`;

export const ModalTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${defaultTheme.colors.primary.dark2};
    border-radius: 5px;
    background-color: ${defaultTheme.colors.white};
    color: ${defaultTheme.colors.primary.dark};
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ModalButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const ModalButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: ${defaultTheme.colors.primary.main};
    color: ${defaultTheme.colors.white};

    &:hover {
        background: ${defaultTheme.colors.primary.dark};
    }
`;

export const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '60%',
        backgroundColor: '#333'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)' // Fundo escuro
    }
};
