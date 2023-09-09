export interface LocationSuggestion {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  feature_code: string
  country_code: string
  admin1_id: number
  timezone: string
  population: number
  country_id: number
  country: string
  admin1: string
}

export interface LocationSuggestionResponse {
  results: LocationSuggestion[]
}

export interface WeatherInformationResponse {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather: CurrentWeather
  daily_units: DailyUnits
  daily: Daily
}

export interface CurrentWeather {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  is_day: number
  time: string
}

export interface DailyUnits {
  time: string
  weathercode: string
  temperature_2m_max: string
  temperature_2m_min: string
  precipitation_probability_max: string
}

export interface Daily {
  time: string[]
  weathercode: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  precipitation_probability_max: number[]
}

export interface DailyInfo {
  time: string
  weathercode: number
  temperature_2m_max: number
  temperature_2m_min: number
  precipitation_probability_max: number
}
