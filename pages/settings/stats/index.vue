<template>
  <div class="w-full h-full p-5 pt-16">
    <StatsDisplay></StatsDisplay>
  </div>
</template>
<script setup lang="ts">
import StatsDisplay from '~/components/stats/StatsDisplay.vue'
import { useStatsService } from '~/composables/useStatsService'
import { useLayoutStore } from '~/stores/layoutStore'
import { useStatsStore } from '~/stores/statsStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('stats.pageTitle')
const statsStore = useStatsStore()
const statsService = useStatsService()
statsService.getProfileStats(statsStore.period)
</script>
