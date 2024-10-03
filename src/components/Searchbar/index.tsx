import React from 'react';
import * as S from './styles';

interface SearchbarProps {
    onSearch: (query: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <S.Wrapper>
            <S.Symbol src="assets/icons/lupa.svg" />
            <S.SearchInput
                placeholder="Pesquisar..."
                onChange={handleInputChange}
            />
        </S.Wrapper>
    );
};

export default Searchbar;
