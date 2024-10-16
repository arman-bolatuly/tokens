import axios from 'axios'
// import { apiService } from '.'

const CoinsService = {
  getCryptoCoins: (params: any) =>
    axios.get('https://openapiv1.coinstats.app/coins', {
      params,
      headers: {
        'X-API-Key': import.meta.env.VITE_API_KEY,
      },
    }),
}

export const { getCryptoCoins } = CoinsService
