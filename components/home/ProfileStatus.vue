<template>
  <div class="w-full flex flex-col text-center">
    <SectionLabel :label="t('home.profileStatus.label')"></SectionLabel>
    <div class="w-full p-2 flex flex-col gap-5 bg-coal-900 rounded">
      <ProgressCircle
        :steps="statusSteps"
        :currentIndex="currentIndex"
      ></ProgressCircle>

      <div
        v-if="!stateStore.activationState"
        class="flex flex-row gap-3 w-full items-center"
      >
        <Pause :width="34" :height="34" class="text-main-500"></Pause>
        <Text :value="t('home.profileStatus.activationWarning')"></Text>
        <CustomButton
          class="h-min"
          :label="''"
          :base="true"
          :outline="false"
          :size="'small'"
          @click="goToSettingsState()"
        >
          <template #iconEnd>
            <ArrowLeft :height="18" class="rotate-180" /> </template
        ></CustomButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStateStore } from '~/stores/stateStore'
import Text from '../design/Text.vue'
import { computed, ref } from 'vue'
import { useProfileStore } from '~/stores/profileStore'
import CustomButton from '../design/CustomButton.vue'
import ArrowLeft from '../icons/ArrowLeft.vue'
import SectionLabel from '../design/SectionLabel.vue'
import ProgressCircle from './ProgressCircle.vue'
import { ProgressStep } from '~/constants/types'
import Pause from '../icons/Pause.vue'

const { t } = useI18n()
const stateStore = useStateStore()
const profileStore = useProfileStore()

const statusSteps = ref<ProgressStep[]>([
  {
    stepLabel: t('home.profileStatus.emailValidationWarning'),
    stepRequiredPage: '/validate-email',
  },
  {
    stepLabel: t('home.profileStatus.photosWarning'),
    stepRequiredPage: '/photos',
  },
  {
    stepLabel: t('home.profileStatus.descriptionWarning'),
    stepRequiredPage: '/profile?description=true',
  },
  {
    stepLabel: t('home.profileStatus.noWarnings'),
    stepRequiredPage: '/home',
  },
])

const currentIndex = computed(() => {
  let index = statusSteps.value.length
  if (!stateStore.hasEmailBeenVerified) {
    index = 1
  } else if (!stateStore.respectsMinimumPhotosLimit) {
    index = 2
  } else if (profileStore.detail.sex !== 'NOT_AVAILABLE') {
    index = 3
  }
  return index
})

const localePath = useLocalePath()
function goToSettingsState() {
  return navigateTo(localePath('/settings/state'))
}
</script>
