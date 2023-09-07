<template>
  <div
    class="content-body mx-auto bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-sky-950 p-7 shadow-sm dark:shadow-gray-700 rounded-lg"
  >
    <div class="mb-6">
      <form>
        <input
          id="city"
          type="text"
          placeholder="Enter your city name and press Enter"
          class="w-96 py-2 px-3 mr-2 border rounded-lg border-sky-300 dark:bg-sky-900 dark:border-gray-500"
        />
        or
        <button
          type="submit"
          class="ml-2 p-2 px-5 border border-sky-500 dark:border-sky-800 rounded-lg text-md bg-sky-500 dark:bg-sky-800 text-white"
          @click.prevent=""
        >
          <i class="fa-solid fa-location-crosshairs"></i> Auto detect
        </button>
      </form>
    </div>
    <div class="flex flex-row">
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
  </div>
  <LocationSearchModal />
</template>

<script setup lang="ts">
import ForecastCard from '@/components/Home/ForecastCard.vue'
import LocationSearchModal from '@/components/Home/LocationSearchModal.vue'
</script>

<style scoped>
.content-body {
  width: 980px;
}
</style>
