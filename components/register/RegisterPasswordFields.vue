<template>
  <div class="w-full flex flex-col gap-5">
    <div class="flex flex-col w-full gap-3">
      <InputValidationWrapper
        id="password"
        ref="passwordRef"
        :label="t('register.password')"
        :rules="passwordRules"
        name="password"
        :type="displayPassword ? 'text' : 'password'"
        :on-change="handleChangeField"
        :value="password"
        @is-field-valid="(event) => (form.password = event)"
      >
      </InputValidationWrapper>
      <div class="flex flex-col gap-2 pl-5">
        <Text :value="t('errors.passwordHints.description')" />

        <RegisterPasswordHint
          :default-behavior="password === ''"
          :check="passwordLength"
          :rule="t('errors.passwordHints.length')"
        />
        <RegisterPasswordHint
          :default-behavior="!passwordShouldContainANumber && password === ''"
          :check="passwordShouldContainANumber"
          :rule="t('errors.passwordHints.number')"
        />

        <RegisterPasswordHint
          :default-behavior="
            !passwordShouldContainLowercaseLetter && password === ''
          "
          :check="passwordShouldContainLowercaseLetter"
          :rule="t('errors.passwordHints.lowercase')"
        />
        <RegisterPasswordHint
          :default-behavior="
            !passwordShouldContainUppercaseLetter && password === ''
          "
          :check="passwordShouldContainUppercaseLetter"
          :rule="t('errors.passwordHints.uppercase')"
        />

        <RegisterPasswordHint
          :default-behavior="
            !passwordShouldContainsASpecialCharacter && password === ''
          "
          :check="passwordShouldContainsASpecialCharacter"
          :rule="t('errors.passwordHints.special')"
        />
      </div>
    </div>
    <InputValidationWrapper
      id="passwordConfirmation"
      ref="passwordConfirmationRef"
      :type="displayPasswordConfirmation ? 'text' : 'password'"
      :label="t('register.confirmPassword')"
      name="passwordConfirmation"
      :value="passwordConfirmation"
      :on-change="handleChangeField"
      :rules="[
        { name: 'required' },
        { name: 'max', param: 100 },
        { name: 'confirmPassword', param: password },
      ]"
      @is-field-valid="(event) => (form.passwordConfirmation = event)"
    >
    </InputValidationWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Text from '../design/Text.vue'
import RegisterPasswordHint from './RegisterPasswordHint.vue'
import { ValidationRule } from '~/constants/types'

const props = defineProps({
  onChange: {
    type: Function,
    required: true,
  },
})
const emit = defineEmits(['update-password-status'])

const { t } = useI18n()

// Form setting
const form = ref({
  password: false,
  passwordConfirmation: false,
})
const passwordRef = ref(null)
const passwordConfirmationRef = ref(null)
const displayPassword = ref(false)
const displayPasswordConfirmation = ref(false)
const password = ref('')
const passwordConfirmation = ref('')
const passwordShouldContainANumber = ref(false)
const passwordLength = ref(false)
const passwordShouldContainLowercaseLetter = ref(false)
const passwordShouldContainUppercaseLetter = ref(false)
const passwordShouldContainsASpecialCharacter = ref(false)

const passwordRules = computed(() => {
  return [
    { name: 'required' },
    { name: 'passwordLength', param: 9 },
    { name: 'passwordShouldContainANumber', param: password.value },
    { name: 'passwordShouldContainLowercaseLetter', param: password.value },
    { name: 'passwordShouldContainUppercaseLetter', param: password.value },
    { name: 'passwordShouldContainsASpecialCharacter', param: password.value },
  ]
})

function checkPasswordRule(rule: ValidationRule) {
  const isValid = passwordRef.value.validateAgainstRule(rule)
  switch (rule.name) {
    case 'passwordLength':
      passwordLength.value = isValid
      break
    case 'passwordShouldContainANumber':
      passwordShouldContainANumber.value = isValid
      break
    case 'passwordShouldContainLowercaseLetter':
      passwordShouldContainLowercaseLetter.value = isValid
      break
    case 'passwordShouldContainUppercaseLetter':
      passwordShouldContainUppercaseLetter.value = isValid
      break
    case 'passwordShouldContainsASpecialCharacter':
      passwordShouldContainsASpecialCharacter.value = isValid
      break
    default:
      break
  }
}
function handleChangeField(name, value) {
  switch (name) {
    case 'password':
      password.value = value
      props.onChange('password', value)
      passwordRules.value.forEach((rule) => {
        // Validates one rule at the time to synchro the document (displaying each password rule status)
        checkPasswordRule(rule)
      })
      if (passwordConfirmation.value.length > 0) {
        passwordConfirmationRef.value.validateAgainstRule({
          name: 'confirmPassword',
          param: password.value,
        })
      }
      break
    case 'passwordConfirmation':
      passwordConfirmation.value = value
      break
    default:
      break
  }
}
function validate() {
  passwordRef.value.validate()
  passwordConfirmationRef.value.validate()
  emit(
    'update-password-status',
    form.value.password && form.value.passwordConfirmation,
  )
}

defineExpose({
  validate,
})
</script>
