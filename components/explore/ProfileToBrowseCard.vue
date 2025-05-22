<template>
  <div class="flex flex-col w-full pb-40">
    <!-- Photos to browse -->
    <div class="relative flex w-full h-96">
      <div
        v-if="getFileToBrowseDtosLength > 1"
        class="absolute top-2 flex w-full justify-center h-min"
      >
        <Stepper
          :steps="getFileToBrowseDtosLength"
          :current-step="photoIndex + 1"
        ></Stepper>
      </div>
      <div
        v-show="getFileToBrowseDtosLength > 1 && photoIndex > 0"
        class="absolute top-0 left-0 w-32 h-full items-center flex place-content-start text-main-500 pl-2"
        @click="seePreviousPhoto"
      >
        <Chevron class="rotate-180"></Chevron>
      </div>
      <div
        v-show="
          getFileToBrowseDtosLength > 1 &&
          photoIndex < getFileToBrowseDtosLength - 1
        "
        class="absolute top-0 right-0 w-32 h-full items-center flex place-content-end text-main-500 pr-2"
        @click="seeNextPhoto"
      >
        <Chevron></Chevron>
      </div>
      <img :src="getPhotoData" :alt="'Loading ...'" class="object-cover" />
    </div>

    <!-- Username and age -->
    <SectionLabel
      :label="
        profileToBrowse.username + ', ' + String(profileToBrowse.detailDto.age)
      "
    ></SectionLabel>
    <!-- <div class="flex flex-row justify-between w-full p-3 bg-coal-900 mb-1">
      <Text :value="profileToBrowse.username" font-size="xl"></Text>
      <Text
        :value="
          t('profileToBrowse.age', {
            age: profileToBrowse.detailDto.age.toString(),
          })
        "
        font-size="xl"
      ></Text>
    </div> -->

    <!-- Main infos -->
    <div class="flex flex-col gap-1 w-full">
      <div class="flex flex-row justify-between p-3 bg-coal-900">
        <div class="flex flex-row gap-2">
          <Size class="text-main-500"></Size>
          <Text
            :value="
              t('profileToBrowse.size', {
                size: profileToBrowse.detailDto.size.toString(),
              })
            "
          ></Text>
        </div>
        <div class="flex flex-row gap-2">
          <Pin class="text-main-500"></Pin>
          <Text :value="distanceLabel"></Text>
        </div>
        <div v-if="profileToBrowse.lastActivity" class="flex flex-row gap-2">
          <Clock class="text-main-500"></Clock>
          <Text
            :value="
              t('profileToBrowse.lastActivity', {
                activity: profileToBrowse.lastActivity,
              })
            "
          ></Text>
        </div>
        <div v-if="profileToBrowse.city" class="flex flex-row gap-2">
          <Skyline class="text-main-500"></Skyline>
          <Text
            :value="
              t('profileToBrowse.livesIn', { city: profileToBrowse.city })
            "
          ></Text>
        </div>
      </div>

      <!-- Bio -->
      <div v-if="profileToBrowse.bio" class="flex w-full p-3 bg-coal-900">
        <Text :value="profileToBrowse.bio"></Text>
      </div>

      <!-- Secondary infos -->
      <div class="flex flex-wrap gap-2 w-full p-3 bg-coal-900">
        <DetailTag
          :value="
            t(
              'detail.enums.relationshipGoal.' +
                profileToBrowse.detailDto.relationshipGoal,
            )
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.relationshipGoal ===
            profileStore.detail.relationshipGoal
          "
        >
          <template #tagIcon
            ><RelationshipGoal :width="24" :height="24"></RelationshipGoal
          ></template>
        </DetailTag>
        <DetailTag
          :value="
            t(
              'detail.enums.childrenSituation.' +
                profileToBrowse.detailDto.childrenSituation,
            )
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.childrenSituation ===
            profileStore.detail.childrenSituation
          "
        >
          <template #tagIcon
            ><ChildrenSituation :width="24" :height="24"></ChildrenSituation
          ></template>
        </DetailTag>
        <DetailTag
          :value="
            t('detail.enums.ethnicity.' + profileToBrowse.detailDto.ethnicity)
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.ethnicity ===
            profileStore.detail.ethnicity
          "
        >
          <template #tagIcon
            ><Ethnicity :width="24" :height="24"></Ethnicity
          ></template>
        </DetailTag>
        <DetailTag
          :value="
            t(
              'detail.enums.politicalView.' +
                profileToBrowse.detailDto.politicalView,
            )
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.politicalView ===
            profileStore.detail.politicalView
          "
        >
          <template #tagIcon
            ><Balance :width="24" :height="24"></Balance
          ></template>
        </DetailTag>
        <DetailTag
          :value="
            t('detail.enums.religion.' + profileToBrowse.detailDto.religion)
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.religion === profileStore.detail.religion
          "
        >
          <template #tagIcon
            ><Religion :width="24" :height="24"></Religion
          ></template>
        </DetailTag>
        <DetailTag
          :value="
            t(
              'detail.enums.smokingSituation.' +
                profileToBrowse.detailDto.smokingSituation,
            )
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.smokingSituation ===
            profileStore.detail.smokingSituation
          "
        >
          <template #tagIcon
            ><SmokingSituation :width="24" :height="24"></SmokingSituation
          ></template>
        </DetailTag>
        <DetailTag
          :value="
            t(
              'detail.enums.alcoholConsumption.' +
                profileToBrowse.detailDto.alcoholConsumption,
            )
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.alcoholConsumption ===
            profileStore.detail.alcoholConsumption
          "
        >
          <template #tagIcon
            ><AlcoholConsumption :width="24" :height="24"></AlcoholConsumption
          ></template>
        </DetailTag>
        <DetailTag
          :value="
            t('detail.enums.fitness.' + profileToBrowse.detailDto.fitness)
          "
          :should-be-highlighted="
            profileToBrowse.detailDto.fitness === profileStore.detail.fitness
          "
        >
          <template #tagIcon
            ><Fitness :width="24" :height="24"></Fitness
          ></template>
        </DetailTag>
        <DetailTag
          :value="t('detail.enums.temper.' + profileToBrowse.detailDto.temper)"
          :should-be-highlighted="
            profileToBrowse.detailDto.temper === profileStore.detail.temper
          "
        >
          <template #tagIcon
            ><Temper :width="24" :height="24"></Temper
          ></template>
        </DetailTag>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, computed, ref } from 'vue'
