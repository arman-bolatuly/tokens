// adm/tokens
import { apiService } from '.'

const tokensService = {
  createCase: (bodyData: any) => apiService.post('adm/tokens', bodyData),

  updateCase: (bodyData: any) =>
    apiService.put(`adm/tokens/${bodyData?.id}`, bodyData),

  getTokens: (params: any) => apiService.get('adm/tokens', { params }),

  deleteCase: (id: string) => apiService.delete(`adm/tokens/${id}`),
}

export const { getTokens, createCase, updateCase, deleteCase } = tokensService
