<template>
  <div
    class="content-body mx-auto bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-sky-950 p-7 shadow-sm dark:shadow-gray-700 rounded-lg"
  >
    <LocationSearch :get-weather-information="getWeatherInformation" />
    <div
      v-if="locationSpecified && !userLocation.fetching && !fetchingData && weatherInfo"
      class="flex flex-row relative overflow-hidden"
    >
      <div class="basis-1/3">
        <div class="bg-sky-500 dark:bg-sky-800 p-6 rounded-lg text-white">
          <h2 class="text-4xl font-semibold mb-2">Today</h2>
          <div class="mb-2 opacity-80">
            {{ formatDate(weatherInfo.current_weather.time, longDateFormat) }}
          </div>
          <div class="mb-2 pt-6 pb-2 font-semibold text-6xl text-center">
            <i :class="`${iconClass} mr-1`"></i>
            {{ Math.round(weatherInfo.current_weather.temperature)
            }}<sup class="text-xl align-super">°C</sup>
          </div>
          <div class="pb-10 text-center text-2xl font-semibold">{{ weatherName }}</div>
          <div class="flex flex-row text-center">
            <div class="basis-1/2">
              <div class="mb-2 opacity-80 text-sm">Wind speed</div>
              <div>{{ weatherInfo.current_weather.windspeed }} Km/h</div>
            </div>
            <div class="basis-1/2">
              <div class="mb-2 opacity-80 text-sm">Wind direction</div>
              <div>{{ weatherInfo.current_weather.winddirection }}°</div>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-2/3 pl-6">
        <h3 class="mb-5 text-2xl">Next 4 days</h3>
        <div class="flex flex-row">
          <ForecastCard
            v-for="dailyInfo in mappedWeatherInfo"
            :key="dailyInfo.time"
            :daily-info="dailyInfo"
          />
        </div>
      </div>
    </div>
    <div v-else-if="fetchingData" class="text-center text-xl my-20">
      <i class="fa-solid fa-cloud-sun fa-2xl mr-2"></i> Retrieving weather information...
    </div>
    <div v-else-if="userLocation.fetching" class="text-center text-xl my-20">
      <i class="fa-solid fa-compass fa-bounce fa-2xl mr-2"></i> Finding your location...
    </div>
    <div v-else class="text-center my-20">
      Please specify the location you want to get the weather forecast information.
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { format } from 'date-fns'

import { getWeatherForecast } from '@/api/openMeteo/weather'
import type { WeatherInformationResponse, DailyInfo } from '@/api/openMeteo/types'

import useUserLocation from '@/stores/userLocation'
import ForecastCard from '@/components/Home/ForecastCard.vue'
import LocationSearch from '@/components/Home/LocationSearch.vue'
import { WEATHER_ICON_MAP, WEATHER_NAMES } from '@/constants/weather'

const longDateFormat = 'EEEE, MMM d, yyyy'
const maxForecastDays = 4

const fetchingData = ref(false)
const weatherInfo = ref<WeatherInformationResponse | null>()

const userLocation = useUserLocation()
const locationSpecified = computed(() => {
  return userLocation.latitude && userLocation.longitude
})
const iconClass = computed(
  () =>
    WEATHER_ICON_MAP[
      `${weatherInfo.value?.current_weather.weathercode}` as keyof typeof WEATHER_ICON_MAP
    ]
)
const weatherName = computed(
  () =>
    WEATHER_NAMES[`${weatherInfo.value?.current_weather.weathercode}` as keyof typeof WEATHER_NAMES]
)
const mappedWeatherInfo = computed<DailyInfo[]>(() => {
  if (!weatherInfo.value) {
    return []
  }

  const mappedInfo: DailyInfo[] = []

  weatherInfo.value.daily.time.forEach((day, index) => {
    if (index === 0 || index > maxForecastDays) {
      return
    }

    mappedInfo.push({
      time: day,
      weathercode: weatherInfo.value!.daily.weathercode[index],
      temperature_2m_max: weatherInfo.value!.daily.temperature_2m_max[index],
      temperature_2m_min: weatherInfo.value!.daily.temperature_2m_min[index],
      precipitation_probability_max: weatherInfo.value!.daily.precipitation_probability_max[index]
    })
  })

  return mappedInfo
})

const getWeatherInformation = async () => {
  fetchingData.value = true

  if (!userLocation.latitude || !userLocation.longitude) {
    return
  }

  weatherInfo.value = await getWeatherForecast(userLocation.latitude, userLocation.longitude)

  fetchingData.value = false
}

const formatDate = (dateString: string, dateFormat: string) => {
  return format(new Date(dateString), dateFormat)
}
</script>

<style scoped>
.content-body {
  width: 980px;
}
</style>
