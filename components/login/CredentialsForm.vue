<template>
  <div class="w-full flex">
    <form novalidate @submit.prevent="submitForm" class="w-full flex">
      <div class="w-full flex flex-col gap-5 justify-center">
        <InputValidationWrapper
          id="email"
          ref="emailRef"
          :label="t('login.credentials.email')"
          name="email"
          type="email"
          placeholder="Ex : bob@adrestia.com"
          :on-change="handleChangeField"
          :rules="[{ name: 'required' }, { name: 'email', param: email }]"
          :value="email"
          @is-field-valid="(event) => (form.email = event)"
        />
        <InputValidationWrapper
          id="password"
          :key="passwordKey"
          ref="passwordRef"
          :label="t('login.credentials.password')"
          name="password"
          type="password"
          :on-change="handleChangeField"
          :rules="[{ name: 'required' }]"
          :value="password"
          @is-field-valid="(event) => (form.password = event)"
        />
        <Text
          v-if="areCredentialsIncorrect"
          class="text-alert-500"
          :value="t('errors.incorrectPassword')"
          font-size="s"
        />
        <CustomButton
          type="submit"
          :label="t('actions.login')"
          :category="'success'"
          :base="true"
          :outline="false"
        >
        </CustomButton>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import InputValidationWrapper from '../validation/InputValidationWrapper.vue'
import CustomButton from '../design/CustomButton.vue'
import { authService } from '~/authentication/authService'
import { useLayoutStore } from '~/stores/layoutStore'
import Text from '../design/Text.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const layoutStore = useLayoutStore()

const email = ref('')
const password = ref('')

// Form setting
const form = ref({
  email: false,
  password: false,
})
const emailRef = ref(null)
const passwordRef = ref(null)

const areCredentialsIncorrect = ref(false)
const passwordKey = ref(0)

function handleChangeField(name, value) {
  switch (name) {
    case 'password':
      if (form.value.password && areCredentialsIncorrect.value) {
        areCredentialsIncorrect.value = false
        layoutStore.error = null
      }
      password.value = value
      break
    case 'email':
      email.value = value
      break
    default:
      break
  }
}

async function submitForm() {
  emailRef.value.validate()
  passwordRef.value.validate()
  const isValid = form.value.password && form.value.email

  if (isValid) {
    await authService.login(email.value, password.value)
    if (layoutStore.error) {
      areCredentialsIncorrect.value = true
    } else {
      return navigateTo(localePath('/home'))
    }
  }
}
</script>
