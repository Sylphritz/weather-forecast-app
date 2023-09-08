<template>
  <!-- pointer-events-none -->
  <div
    class="absolute top-0 left-0 w-full h-full bg-slate-800/25 backdrop-blur-sm"
    v-if="props.open"
    @click="closeModal()"
  >
    <div
      class="mx-auto my-6 w-4/12 min-w-fit p-6 bg-gray-100 dark:bg-sky-950 shadow rounded-lg"
      @click.stop
    >
      <LocationListItem
        v-for="result in props.searchResults"
        :key="result.id"
        :location="result"
        @click.prevent="setLocation(result.name, result.latitude, result.longitude)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LocationSuggestion } from '@/api/openMeteo/types'
import LocationListItem from '@/components/LocationListItem.vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  closeModal: {
    type: Function,
    required: true
  },
  searchResults: {
    type: Array<LocationSuggestion>
  },
  setLocation: {
    type: Function,
    required: true
  }
})
</script>

<style scoped></style>
