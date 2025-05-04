<template>
  <div class="flex w-full h-full p-5 pt-16 gap-5">
    <CustomButton
      :label="t('actions.back')"
      :base="false"
      :outline="true"
      :borderless="false"
      class="w-fit"
      @click="navigateTo(localePath('/settings'))"
    >
      <template #iconStart> <ArrowLeft class="mr-2" /> </template
    ></CustomButton>
  </div>
</template>
<script setup lang="ts">
import CustomButton from '~/components/design/CustomButton.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('updatePassword.pageTitle')
</script>
