import client from '@/api/openMeteo/geocodingClient'
import type { LocationSuggestionResponse } from './types'

export const getLocationSuggestions = async (keyword: string, maxResults = 5) => {
  const response = await client.get<LocationSuggestionResponse>('/search', {
    params: {
      name: keyword,
      count: maxResults,
      language: 'en',
      format: 'json'
    }
  })

  return response.data
}
