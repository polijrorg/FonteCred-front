import React, { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import RuleList from 'components/RuleList';
import CreateRuleModal from 'components/CreateRuleModal';
import * as S from './styles';

const RulesTemplate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rules, setRules] = useState([
        {
            id: '1',
            title: '1?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit. Nullam sem arcu, fringilla eget ullamcorper sed, sodales non quam. Ut ornare felis non dignissim elementum. Quisque pulvinar,'
        }
    ]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = (title: string, content: string) => {
        const newRule = {
            id: (rules.length + 1).toString(),
            title,
            content
        };
        setRules([...rules, newRule]);
    };

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Políticas de Pontuação</S.Subtitle>
                        <S.Icon
                            src="assets/icons/add.svg"
                            onClick={openModal}
                        />
                    </S.SubtitleDiv>
                    <RuleList rules={rules} />
                </S.Background>
            </S.Wrapper>
            <CreateRuleModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onSave={handleSave}
            />
        </S.Container>
    );
};

export default RulesTemplate;
