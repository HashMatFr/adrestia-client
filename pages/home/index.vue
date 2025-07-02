<template>
  <div class="w-full h-full px-5 flex flex-col gap-5 pt-20">
    <ProfileStatus></ProfileStatus>
    <SubscriptionStatus></SubscriptionStatus>
  </div>
</template>
<script setup lang="ts">
import { useFilesService } from '~/composables/useFilesService'
import { useProfileService } from '~/composables/useProfileService'
import { useLayoutStore } from '~/stores/layoutStore'
import { useProfileStore } from '~/stores/profileStore'
import { Geolocation } from '@capacitor/geolocation'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import ProfileStatus from '~/components/home/ProfileStatus.vue'
import { useStateService } from '~/composables/useStateService'
import { useStateStore } from '~/stores/stateStore'
import { usePhotosStore } from '~/stores/photosStore'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import SubscriptionStatus from '~/components/home/SubscriptionStatus.vue'
import { useMatchesService } from '~/composables/useMatchesService'
import { usePropertiesStore } from '~/stores/propertiesStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t, locale } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('home.pageTitle')
layoutStore.shouldDisplayHomeButton = false
layoutStore.shouldDisplaySettingsButton = true
layoutStore.shouldDisplayLanguagesSwitcher = false
const switchLocalePath = useSwitchLocalePath()

const profileStore = useProfileStore()
const stateStore = useStateStore()

const profileService = useProfileService()
const stateService = useStateService()

profileService.getUserProfile().then(() => {
  if (profileStore.locale === 'FR') {
    dayjs.locale('fr')
  }
  if (locale.value !== profileStore.getUserLocale) {
    return navigateTo(switchLocalePath(profileStore.locale))
  }
  loadComplementaryInfos()
})

updateUserCoordinates()
async function updateUserCoordinates() {
  await Geolocation.getCurrentPosition({
    enableHighAccuracy: true,
  })
    .then((coordinates) => {
      console.log('coordinates')
      console.log(coordinates)
      profileService.updateProfileCoordinates(
        coordinates.coords.latitude,
        coordinates.coords.longitude,
      )
    })
    .catch((error) => {
      console.log(error)
    })
}

const filesService = useFilesService()
const photosStore = usePhotosStore()

const existingFilesReferencesLength = computed(() => {
  return photosStore.filesReferences.filter((ref) => ref.fileReferenceId).length
})

async function loadComplementaryInfos() {
  await stateService.getProfileState()
  filesService.getFilesReferences().then(() => {
    if (existingFilesReferencesLength.value === 0 && profileStore.enabled) {
      stateService
        .updateMinimumPhotosLimitStatus(stateStore.profileStateId, true)
        .then(() => {
          stateService.getProfileState()
        })
    }
  })
}

// Recursive timeout for matches short polling
const propertiesStore = usePropertiesStore()
const matchesService = useMatchesService()
const pollingTimeout = ref(null)
let delay = propertiesStore.getPropertyValueByKey('matchesShortPollingDelay')
  ? Number.parseInt(
      propertiesStore.getPropertyValueByKey('matchesShortPollingDelay'),
    )
  : 60000 // default initial delay

function startShortPolling() {
  pollingTimeout.value = setTimeout(function () {
    matchesService.getMatchesByProfileId()
    startShortPolling()
  }, delay)
}

onMounted(() => {
  matchesService.getMatchesByProfileId()
  startShortPolling()
})

onUnmounted(() => {
  if (pollingTimeout.value) {
    clearTimeout(pollingTimeout.value)
  }
})
</script>
