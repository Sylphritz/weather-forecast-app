<template>
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
      @click.prevent="getByGPS"
    >
      <i class="fa-solid fa-location-crosshairs mr-1"></i> Auto detect
    </button>
  </div>
  <LocationSearchModal
    :open="manualSearch.open"
    :search-results="manualSearch.searchResults"
    :close-modal="closeModal"
    :set-location="setLocation"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import type { LocationSuggestion } from '@/api/openMeteo/types'
import { getLocationSuggestions } from '@/api/openMeteo/geocoding'
import useUserLocation from '@/stores/userLocation'

import LocationSearchModal from '@/components/Home/LocationSearchModal.vue'

const props = defineProps({
  getWeatherInformation: {
    type: Function,
    required: true
  }
})

const userLocation = useUserLocation()

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

const getByGPS = async () => {
  await userLocation.getGPSLocation()

  if (!userLocation.latitude || !userLocation.longitude) {
    return
  }

  setLocation('', userLocation.latitude, userLocation.longitude)
}

const closeModal = () => (manualSearch.open = false)

const setLocation = (name: string, latitude: number, longitude: number) => {
  manualSearch.textInput = name
  userLocation.setLocation(latitude, longitude)

  props.getWeatherInformation()

  closeModal()
}
</script>
