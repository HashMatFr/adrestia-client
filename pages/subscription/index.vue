<template>
  <div class="w-full flex flex-col gap-5 px-5 pt-20 pb-5">
    <div class="w-full p-2 flex flex-col rounded bg-coal-900">
      <Text :value="t('subscription.description')"></Text>
      <div class="w-full flex flex-row gap-3 items-center">
        <div class="h-1.5 w-1.5 rounded-full bg-main-500"></div>
        <Text :value="t('subscription.description2')"></Text>
      </div>
      <div class="w-full flex flex-row gap-3 items-center">
        <div class="h-1.5 w-1.5 rounded-full bg-main-500"></div>
        <Text :value="t('subscription.description3')"></Text>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Text from '~/components/design/Text.vue'

const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('subscription.pageTitle')
</script>
