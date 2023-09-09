<template>
  <div class="basis-1/4 text-center">
    <h4 class="mb-4">{{ formatDate(props.dailyInfo.time, shortDateFormat) }}</h4>
    <div class="text-4xl mb-4"><i class="fa-solid fa-cloud-showers-heavy"></i></div>
    <div>
      <div class="text-lg mb-2">
        {{ props.dailyInfo.temperature_2m_min }}~{{ props.dailyInfo.temperature_2m_max
        }}<sup>°C</sup>
      </div>
      <h5 class="opacity-70 text-sm mb-1">Precipitation %</h5>
      <div>{{ props.dailyInfo.precipitation_probability_max }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DailyInfo } from '@/api/openMeteo/types'

import { format } from 'date-fns'

const props = defineProps({
  dailyInfo: {
    type: Object as PropType<DailyInfo>,
    required: true
  }
})

const shortDateFormat = 'MMM d'

const formatDate = (dateString: string, dateFormat: string) => {
  return format(new Date(dateString), dateFormat)
}
</script>
