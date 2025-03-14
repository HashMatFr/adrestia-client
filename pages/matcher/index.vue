<template>
  <div class="w-full h-full p-5 pt-16">
    <MatcherCard></MatcherCard>
  </div>
</template>
<script setup lang="ts">
import MatcherCard from '~/components/matcher/MatcherCard.vue'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('matcher.pageTitle')
</script>
<style scoped></style>
