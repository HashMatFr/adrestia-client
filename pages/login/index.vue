<template>
  <div class="w-full flex flex-col gap-5 px-10 py-20">
    <CredentialsForm></CredentialsForm>
    <CustomButton
      :label="t('login.register.createAccount')"
      :base="true"
      :outline="false"
      :borderless="false"
      @click="createAccount"
    ></CustomButton>
    <CustomButton
      :label="t('login.register.forgottenPassword')"
      :base="true"
      :outline="false"
      :borderless="false"
      @click="resetPassword"
      ><template #iconStart> <ResetArrow class="mr-2" /> </template
    ></CustomButton>
  </div>
</template>
<script setup lang="ts">
import CustomButton from '~/components/design/CustomButton.vue'
import CredentialsForm from '~/components/login/CredentialsForm.vue'
import { authService } from '~/authentication/authService'
import ResetArrow from '~/components/icons/ResetArrow.vue'

definePageMeta({
  layout: 'empty',
  middleware: [],
})

const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('login.pageTitle')
const localePath = useLocalePath()

authService.trySilentLogin()
if (authService.getToken()) {
  navigateTo(localePath('/home'))
}

function createAccount() {
  return navigateTo(localePath('/register'))
}

function resetPassword() {
  return navigateTo(localePath('/reset-password'))
}
</script>
