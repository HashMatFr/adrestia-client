<template>
  <div class="w-full h-full px-5 flex flex-col gap-5 pt-20">
    <ProfileStatus
      v-if="!(existingFilesReferencesLength >= 2 && isDescriptionCompleted)"
      :existing-files-references-length="existingFilesReferencesLength"
      :is-description-completed="isDescriptionCompleted"
    ></ProfileStatus>
    <div
      class="flex flex-row gap-3 w-full h-20 items-center bg-coal-900 rounded-lg"
      @click="goToProfile"
    >
      <div
        class="w-12 h-full bg-main-500 rounded-l-lg justify-center items-center flex"
      >
        <UserStroke class="text-coal-900"></UserStroke>
      </div>
      <div class="w-full flex px-3 justify-between">
        <Text :value="t('home.configureProfile')"></Text>
        <Chevron class="text-main-500"></Chevron>
      </div>
    </div>

    <!-- MANAGE PHOTOS -->
    <div
      class="flex flex-row gap-3 w-full h-20 items-center bg-coal-900 rounded-lg"
      @click="goToPhotos"
    >
      <div
        class="w-12 h-full bg-main-500 rounded-l-lg justify-center items-center flex"
      >
        <Photo :width="24" :height="24" class="text-coal-900"></Photo>
      </div>
      <div class="w-full flex px-3 justify-between">
        <Text :value="t('home.managePhotos')"></Text>
        <Chevron class="text-main-500"></Chevron>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Text from '~/components/design/Text.vue'
import Chevron from '~/components/icons/Chevron.vue'
import Photo from '~/components/icons/Photo.vue'
import UserStroke from '~/components/icons/UserStroke.vue'
import { useFilesService } from '~/composables/useFilesService'
import { useProfileService } from '~/composables/useProfileService'
import { useLayoutStore } from '~/stores/layoutStore'
import { usePhotosStore } from '~/stores/photosStore'
import { useProfileStore } from '~/stores/profileStore'
import { Geolocation } from '@capacitor/geolocation'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import ProfileStatus from '~/components/home/ProfileStatus.vue'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t, locale } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('home.pageTitle')
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const profileStore = useProfileStore()
const profileService = useProfileService()
profileService.getUserProfile().then(() => {
  if (profileStore.locale === 'fr') {
    dayjs.locale('fr')
  }
  if (locale.value !== profileStore.locale) {
    return navigateTo(switchLocalePath(profileStore.locale))
  }
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
      profileService.updateProfileCoordinates(
        profileStore.latitude,
        profileStore.longitude,
      )
    })
}

const photosStore = usePhotosStore()

const filesService = useFilesService()
const existingFilesReferencesLength = computed(() => {
  return photosStore.filesReferences.filter((ref) => ref.fileReferenceId).length
})
filesService.getFilesReferences().then(() => {
  if (existingFilesReferencesLength.value === 0 && profileStore.enabled) {
    profileService.updateProfileActivationStatus(false)
  }
})

const isDescriptionCompleted = computed(() => {
  return (
    profileStore.bio &&
    profileStore.city &&
    profileStore.job &&
    profileStore.education !== ''
  )
})

function goToProfile() {
  return navigateTo(localePath('/profile'))
}
function goToPhotos() {
  return navigateTo(localePath('/photos'))
}
</script>
