<template>
  <div class="flex w-full">
    <form
      novalidate
      @submit.prevent="submitForm"
      class="flex flex-col gap-5 w-full"
    >
      <InputValidationWrapper
        id="username"
        :key="usernameFieldKey"
        ref="usernameRef"
        type="text"
        name="username"
        :label="t('register.username')"
        :value="username"
        :rules="'required|firstCharacterMustBeALetter|min:4|max:50|doesNotContainSpaces'"
        class="w-full lg:w-5/12"
        :on-change="handleChangeField"
        @is-field-valid="(event) => (form.username = event)"
      />
      <div class="flex flex-col gap-1 w-full">
        <InputValidationWrapper
          id="email"
          ref="emailRef"
          type="email"
          name="email"
          :label="t('register.email')"
          placeholder="Ex : bob@adrestia.com"
          :value="email"
          class="w-full"
          :rules="'required|email|max:254'"
          :on-change="handleChangeField"
          @is-field-valid="(event) => (form.email = event)"
        />
        <Text
          v-if="emailAlreadyExist"
          :value="t('errors.email.alreadyUsed')"
          class="text-alert-500"
        ></Text>
      </div>
      <RegisterPasswordFields
        ref="passwordFieldsRef"
        :on-change="handleChangeField"
        @update-password-status="(event) => (form.passwordFields = event)"
      />

      <div class="fixed bottom-0 left-0 w-full px-5 py-5 flex flex-row gap-5">
        <CustomButton
          class="w-full"
          :label="t('actions.cancel')"
          :base="true"
          :outline="false"
          :borderless="false"
          :category="'alert'"
          @click="navigateTo(localePath('/login'))"
        >
          <template #iconStart> <ArrowLeft class="mr-1.5" /> </template
        ></CustomButton>
        <CustomButton
          class="w-full"
          type="submit"
          :label="t('actions.next')"
          :base="true"
          :outline="false"
          :borderless="false"
        >
          <template #iconEnd> <ArrowLeft class="ml-1.5 rotate-180" /> </template
        ></CustomButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProfileStore } from '~/stores/profileStore'
import ArrowLeft from '../icons/ArrowLeft.vue'
import { useProfileService } from '~/composables/useProfileService'
import { useLayoutStore } from '~/stores/layoutStore'
import CustomButton from '../design/CustomButton.vue'
import InputValidationWrapper from '../validation/InputValidationWrapper.vue'
import RegisterPasswordFields from './RegisterPasswordFields.vue'
import Text from '../design/Text.vue'

const emit = defineEmits(['next-step'])
const { t } = useI18n()
const profileStore = useProfileStore()
const layoutStore = useLayoutStore()
const localePath = useLocalePath()
const profileService = useProfileService()

const username = ref('')
const password = ref('')
const email = ref('')

const emailAlreadyExist = ref(false)
const usernameFieldKey = ref(545698)

// Form setting
const form = ref({
  username: false,
  email: false,
  passwordFields: false,
})
const usernameRef = ref(null)
const emailRef = ref(null)
const passwordFieldsRef = ref(null)

function submitForm() {
  usernameRef.value.validate()
  emailRef.value.validate()
  passwordFieldsRef.value.validate()
  if (form.value.username && form.value.email && form.value.passwordFields) {
    verifyEmail()
  }
}

async function verifyEmail() {
  emailAlreadyExist.value = false
  try {
    await profileService.verifyEmail(email.value)
    createProfile()
  } catch (error) {
    if (layoutStore.fetchError && layoutStore.fetchError.status === 409) {
      emailAlreadyExist.value = true
      layoutStore.fetchError = null
    }
  }
}

async function createProfile() {
  try {
    const registerProfile = {
      username: username.value,
      email: email.value,
      password: password.value,
      locale: profileStore.locale,
    }
    await profileService.registerProfile(registerProfile)
    nextRegisterStep()
  } catch (error) {
    layoutStore.fetchError = null
  }
}

function nextRegisterStep() {
  profileStore.username = username.value
  profileStore.password = password.value
  profileStore.email = email.value
  emit('next-step')
}

function handleChangeField(name, value) {
  switch (name) {
    case 'username':
      username.value = value
      break
    case 'email':
      email.value = value
      break
    case 'password':
      password.value = value
      break
    default:
      break
  }
}
</script>
