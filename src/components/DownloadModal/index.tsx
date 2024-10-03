import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './styles';

interface DateRangeModalProps {
    onConfirm: (startDate: Date, endDate: Date) => void;
    onCancel: () => void;
}

export const DateRangeModal: React.FC<DateRangeModalProps> = ({
    onConfirm,
    onCancel
}) => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

    const handleConfirm = () => {
        if (startDate && endDate) {
            onConfirm(startDate, endDate);
        }
    };

    return (
        <S.ModalWrapper>
            <S.ModalContent>
                <S.Question>Selecione o período para download:</S.Question>
                <S.PickersWrapper>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date as Date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Data de início"
                        dateFormat="dd/MM/yyyy"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date as Date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="Data de fim"
                        dateFormat="dd/MM/yyyy"
                    />
                </S.PickersWrapper>
                <S.ButtonsWrapper>
                    <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
                    <S.ConfirmButton onClick={handleConfirm}>
                        Confirmar
                    </S.ConfirmButton>
                </S.ButtonsWrapper>
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default DateRangeModal;
