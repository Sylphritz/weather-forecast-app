<template>
  <!-- Base Layout -->
  <div
    class="bg-gray-100 dark:bg-slate-800 h-screen overflow-y-auto overflow-x-hidden"
    :class="{ dark: theme.darkMode }"
  >
    <AppHeader />
  </div>
</template>

<script setup lang="ts">
import useThemeStore from '@/stores/theme'
import AppHeader from '@/components/Layout/AppHeader.vue'

const theme = useThemeStore()
</script>

<style scoped></style>
