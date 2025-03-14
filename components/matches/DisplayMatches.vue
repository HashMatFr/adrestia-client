<template>
  <div class="w-full flex grid grid-cols-2 gap-3 justify-center">
    <MatchCard v-for="(ref, index) in matchesStore.matches"></MatchCard>
  </div>
</template>
<script setup lang="ts">
import { useMatchesService } from '~/composables/useMatchesService'
import { useMatchesStore } from '~/stores/matchesStore'
import MatchCard from './MatchCard.vue'

const matchesService = useMatchesService()

matchesService.getMatchesByProfileId()
const matchesStore = useMatchesStore()
</script>
