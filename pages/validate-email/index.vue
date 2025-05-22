<template>
  <div class="w-full flex flex-col gap-5 px-5 pt-20 pb-5">
    <CustomButton
      :label="t('actions.back')"
      :base="true"
      :outline="false"
      class="w-fit"
      :category="'light_mercury'"
      @click="backToHome"
    >
      <template #iconStart> <ArrowLeft class="mr-2" /> </template
    ></CustomButton>

    <div
      v-if="currentState === emailValidationStatesEnum.validated"
      class="w-full flex flex-col gap-7"
    >
      <Check :width="92" :height="88" class="mx-auto text-success-500"></Check>
      <Text :value="t('validateEmail.validationSuccess')" />
    </div>

    <div
      v-else-if="currentState === emailValidationStatesEnum.notValidated"
      class="w-full flex flex-col gap-7"
    >
      <NoResults
        :width="92"
        :height="88"
        class="mx-auto text-alert-500"
      ></NoResults>
      <Text :value="t('validateEmail.validationFailure')" />
      <CustomButton
        :label="t('actions.retry')"
        :base="true"
        :outline="false"
        class="w-full"
        @click="currentState = emailValidationStatesEnum.form"
      >
        <template #iconEnd> <CircularArrow class="ml-2" /></template
      ></CustomButton>
    </div>

    <div
      v-else-if="currentState === emailValidationStatesEnum.emailSent"
      class="w-full flex flex-col gap-7"
    >
      <Check :width="92" :height="88" class="mx-auto text-success-500"></Check>
      <Text :value="t('validateEmail.resendEmailSuccess')" />
      <CustomButton
        :label="t('actions.retry')"
        :base="true"
        :outline="false"
        class="w-full"
        @click="currentState = emailValidationStatesEnum.form"
      >
        <template #iconEnd> <CircularArrow class="ml-2" /></template
      ></CustomButton>
    </div>

    <div
      v-else-if="currentState === emailValidationStatesEnum.emailError"
      class="w-full flex flex-col gap-7"
    >
      <NoResults
        :width="92"
        :height="88"
        class="mx-auto text-alert-500"
      ></NoResults>
      <Text :value="t('validateEmail.resendEmailFailure')" />
      <CustomButton
        :label="t('actions.retry')"
        :base="true"
        :outline="false"
        class="w-full"
        @click="currentState = emailValidationStatesEnum.form"
      >
        <template #iconEnd> <CircularArrow class="ml-2" /></template
      ></CustomButton>
    </div>

    <div v-else class="w-full flex flex-col gap-7">
      <ValidationCodeForm @change-state="updateState"></ValidationCodeForm>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from '~/components/design/CustomButton.vue'
import Text from '~/components/design/Text.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import Check from '~/components/icons/Check.vue'
import CircularArrow from '~/components/icons/CircularArrow.vue'
import NoResults from '~/components/icons/NoResults.vue'
import ValidationCodeForm from '~/components/validate-email/ValidationCodeForm.vue'
import { emailValidationStatesEnum } from '~/constants/enums'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'empty',
  middleware: [],
})

const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('resetPassword.pageTitle')
const localePath = useLocalePath()

const currentState = ref('')
currentState.value = emailValidationStatesEnum.form

function updateState(newState) {
  currentState.value = newState
}

function backToHome() {
  return navigateTo(localePath('/home'))
}
</script>
