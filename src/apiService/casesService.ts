import { apiService } from '.'

const casesService = {
  // registration: (bodyData: any) => apiService.post('register', bodyData),

  createCase: (bodyData: any) => apiService.post('adm/cases/create', bodyData),

  getCases: (params: any) => apiService.get('adm/cases', { params }),
}

export const { getCases, createCase } = casesService
