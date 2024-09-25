import { apiService } from '.'

const accountService = {
  login: (bodyData: any) => apiService.post('auth/login', bodyData),

  getAccount: () => apiService.get('auth/me'),
}

export const { login, getAccount } = accountService
