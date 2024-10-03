import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Card = styled.div`
    background-color: ${defaultTheme.colors.primary.dark};
    padding: 16px;
    border-radius: 8px;
    border: solid black 1px;
    width: 800px;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 50px;
`;

export const ImagePlaceholder = styled.img`
    width: 300px;
    height: 300px;
`;

export const ItemDetails = styled.div`
    margin-left: 16px;
    width: 100%;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
`;

export const DetailDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const DetailTitle = styled.span`
    color: ${defaultTheme.colors.primary.main};
    font-size: 16px;
`;

export const SizeTitle = styled.span`
    color: ${defaultTheme.colors.primary.main};
    font-size: 24px;
`;

export const ColorTitle = styled.span`
    color: ${defaultTheme.colors.primary.main};
    font-size: 24px;
`;

export const DetailText = styled.span`
    color: #fff;
    font-size: 14px;
    margin-left: 8px;
`;

export const Sizes = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 16px;
`;

export const Colors = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 16px;
`;

export const SizeButton = styled.button<{ selected: boolean }>`
    background-color: ${(props) => (props.selected ? '#56B634' : '#3E3E3A')};
    color: #fff;
    border: 1px solid #56b634;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: #56b634;
        color: ${defaultTheme.colors.primary.dark};
    }
`;

export const ColorButton = styled.button<{ selected: boolean }>`
    background-color: ${(props) => (props.selected ? '#56B634' : '#3E3E3A')};
    color: #fff;
    border: 1px solid #56b634;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: #56b634;
        color: ${defaultTheme.colors.primary.dark};
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
`;

export const DeleteButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
`;

export const CancelButton = styled.button`
    background-color: ${defaultTheme.colors.primary.dark};
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 8px 16px;

    &:hover {
        transition: 0.1s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const EditButton = styled.button`
    background-color: ${defaultTheme.colors.primary.main};
    color: #333;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;

    &:hover {
        transition: 0.1s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const EditButton2 = styled.button`
    background-color: ${defaultTheme.colors.primary.main};
    color: #333;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin-right: 10px;
    margin-bottom: 10px;

    &:hover {
        transition: 0.1s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const EditIcon = styled.img`
    margin-left: 8px;
    cursor: pointer;
`;

export const EditPen = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;

    :hover {
        scale: 1.1;
        transition: 0.1s;
    }
`;

export const DeleteIcon = styled.img`
    height: 36px;
    width: 36px;

    &:hover {
        transition: 0.1s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const ActiveButton = styled.img`
    height: 30px;
    width: 36px;
    border-radius: 15px;

    &:hover {
        transition: 0.1s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const Toggle = styled.input.attrs({ type: 'checkbox' })`
    width: 40px;
    height: 20px;
    background: #ccc;
    border-radius: 20px;
    position: relative;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:checked {
        background: ${defaultTheme.colors.primary.main};
    }

    &:checked::before {
        left: 20px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }
`;

export const Image = styled.img`
    width: 40%;
    height: 40%;
    border-radius: 8px;
`;

export const RemoveButton = styled.button`
    background-color: transparent;
    border: solid red 1px;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    margin-left: 15px;
    width: 20px;

    &:hover {
        color: #56b634;
        background-color: red;
    }
`;

export const AddModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Certifique-se de que o modal está no topo */
`;

export const AddModalContent = styled.div`
    background-color: #fff; /* Fundo branco */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 400px; /* Largura do modal */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AddModalTitle = styled.h2`
    margin: 0 0 15px 0;
    font-size: 20px;
    color: #333;
`;

export const AddModalInput = styled.input`
    width: 100%; /* Ocupa toda a largura */
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #007bff; /* Cor da borda ao focar */
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); /* Sombras ao focar */
    }
`;

export const RemoveButtonCategory = styled.button`
    background-color: transparent;
    border: solid red 1px;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    width: 20px;

    &:hover {
        color: #56b634;
        background-color: red;
    }
`;
