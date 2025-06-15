<template>
  <div class="w-full px-5 pt-20 flex flex-col gap-5 pb-24"></div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: ['profile-activation-guard'],
})

const layoutStore = useLayoutStore()
layoutStore.shouldDisplayHomeButton = true
layoutStore.shouldDisplaySettingsButton = true
layoutStore.shouldDisplayLanguagesSwitcher = false
</script>
