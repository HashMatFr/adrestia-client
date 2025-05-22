<template>
  <div class="w-full flex flex-col text-center">
    <SectionLabel :label="t('home.profileStatus.label')"></SectionLabel>
    <div
      class="w-full p-2 flex flex-row gap-3 items-center bg-coal-900 rounded"
    >
      <Text class="pr-3" :value="getSubscriptionLabel"></Text>
      <CustomButton
        class="h-min"
        :label="''"
        :base="true"
        :outline="false"
        :size="'small'"
        @click="goToSubscriptionPage()"
      >
        <template #iconEnd>
          <ArrowLeft :height="18" class="rotate-180" /> </template
      ></CustomButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStateStore } from '~/stores/stateStore'
import CustomButton from '../design/CustomButton.vue'
import SectionLabel from '../design/SectionLabel.vue'
import Text from '../design/Text.vue'
import { computed } from 'vue'
import dayjs from 'dayjs'

const { t } = useI18n()
const stateStore = useStateStore()
const localePath = useLocalePath()

const getSubscriptionLabel = computed(() => {
  if (stateStore.subscriptionExpiryDate) {
    const managedDate = dayjs(stateStore.subscriptionExpiryDate)
    if (managedDate.isBefore(dayjs())) {
      return t('subscription.expiredSubscription', {
        date: managedDate.format('DD/MM/YYYY'),
      })
    } else if (managedDate.isAfter(dayjs())) {
      return t('subscription.subscribedUntil', {
        date: managedDate.format('DD/MM/YYYY'),
      })
    }
  } else {
    return t('subscription.notSubscribed')
  }
})

function goToSubscriptionPage() {
  return navigateTo(localePath('/subscription'))
}
</script>
