<template>
  <div class="w-full">
    <form @submit.prevent="submitForm" class="w-full">
      <div class="flex flex-col gap-5 text-primary pb-40">
        <div class="flex flex-col gap-2">
          <Text :value="t('profile.infos.username')" class="text-secondary" />
          <InputValidationWrapper
            id="usernameInput"
            name="username"
            ref="usernameRef"
            :value="username"
            :rules="[
              { name: 'required' },
              { name: 'unicodeLettersOrDigits' },
              { name: 'max', param: 100 },
            ]"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.username = event)"
          ></InputValidationWrapper>
        </div>

        <div class="flex flex-col gap-2">
          <Text :value="t('profile.infos.city')" class="text-secondary" />
          <InputValidationWrapper
            id="cityInput"
            name="city"
            ref="cityRef"
            :rules="[
              { name: 'unicodeLettersOrDigits' },
              { name: 'max', param: 100 },
            ]"
            :value="city"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.city = event)"
          ></InputValidationWrapper>
        </div>

        <div class="flex flex-col gap-2">
          <Text :value="t('profile.infos.job')" class="text-secondary" />
          <InputValidationWrapper
            id="jobInput"
            name="job"
            ref="jobRef"
            :rules="[
              { name: 'unicodeLettersOrDigits' },
              { name: 'max', param: 150 },
            ]"
            :value="job"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.job = event)"
          ></InputValidationWrapper>
        </div>

        <div class="flex flex-col gap-2">
          <Text :value="t('profile.infos.education')" class="text-secondary" />
          <SelectValidationWrapper
            id="educationSelect"
            name="education"
            ref="educationRef"
            :options="educationOptions"
            :preselected-value="education"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.education = event)"
          />
        </div>

        <div class="flex flex-col gap-2">
          <Text :value="t('profile.infos.bio')" class="text-secondary" />
          <TextAreaValidationWrapper
            id="bioInput"
            name="bio"
            ref="bioRef"
            :value="bio"
            :rules="[{ name: 'max', param: 2000 }]"
            :max-length="2000"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.bio = event)"
          ></TextAreaValidationWrapper>
        </div>

        <div
          class="flex flex-row fixed left-0 w-full p-2 gap-2 bg-coal-800 bottom-20"
        >
          <CustomButton
            :label="t('actions.cancel')"
            class="w-full"
            :base="true"
            :outline="false"
            :category="'alert'"
            @click="onCancel"
          />
          <CustomButton
            :label="t('actions.validate')"
            :base="true"
            :outline="false"
            :category="'success'"
            class="w-full"
            type="submit"
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SelectValidationWrapper from '../validation/SelectValidationWrapper.vue'
import InputValidationWrapper from '../validation/InputValidationWrapper.vue'
import Text from '../design/Text.vue'
import { SelectOption } from '~/constants/types'
import TextAreaValidationWrapper from '../validation/TextAreaValidationWrapper.vue'
import CustomButton from '../design/CustomButton.vue'

defineProps({
  username: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['on-update', 'on-cancel', 'update-field'])
const { t } = useI18n()

const educationOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('profile.enums.education.NOT_AVAILABLE'),
  },
  {
    value: 'HIGH_SCHOOL',
    text: t('profile.enums.education.HIGH_SCHOOL'),
  },
  {
    value: 'BACHELOR',
    text: t('profile.enums.education.BACHELOR'),
  },
  {
    value: 'MASTER',
    text: t('profile.enums.education.MASTER'),
  },
  {
    value: 'PHD',
    text: t('profile.enums.education.PHD'),
  },
]

// Form setting
const form = ref({
  username: false,
  city: false,
  job: false,
  education: false,
  bio: false,
})
const usernameRef = ref(null)
const jobRef = ref(null)
const educationRef = ref(null)
const cityRef = ref(null)
const bioRef = ref(null)

function submitForm() {
  usernameRef.value.validate()
  jobRef.value.validate()
  educationRef.value.validate()
  cityRef.value.validate()
  bioRef.value.validate()

  let isValid =
    form.value.username &&
    form.value.city &&
    form.value.education &&
    form.value.job &&
    form.value.bio

  if (isValid) {
    emit('on-update')
  }
}

function onCancel() {
  emit('on-cancel')
}

function handleChangeField(name, value) {
  emit('update-field', {
    name,
    value,
  })
}
</script>
