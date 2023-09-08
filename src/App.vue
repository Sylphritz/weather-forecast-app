<template>
  <!-- Base Layout -->
  <div
    class="bg-gradient-to-b from-sky-300 to-white dark:from-slate-700 dark:to-slate-900 min-h-screen pb-14 overflow-y-auto overflow-x-hidden text-base text-gray-800 dark:text-white transition-all"
    :class="{ dark: theme.darkMode }"
  >
    <AppHeader />

    <RouterView />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import useThemeStore from '@/stores/theme'
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppFooter from './components/Layout/AppFooter.vue'

const theme = useThemeStore()
</script>

<style scoped></style>
