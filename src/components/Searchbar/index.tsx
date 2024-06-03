import * as S from './styles';

export const Searchbar = () => {
    return (
        <S.Wrapper>
            <S.Symbol src="assets/icons/lupa.svg" />
            <S.SearchInput placeholder="Pesquisar..." />
        </S.Wrapper>
    );
};

export default Searchbar;
