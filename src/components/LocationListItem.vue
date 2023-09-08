<template>
  <div
    class="mb-1 py-2 px-3 rounded-lg last:mb-0 hover:bg-gray-200 dark:hover:bg-gray-200/20 cursor-pointer"
  >
    <div>
      <span class="inline-block mr-2 text-lg font-semibold">{{ props.location.name }}</span>
      <small class="opacity-80">{{ props.location.country }}</small>
    </div>
    <small>lat: {{ props.location.latitude }} | lng: {{ props.location.longitude }}</small>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { LocationSuggestion } from '@/api/openMeteo/types'

const props = defineProps({
  location: {
    type: Object as PropType<LocationSuggestion>,
    required: true
  }
})
</script>
