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
import { useProfileStore } from '~/stores/profileStore'
import { TabConfig } from '~/constants/types'
import InfoCard from '~/components/info/InfoCard.vue'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const layoutStore = useLayoutStore()
const profileStore = useProfileStore()
if (profileStore.detail.sex === 'NOT_AVAILABLE') {
  layoutStore.pageTitle = t('profile.pageTitle.toComplete')
} else {
  layoutStore.pageTitle = t('profile.pageTitle.modify')
}

const currentTab = ref(0)
const profileTabs = ref<Array<TabConfig>>([
  { title: t('profile.infos.tabTitle') },
  { title: t('detail.tabTitle') },
])

function changeFocusedTab(newIndex) {
  currentTab.value = newIndex
}
</script>
