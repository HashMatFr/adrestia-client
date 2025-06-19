<template>
  <div class="w-full px-5 pt-20 flex flex-col gap-5 pb-24">
    <Text :value="t('matches.warning', { count: matchesLimit })"></Text>
    <div class="w-full flex flex-col gap-3 justify-center">
      <MatchCard v-for="mtd in matchesStore.matches" :match="mtd"></MatchCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import MatchCard from '~/components/matches/MatchCard.vue'
import { useMatchesService } from '~/composables/useMatchesService'
import { usePropertiesService } from '~/composables/usePropertiesService'
import { useLayoutStore } from '~/stores/layoutStore'
import { useMatchesStore } from '~/stores/matchesStore'
import { usePropertiesStore } from '~/stores/propertiesStore'

definePageMeta({
  layout: 'default',
  middleware: ['profile-activation-guard'],
})

const { t } = useI18n()
const layoutStore = useLayoutStore()
const matchesStore = useMatchesStore()
const propertiesStore = usePropertiesStore()

const matchesLimit = computed(() => {
  return (
    propertiesStore.getPropertyValueByKey('matchesToFetchQuerySetLimit') ?? ''
  )
})

layoutStore.pageTitle = t('matches.pageTitle')
layoutStore.shouldDisplayHomeButton = true
layoutStore.shouldDisplaySettingsButton = true
layoutStore.shouldDisplayLanguagesSwitcher = false

const propertiesService = usePropertiesService()
propertiesService.getClientProperties()

const matchesService = useMatchesService()
matchesService.getMatchesByProfileId()
</script>
