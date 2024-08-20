/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import RuleList from 'components/RuleList';
import CreateRuleModal from 'components/CreateRuleModal';
import RulesService, { RulesList } from 'services/RulesService';
import * as S from './styles';

const RulesTemplate: React.FC = () => {
    const [data, setData] = useState<RulesList[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allRules = await RulesService.getRules();
                setData(allRules);
            } catch (err) {
                console.error('Não foi possível carregar as regras', err);
            }
        };
        fetchData();
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = async (
        policyName: string,
        policyDescription: string
    ) => {
        const newRule = {
            policyName,
            policyDescription
        };

        try {
            await RulesService.createRule(newRule);
            setData([
                ...data,
                {
                    id: (data.length + 1).toString(),
                    policyName,
                    policyDescription
                }
            ]);
        } catch (err) {
            console.error('Erro ao criar a regra:', err);
        }
    };

    const handleDeleteFromUI = (id: string) => {
        setData(data.filter((rule) => rule.id !== id));
    };

    const handleDelete = async (id: string) => {
        try {
            await RulesService.deleteRule(id);
            handleDeleteFromUI(id);
        } catch (err) {
            console.error('Erro ao deletar a regra', err);
        }
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
                    <RuleList rules={data} deletar={handleDelete} />
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
