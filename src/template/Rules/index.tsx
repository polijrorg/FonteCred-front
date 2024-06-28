import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import RuleList from 'components/RuleList';
import * as S from './styles';

const RulesTemplate = () => {
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Políticas de Pontuação</S.Subtitle>
                        <S.Icon src="assets/icons/add.svg" />
                    </S.SubtitleDiv>
                    <RuleList />
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default RulesTemplate;
