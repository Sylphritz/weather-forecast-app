import { defineStore } from 'pinia'

export default defineStore('userLocation', {
  state: () => ({
    locationName: '',
    latitude: null,
    longitude: null
  })
})
