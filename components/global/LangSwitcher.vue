<template>
  <div class="flex text-primary">
    <div ref="switcherTrigger" class="flex relative p-2" @click="displaySwitch">
      <FrenchFlag v-if="currentLocale === 'fr'"></FrenchFlag>
      <EnglishFlag v-else></EnglishFlag>
    </div>
    <div
      v-if="shouldDisplaySwitcher"
      ref="switcherBody"
      class="absolute flex flex-col top-9 right-7 z-20 gap-1 border border-main-500 rounded bg-coal-900"
    >
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="w-full flex flex-col gap-1 justify-center"
      >
        <div
          class="p-3 w-full flex flex-row gap-3"
          @click="updateProfileLocale(locale.code)"
        >
          <FrenchFlag v-if="locale.code === 'fr'"></FrenchFlag>
          <EnglishFlag v-else></EnglishFlag>
          <Text :value="locale.code" :upper="true"></Text>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import FrenchFlag from '../icons/FrenchFlag.vue'
import EnglishFlag from '../icons/EnglishFlag.vue'
import { computed, onUnmounted, ref } from 'vue'
import Text from '../design/Text.vue'
import { useProfileStore } from '~/stores/profileStore'
import { useProfileService } from '~/composables/useProfileService'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const profileStore = useProfileStore()
const profileService = useProfileService()

const shouldDisplaySwitcher = ref(false)
const switcherTrigger = ref<HTMLElement | null>(null)
const switcherBody = ref<HTMLElement | null>(null)

document.addEventListener('click', (ev) => closeSwitcher(ev))
onUnmounted(() =>
  window.removeEventListener('click', (ev) => closeSwitcher(ev)),
)

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== currentLocale.value)
})

const currentLocale = computed(() => {
  return locale.value
})

function closeSwitcher(e) {
  if (
    switcherTrigger.value &&
    switcherBody.value &&
    !switcherTrigger.value.outerHTML.includes(e.target.outerHTML) &&
    !switcherBody.value.outerHTML.includes(e.target.outerHTML)
  ) {
    displaySwitch()
  }
}

function updateProfileLocale(code) {
  if (profileStore.profileId) {
    profileService.updateProfileLocale(code)
  }
  displaySwitch()
}

function displaySwitch() {
  shouldDisplaySwitcher.value = !shouldDisplaySwitcher.value
}
</script>
