<template>
  <div
    class="content-body mx-auto bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-sky-950 p-7 shadow-sm dark:shadow-gray-700 rounded-lg"
  >
    <div class="mb-6">
      <input
        id="city"
        type="search"
        placeholder="Enter your city name and press Enter"
        class="w-96 py-2 px-3 mr-2 border rounded-lg border-sky-300 dark:bg-sky-900 dark:border-gray-500"
        v-model="manualSearch.textInput"
        @keydown.enter="getLocations"
      />
      or
      <button
        class="ml-2 p-2 px-5 border border-sky-500 dark:border-sky-800 rounded-lg text-md bg-sky-500 dark:bg-sky-800 hover:bg-sky-600 dark:hover:bg-sky-700 active:bg-sky-700 dark:active:bg-sky-800 text-white"
        @click.prevent="userLocation.getGPSLocation"
      >
        <i class="fa-solid fa-location-crosshairs mr-1"></i> Auto detect
      </button>
    </div>
    <div
      v-if="locationSpecified && !userLocation.fetching && !fetchingData"
      class="flex flex-row relative overflow-hidden"
    >
      <div class="basis-1/3">
        <div class="bg-sky-500 dark:bg-sky-800 p-6 rounded-lg text-white">
          <h2 class="text-4xl font-semibold mb-2">Today</h2>
          <div class="mb-2 opacity-80">Wednesday, Sep 6, 2023</div>
          <div class="mb-2 pt-6 pb-2 font-semibold text-6xl text-center">
            <i class="fa-solid fa-cloud mr-1"></i>
            69<sup class="text-xl align-super">°C</sup>
          </div>
          <div class="pb-10 text-center text-2xl font-semibold">Cloudy</div>
          <div class="flex flex-row text-center">
            <div class="basis-1/2">
              <div class="mb-2 opacity-80 text-sm">Humidity</div>
              <div>45%</div>
            </div>
            <div class="basis-1/2">
              <div class="mb-2 opacity-80 text-sm">Wind speed</div>
              <div>19.2 km/j</div>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-2/3 pl-6">
        <h3 class="mb-5 text-2xl">Next 4 days</h3>
        <div class="flex flex-row">
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
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
  <LocationSearchModal
    :open="manualSearch.open"
    :search-results="manualSearch.searchResults"
    :close-modal="closeModal"
    :set-location="setLocation"
  />
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { getLocationSuggestions } from '@/api/openMeteo/geocoding'
import useUserLocation from '@/stores/userLocation'
import ForecastCard from '@/components/Home/ForecastCard.vue'
import LocationSearchModal from '@/components/Home/LocationSearchModal.vue'
import type { LocationSuggestion } from '@/api/openMeteo/types'

const fetchingData = ref(false)

const userLocation = useUserLocation()
const locationSpecified = computed(() => {
  return userLocation.latitude && userLocation.longitude
})

const manualSearch = reactive({
  open: false,
  textInput: '',
  searchResults: [] as LocationSuggestion[]
})

const getLocations = async () => {
  manualSearch.open = true
  manualSearch.searchResults = []
  manualSearch.searchResults = (await getLocationSuggestions(manualSearch.textInput)).results
}

const closeModal = () => (manualSearch.open = false)

const setLocation = (name: string, latitude: number, longitude: number) => {
  manualSearch.textInput = name
  userLocation.setLocation(latitude, longitude)

  getWeatherInformation()

  closeModal()
}

const getWeatherInformation = () => {
  fetchingData.value = true
}
</script>

<style scoped>
.content-body {
  width: 980px;
}
</style>
