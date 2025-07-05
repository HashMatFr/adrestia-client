<template>
  <div class="w-full flex flex-col h-full gap-10">
    <form
      @submit.prevent="submitValidationCode"
      class="w-full flex flex-col gap-5 h-full"
    >
      <div class="w-full flex flex-col gap-3">
        <Text class="text-center" :value="t('validateEmail.explanation')" />
        <InputValidationWrapper
          id="validationCode"
          ref="validationCodeRef"
          :label="t('validateEmail.code')"
          name="validationCode"
          type="string"
          :on-change="handleChangeField"
          :rules="[
            { name: 'required' },
            { name: 'latinAlphabetOrDigits' },
            { name: 'max', param: 6 },
          ]"
          :value="validationCode.toString()"
          @is-field-valid="(event) => (form.validationCode = event)"
        />
      </div>

      <CustomButton
        :label="t('actions.validate')"
        :base="true"
        :outline="false"
        :category="'success'"
        class="w-full"
        type="submit"
      />
    </form>

    <div class="w-full flex flex-col gap-3">
      <Text class="text-center" :value="t('validateEmail.notReceived')" />
      <CustomButton
        :label="t('actions.resendEmail')"
        :base="true"
        :outline="false"
        class="w-full"
        @click="resendValidationCode()"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Text from '../design/Text.vue'
import InputValidationWrapper from '../validation/InputValidationWrapper.vue'
import CustomButton from '../design/CustomButton.vue'
import { useStateService } from '~/composables/useStateService'
import { emailValidationStatesEnum } from '~/constants/enums'
import { useStateStore } from '~/stores/stateStore'

const emit = defineEmits(['change-state'])
const { t } = useI18n()
const stateService = useStateService()
const stateStore = useStateStore()

// Form setting
const form = ref({
  validationCode: false,
})
const validationCodeRef = ref(null)
const validationCode = ref('')

function handleChangeField(name, value) {
  if (name === 'validationCode') {
    validationCode.value = value
  }
}

function resendValidationCode() {
  stateService
    .resendValidationCode()
    .then(() => {
      emit('change-state', emailValidationStatesEnum.emailSent)
    })
    .catch((error) => {
      console.log(error)
      emit('change-state', emailValidationStatesEnum.emailError)
    })
}

function submitValidationCode() {
  validationCodeRef.value.validate()
  const isValid = form.value.validationCode

  if (isValid) {
    stateService
      .validateEmailWithCode(stateStore.profileStateId, validationCode.value)
      .then(() => {
        emit('change-state', emailValidationStatesEnum.validated)
      })
      .catch((error) => {
        console.log(error)
        emit('change-state', emailValidationStatesEnum.notValidated)
      })
  }
}
</script>
