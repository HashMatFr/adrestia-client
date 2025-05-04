<template>
  <div class="flex flex-col w-full h-full pt-12">
    <Tabulation
      :current-tab="currentTab"
      :tabs="profileTabs"
      @change-focused-tab="changeFocusedTab"
    >
    </Tabulation>
    <div class="flex w-full p-5">
      <InfoCard v-if="currentTab === 0"></InfoCard>
      <DetailCard v-else></DetailCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Tabulation from '~/components/design/Tabulation.vue'
import DetailCard from '~/components/detail/DetailCard.vue'
import { TabConfig } from '~/constants/types'
import InfoCard from '~/components/info/InfoCard.vue'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const route = useRoute()

const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('profile.pageTitle')

const currentTab = ref(0)
const profileTabs = ref<Array<TabConfig>>([
  { title: t('profile.infos.tabTitle') },
  { title: t('detail.tabTitle') },
])

if (route.query?.description) {
  changeFocusedTab(1)
}

function changeFocusedTab(newIndex) {
  currentTab.value = newIndex
}
</script>
