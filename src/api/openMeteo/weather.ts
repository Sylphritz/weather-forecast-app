import client from '@/api/openMeteo/client'
import type { WeatherInformationResponse } from './types'

export const getWeatherForecast = async (lat: number, lng: number) => {
  const response = await client.get<WeatherInformationResponse>('/forecast', {
    params: {
      latitude: lat,
      longitude: lng,
      daily: 'weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
      current_weather: true,
      timezone: 'auto'
    }
  })

  return response.data
}
