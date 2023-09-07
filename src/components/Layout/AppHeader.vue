<template>
  <!-- TODO: Update the links -->
  <div class="p-6 flex justify-end">
    <RouterLink
      class="mr-5 font-semibold hover:text-gray-700 dark:hover:text-gray-400 opacity-70 hover:opacity-100"
      :to="{ name: 'home' }"
      >Home</RouterLink
    >
    <a
      href="#"
      class="mr-5 font-semibold hover:text-gray-700 dark:hover:text-gray-400 opacity-70 hover:opacity-100"
      >About</a
    >
    <!-- TODO: Maybe turn the hardcoded URL into a constant? -->
    <a
      href="https://github.com/Sylphritz/weather-forecast-app"
      class="mr-5 font-semibold hover:text-gray-700 dark:hover:text-gray-400 opacity-70 hover:opacity-100"
      target="_blank"
      >See on Github</a
    >
    <button
      @click="theme.toggleMode"
      class="inline-block px-1 py-1 rounded-full text-xs align-middle text-center w-10 bg-cyan-100 dark:bg-slate-900 dark:text-white"
    >
      <i class="fa-regular fa-moon" v-if="theme.darkMode"></i>
      <i class="fa-regular fa-sun" v-else></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useThemeStore from '@/stores/theme'

const theme = useThemeStore()

onMounted(() => {
  const localDarkMode = localStorage.getItem(theme.darkModeClassName)

  if (localDarkMode) {
    theme.setDarkMode(localDarkMode == 'true' ? true : false)
  } else {
    theme.setDarkMode(
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }
})
</script>

<style scoped></style>
