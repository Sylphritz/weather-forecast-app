import { defineStore } from 'pinia'

export default defineStore('userLocation', {
  state: () => ({
    latitude: null as number | null,
    longitude: null as number | null,
    fetching: false
  }),
  actions: {
    getGPSLocation() {
      this.fetching = true

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setLocation(position.coords.latitude, position.coords.longitude)

          this.fetching = false
        },
        () => {
          this.fetching = false
        }
      )
    },
    setLocation(lat: number, lng: number) {
      this.latitude = lat
      this.longitude = lng
    }
  }
})
