<template>
  <div class="w-full flex h-full">
    <form
      @submit.prevent="submitEmail"
      class="w-full flex flex-col gap-7 h-full"
    >
      <div class="flex flex-col gap-2">
        <Text :value="t('profile.infos.city')" class="text-secondary" />
        <InputValidationWrapper
          id="email"
          ref="emailRef"
          :label="t('login.credentials.email')"
          name="email"
          type="email"
          :on-change="handleChangeField"
          :rules="[
            { name: 'required' },
            { name: 'email' },
            { name: 'max', param: 100 },
          ]"
          :value="email"
          @is-field-valid="(event) => (form.email = event)"
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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Text from '../design/Text.vue'
import InputValidationWrapper from '../validation/InputValidationWrapper.vue'
import CustomButton from '../design/CustomButton.vue'

const emit = defineEmits(['submit-email'])
const { t } = useI18n()

// Form setting
const form = ref({
  email: false,
})
const emailRef = ref(null)
const email = ref('')

function handleChangeField(name, value) {
  if (name === 'email') {
    email.value = value
  }
}

function submitEmail() {
  emailRef.value.validate()
  const isValid = form.value.email

  if (isValid) {
    emit('submit-email', email.value)
  }
}
</script>
