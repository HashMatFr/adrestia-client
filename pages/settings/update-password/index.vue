<template>
  <div class="w-full h-full flex flex-col p-5 pt-16 gap-5">
    <CustomButton
      :label="t('actions.back')"
      :base="true"
      :outline="false"
      class="w-fit"
      :category="'light_mercury'"
      @click="navigateTo(localePath('/settings'))"
    >
      <template #iconStart> <ArrowLeft class="mr-2" /> </template
    ></CustomButton>

    <form
      v-if="displayedState === 0"
      @submit.prevent="submitForm"
      class="w-full h-full flex flex-col gap-5"
    >
      <RegisterPasswordFields
        ref="passwordFieldsRef"
        :on-change="handleChangeField"
        @update-password-status="(event) => (form.passwordFields = event)"
      />

      <CustomButton
        :label="t('actions.validate')"
        :base="true"
        :outline="false"
        :category="'success'"
        class="w-full"
        type="submit"
      />
    </form>

    <div
      v-else-if="displayedState === 1"
      class="w-full flex flex-col gap-5 text-success-500 items-center text-center"
    >
      <Check :width="92" :height="92"></Check>
      <Text :value="t('updatePassword.success')" />
    </div>
    <div
      v-else
      class="flex flex-col gap-5 items-center text-center text-alert-500"
    >
      <NoResults :width="92" :height="88" class="mx-auto"></NoResults>
      <Text :value="t('updatePassword.error')" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from '~/components/design/CustomButton.vue'
import Text from '~/components/design/Text.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import Check from '~/components/icons/Check.vue'
import NoResults from '~/components/icons/NoResults.vue'
import RegisterPasswordFields from '~/components/register/RegisterPasswordFields.vue'
import { useProfileService } from '~/composables/useProfileService'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: [],
})
const { t } = useI18n()
const localePath = useLocalePath()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('updatePassword.pageTitle')

const profileService = useProfileService()
const displayedState = ref(0)
const password = ref('')

// Form setting
const form = ref({
  passwordFields: false,
})
const passwordFieldsRef = ref(null)

function handleChangeField(name, value) {
  if (name === 'password') {
    password.value = value
  }
}

function submitForm() {
  passwordFieldsRef.value.validate()
  if (form.value.passwordFields) {
    profileService
      .updatePassword(password.value, password.value)
      .then(() => {
        displayedState.value = 1
      })
      .catch((error) => {
        console.log(error)
        displayedState.value = 2
      })
  }
}
</script>
