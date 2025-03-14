<template>
  <div class="w-full px-5 pt-20 flex flex-col gap-5 pb-24">
    <UpdatePhotos></UpdatePhotos>
  </div>
</template>
<script setup lang="ts">
import UpdatePhotos from '~/components/photos/UpdatePhotos.vue'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('photos.pageTitle')
</script>
<style scoped></style>
