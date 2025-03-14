<template>
  <div class="w-full h-full p-5 pt-16">
    <PauseDisplay></PauseDisplay>
  </div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('state.pageTitle')
</script>
