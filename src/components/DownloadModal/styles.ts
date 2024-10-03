import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Question = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;

export const PickersWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    .react-datepicker-wrapper {
        width: 100%;
    }

    input {
        padding: 8px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #ccc;
        width: 100%;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const CancelButton = styled.button`
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #bbb;
    }
`;

export const ConfirmButton = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;
