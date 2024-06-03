import * as S from './styles';

export const Header = () => {
    return (
        <S.Wrapper>
            <S.Logo src="assets/images/Logo.svg" />
            <S.RightHeaderDiv>
                <S.Symbol src="assets/icons/chatSymbol.svg" />
                <S.Symbol src="assets/icons/doubtSymbol.svg" />
                <S.Symbol src="assets/icons/notificationSymbol.svg" />
                <S.ProfilePic src="assets/images/ProfilePic.svg" />
            </S.RightHeaderDiv>
        </S.Wrapper>
    );
};

export default Header;
