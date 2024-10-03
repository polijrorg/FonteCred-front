/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import api from './api';

export interface RulesList {
    id: string;
    policyName: string;
    policyDescription: string;
}

export interface CreateRuleRequest {
    policyName: string;
    policyDescription: string;
}

export default class RulesService {
    static async getRules(): Promise<RulesList[]> {
        const response: AxiosResponse<RulesList[]> = await api.get(
            './policies'
        );
        return response.data;
    }

    static async createRule(data: CreateRuleRequest): Promise<void> {
        await api.post('/policies/register', data);
    }

    static async deleteRule(id: string): Promise<void> {
        await api.delete(`/policies/delete/${id}`);
    }

    static async patchRule(
        id: string,
        policyDescription: string
    ): Promise<AxiosResponse<any>> {
        const response = await api.patch(`/policies/update/${id}`, {
            policyDescription
        });
        return response;
    }
}
