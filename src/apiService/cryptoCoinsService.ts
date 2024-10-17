import axios from 'axios'
// import { apiService } from '.'

const coinUrl = 'https://openapiv1.coinstats.app'

const CoinsService = {
  getCryptoCoins: (params: any) =>
    axios.get(`${coinUrl}/coins`, {
      params,
      headers: {
        'X-API-Key': import.meta.env.VITE_API_KEY,
      },
    }),
  getCryptoCoinsChart: (params: any) =>
    axios.get(`${coinUrl}/coins/${params?.coinId}/charts`, {
      params,
      headers: {
        'X-API-Key': import.meta.env.VITE_API_KEY,
      },
    }),
}

export const { getCryptoCoins, getCryptoCoinsChart } = CoinsService
