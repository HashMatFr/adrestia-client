<template>
  <div class="w-full px-5 pt-24 flex flex-col gap-5 pb-24">
    <div class="fixed top-16 left-0 w-full bg-coal-800">
      <Stepper class="mx-auto" :steps="4" :currentStep="stepIndex"></Stepper>
    </div>
    <RegisterTouStep
      v-if="stepIndex === 1"
      @next-step="nextStep"
    ></RegisterTouStep>
    <RegisterProfileStep
      v-else-if="stepIndex === 2"
      @previous-step="previousStep"
      @next-step="nextStep"
    ></RegisterProfileStep>
    <RegisterBaseInfosStep
      v-else-if="stepIndex === 3"
      @previous-step="previousStep"
      @validate-register-flow="createProfile"
    ></RegisterBaseInfosStep>
    <RegisterConfirmation v-else-if="stepIndex === 4"></RegisterConfirmation>
  </div>
</template>
<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import Stepper from '~/components/design/Stepper.vue'
import RegisterBaseInfosStep from '~/components/register/RegisterBaseInfosStep.vue'
import RegisterConfirmation from '~/components/register/RegisterConfirmation.vue'
import RegisterProfileStep from '~/components/register/RegisterProfileStep.vue'
import RegisterTouStep from '~/components/register/RegisterTouStep.vue'
import { useProfileService } from '~/composables/useProfileService'
import { RegisterProfile } from '~/constants/types'
import { useLayoutStore } from '~/stores/layoutStore'
import { useProfileStore } from '~/stores/profileStore'

definePageMeta({
  layout: 'empty',
  middleware: [],
})

const { t } = useI18n()
const profileService = useProfileService()
const profileStore = useProfileStore()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('register.pageTitle')
layoutStore.isRegisterFlow = true
layoutStore.shouldDisplayHomeButton = false
layoutStore.shouldDisplaySettingsButton = false
layoutStore.shouldDisplayLanguagesSwitcher = true

const stepIndex = ref(1)

function nextStep() {
  stepIndex.value++
}

function previousStep() {
  stepIndex.value--
}

async function createProfile() {
  try {
    const registerProfile: RegisterProfile = {
      username: profileStore.username,
      email: profileStore.email,
      password: profileStore.password,
      locale: profileStore.locale,
      sex: profileStore.detail.sex,
      orientation: profileStore.detail.orientation,
      age: profileStore.detail.age,
      size: profileStore.detail.size,
    }
    await profileService.registerProfile(registerProfile)
    nextStep()
  } catch (error) {
    console.log(error)
    layoutStore.error = t('register.error')
  }
}

onUnmounted(() => {
  profileStore.username = ''
  profileStore.password = ''
  profileStore.email = ''
  profileStore.detail.sex = 'M'
  profileStore.detail.orientation = 'HETEROSEXUAL'
  profileStore.detail.age = 18
  profileStore.detail.size = 175
})
</script>
