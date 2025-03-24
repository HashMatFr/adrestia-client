<template>
  <div class="w-full flex flex-col gap-5 px-5 pt-20 pb-5">
    <CustomButton
      :label="t('actions.back')"
      :base="true"
      :outline="false"
      :borderless="false"
      class="w-fit"
      @click="backToLogin"
    >
      <template #iconStart> <ArrowLeft class="mr-1.5" /> </template
    ></CustomButton>

    <div v-if="displayResetError" class="w-full flex flex-col gap-5">
      <NoResults :width="92" :height="88" class="mx-auto"></NoResults>
      <Text class="text-alert-500" :value="t('resetPassword.resetError')" />
    </div>

    <div v-else class="w-full flex flex-col gap-7">
      <ResetPasswordEmailStep
        v-if="resetCurrentStep === 0"
        @submit-email="submitEmail"
      ></ResetPasswordEmailStep>

      <ResetPasswordPrivateQuestionsStep
        v-else-if="resetCurrentStep === 1"
        :first-question="resetPasswordToComplete.firstSecretQuestion"
        :second-question="resetPasswordToComplete.secondSecretQuestion"
        @submit-answers="submitPrivateAnswers"
      ></ResetPasswordPrivateQuestionsStep>

      <ResetPasswordResult
        v-else-if="resetCurrentStep === 2"
      ></ResetPasswordResult>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from '~/components/design/CustomButton.vue'
import Text from '~/components/design/Text.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import NoResults from '~/components/icons/NoResults.vue'
import ResetPasswordEmailStep from '~/components/reset-password/ResetPasswordEmailStep.vue'
import ResetPasswordPrivateQuestionsStep from '~/components/reset-password/ResetPasswordPrivateQuestionsStep.vue'
import ResetPasswordResult from '~/components/reset-password/ResetPasswordResult.vue'
import { useResetPasswordsService } from '~/composables/useResetPasswordsService'
import { ResetPassword } from '~/constants/types'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'empty',
  middleware: [],
})

const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('resetPassword.pageTitle')
const localePath = useLocalePath()
const resetPasswordService = useResetPasswordsService()

const displayResetError = ref(false)
const resetCurrentStep = ref(0)
const resetPasswordToComplete = ref<ResetPassword>(null)
const newPassword = ref('')

function submitEmail(email: string) {
  resetPasswordService
    .getResetPasswordToComplete(email)
    .then((response) => {
      if (response) {
        resetPasswordToComplete.value = response
        resetCurrentStep.value++
      }
    })
    .catch((error) => {
      displayResetError.value = true
      resetCurrentStep.value = 0
    })
}

function submitPrivateAnswers(answers) {
  resetPasswordToComplete.value.firstSecretAnswer = answers.firstAnswer
  resetPasswordToComplete.value.secondSecretAnswer = answers.secondAnswer

  resetPasswordService
    .resetPassword(resetPasswordToComplete.value)
    .then((response) => {
      if (response && typeof response === 'string') {
        newPassword.value = response
        resetCurrentStep.value++
      }
    })
    .catch((error) => {
      displayResetError.value = true
      resetCurrentStep.value = 0
    })
}

async function backToLogin() {
  return navigateTo(localePath('/login'))
}
</script>
