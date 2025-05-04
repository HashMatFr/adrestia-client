<template>
  <div
    class="fixed flex top-0 left-0 right-0 h-12 bg-coal-950 text-main-50 items-center px-5 py-2 z-100"
  >
    <div class="w-full flex flex-row justify-between items-center">
      <Text :value="layoutStore.pageTitle" :font-size="'l'"></Text>

      <div class="flex flex-row gap-1.5">
        <LangSwitcher v-if="shouldDisplaySwitcher"></LangSwitcher>
        <nuxt-link
          v-if="shouldDisplayHome"
          class="flex flex-col gap-2 p-2 items-center rounded"
          :to="
            localePath({
              name: 'home',
            })
          "
        >
          <House :height="24" :width="24"></House>
        </nuxt-link>
        <nuxt-link
          v-if="shouldDisplaySettings"
          class="flex flex-col gap-2 p-2 items-center rounded"
          :to="
            localePath({
              name: 'settings',
            })
          "
        >
          <Settings :height="24"></Settings>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '~/stores/layoutStore'
import Text from '../design/Text.vue'
import Settings from '../icons/Settings.vue'
import { useProfileStore } from '~/stores/profileStore'
import LangSwitcher from '../global/LangSwitcher.vue'
import House from '../icons/House.vue'
import { computed } from 'vue'

const layoutStore = useLayoutStore()
const localePath = useLocalePath()
const route = useRoute()
const profileStore = useProfileStore()

const shouldDisplaySwitcher = computed(() => {
  return (
    route.name.includes('login') ||
    route.name.includes('register') ||
    route.name.includes('reset-password') ||
    route.name.includes('settings')
  )
})

const shouldDisplayHome = computed(() => {
  return !route.name.includes('home') && profileStore.profileId
})

const shouldDisplaySettings = computed(() => {
  return !route.name.includes('settings') && profileStore.profileId
})
</script>
