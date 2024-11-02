// src/stores/bitcoinStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import BitcoinLogo from '@/assets/bitcoin.svg'

export const useBitcoinStore = defineStore('bitcoin', () => {
  const bitcoinData = ref<null | {
    logo: string
    currencyName: string
    priceValue: string
    currencyType: string
    currencyPair: string
    timestamp: string
  }>(null)

  const defaultData = {
    logo: BitcoinLogo,
    currencyName: 'Bitcoin',
    priceValue: '70,000',
    currencyType: 'USD',
    currencyPair: 'BTC - USD',
    timestamp: 'As of today at 10:45 UTC',
  }

  const fetchBitcoinData = async () => {
    try {
      const apiKey = '8QRONUYKBWDJRULS' // Replace with your Alpha Vantage API key
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${apiKey}`,
      )

      console.log('API Response:', response)

      // Check for the informational message in the response
      if (response.data.Information) {
        console.warn('API Rate Limit Reached:', response.data.Information)
        bitcoinData.value = defaultData // Use default data if rate limit message is present
        console.log('Updated bitcoinData (Rate Limit):', bitcoinData.value) // Log after setting
        return
      }

      const data = response.data['Realtime Currency Exchange Rate']
      console.log('Data:', data)

      if (data) {
        const formatNumber = (number: number) => {
          const integerPart = Math.trunc(number).toString()
          return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }

        bitcoinData.value = {
          logo: BitcoinLogo,
          currencyName: data['2. From_Currency Name'] || 'Bitcoin',
          priceValue: formatNumber(parseFloat(data['5. Exchange Rate'])) || '0',
          currencyType: data['3. To_Currency Code'] || 'USD',
          currencyPair: 'BTC/USD',
          timestamp:
            `As of today at ${data['6. Last Refreshed']} ${data['7. Time Zone']}` ||
            'As of today at ..',
        }
      } else {
        // Assign default data if API returns no data
        bitcoinData.value = defaultData
      }
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error)
      // Use default data on error
      bitcoinData.value = defaultData
    }

    // Log the updated bitcoinData value after setting it
    console.log('Updated bitcoinData:', bitcoinData.value)
  }

  return { bitcoinData, fetchBitcoinData }
})
