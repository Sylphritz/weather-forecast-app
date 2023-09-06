<template>
  <div class="p-6 bg-blue-300 text-right">
    <button @click="theme.toggleMode">
      {{ theme.darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode' }}
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
