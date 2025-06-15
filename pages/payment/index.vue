<template>
  <div class="w-full flex pt-20"></div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const layoutStore = useLayoutStore()
layoutStore.shouldDisplayHomeButton = true
layoutStore.shouldDisplaySettingsButton = true
layoutStore.shouldDisplayLanguagesSwitcher = false
</script>
<style scoped></style>