import Text from '../design/Text.vue'
import { ProfileToBrowse } from '~/constants/types'
import Stepper from '../design/Stepper.vue'
import { useProfilesToBrowseStore } from '~/stores/profilesToBrowseStore'
import { useFilesService } from '~/composables/useFilesService'
import Pin from '../icons/Pin.vue'
import Size from '../icons/Size.vue'
import Skyline from '../icons/Skyline.vue'
import Clock from '../icons/Clock.vue'
import Chevron from '../icons/Chevron.vue'
import DetailTag from '../design/DetailTag.vue'
import { useProfileStore } from '~/stores/profileStore'
import RelationshipGoal from '../icons/RelationshipGoal.vue'
import ChildrenSituation from '../icons/ChildrenSituation.vue'
import Ethnicity from '../icons/Ethnicity.vue'
import Religion from '../icons/Religion.vue'
import SmokingSituation from '../icons/SmokingSituation.vue'
import AlcoholConsumption from '../icons/AlcoholConsumption.vue'
import Fitness from '../icons/Fitness.vue'
import Temper from '../icons/Temper.vue'
import Balance from '../icons/Balance.vue'
import SectionLabel from '../design/SectionLabel.vue'

const props = defineProps({
  profileToBrowse: {
    type: Object as PropType<ProfileToBrowse>,
    required: true,
  },
})
const { t } = useI18n()
const profilesToBrowseStore = useProfilesToBrowseStore()
const profileStore = useProfileStore()
const filesService = useFilesService()

const photoIndex = ref(0)
// To load the profile's first photo
downloadPhotoToBrowse()

const getFileToBrowseDtosLength = computed(() => {
  return props.profileToBrowse?.fileToBrowseDtos?.length
    ? props.profileToBrowse?.fileToBrowseDtos?.length
    : 0
})

const getPhotoData = computed(() => {
  return profilesToBrowseStore.photos[
    props.profileToBrowse?.fileToBrowseDtos[photoIndex.value]?.filename
  ]?.dataUrl
})

const distanceLabel = computed(() => {
  const distance = props.profileToBrowse.distanceFromUser
  if (distance >= 1) {
    return t('profileToBrowse.distance', {
      distance: distance,
    })
  } else {
    return t('profileToBrowse.closeDistance')
  }
})

function downloadPhotoToBrowse() {
  const filename =
    props.profileToBrowse?.fileToBrowseDtos[photoIndex.value]?.filename
  if (filename) {
    filesService.downloadPhotoToBrowse(
      props.profileToBrowse.profileId,
      props.profileToBrowse.fileToBrowseDtos[photoIndex.value].filename,
    )
  }
}

function seeNextPhoto() {
  photoIndex.value++
  if (!getPhotoData.value) {
    downloadPhotoToBrowse()
  }
}

function seePreviousPhoto() {
  photoIndex.value--
}
</script>
