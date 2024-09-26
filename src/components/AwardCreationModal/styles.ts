import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Card = styled.div`
    background-color: ${defaultTheme.colors.primary.dark};
    padding: 40px;
    border-radius: 8px;
    border: solid black 1px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 50px;
    margin-bottom: 70px;
`;

export const ImagePlaceholder = styled.img`
    width: 300px;
    height: 300px;
`;

export const ItemDetails = styled.div`
    margin-left: 16px;
    margin-top: 30px;
    width: 400px;
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
    gap: 16px;
    align-items: center;
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
    margin-top: 5px;
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

export const AddCharacteristicButton = styled.button`
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

export const ActionButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
`;

export const SizeTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const DeleteIcon2 = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.7;
    }
`;

export const DeleteIcon3 = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
    }
`;

export const DeleteIcon3Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const ColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`;

export const ColorTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ColorPreview = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid #000;
    margin-top: 8px;
`;

export const ColorBox = styled.div`
    width: 32px;
    height: 32px;
    margin: 4px;
    border-radius: 4px;
    border: 1px solid #000;
    display: inline-block;
    cursor: pointer;
`;

export const FinishButton = styled.button`
    background-color: #56b634;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin-top: 8px;
    cursor: pointer;
    &:hover {
        background-color: #449a27;
    }
`;

export const ColorBoxText = styled.div`
    display: inline-block;
    padding: 8px;
    margin: 4px;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff; /* cor do texto */
    text-align: center;
    cursor: pointer;
`;

export const ExtraModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ExtraModal = styled.div`
    background-color: ${defaultTheme.colors.primary.dark};
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
`;

export const ExtraModalTitle = styled.text`
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 24px;
    color: ${defaultTheme.colors.white};
`;

export const ExtraInfoButtonsDiv = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
