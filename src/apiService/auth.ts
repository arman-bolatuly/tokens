import { apiService } from '.'

const accountService = {
  registration: (bodyData: any) => apiService.post('register', bodyData),

  login: (bodyData: any) => apiService.post('login', bodyData),

  getAccount: () => apiService.get('me'),
}

export const { login, getAccount, registration } = accountService
