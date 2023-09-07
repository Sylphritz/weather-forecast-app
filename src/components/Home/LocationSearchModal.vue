<template>
  <!-- pointer-events-none -->
  <div class="absolute top-0 left-0 w-full h-full bg-slate-800/25 backdrop-blur-sm">
    <div class="mx-auto my-6 w-4/12 min-w-fit p-6 bg-gray-100 dark:bg-sky-950 shadow rounded-lg">
      <input
        type="text"
        placeholder="Enter your city and press Enter"
        class="mb-3 p-3 w-full rounded-lg border border-gray-200 dark:bg-sky-900 dark:border-gray-200/25"
      />
      <LocationListItem />
      <LocationListItem />
      <LocationListItem />
      <LocationListItem />
      <LocationListItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationListItem from '@/components/LocationListItem.vue'
</script>

<style scoped></style>
