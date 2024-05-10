import * as S from './styles';

export const Sidebar = () => {
    return (
        <S.Wrapper>
            <S.MniWrapper>
                <S.Symbol src="assets/icons/HomeSymbol.svg" />
                <S.PageTitle>Home</S.PageTitle>
            </S.MniWrapper>
        </S.Wrapper>
    );
};

export default Sidebar;