<template>
  <div class="flex w-full pb-40">
    <form
      novalidate
      @submit.prevent="submitForm"
      class="flex flex-col gap-5 w-full"
    >
      <div class="flex flex-col gap-2">
        <HtmlText :value="t('detail.description.sex')" class="text-secondary" />
        <SelectValidationWrapper
          id="sexSelect"
          name="sex"
          ref="sexRef"
          :options="sexOptions"
          :preselected-value="sex"
          :on-change="handleChangeField"
          @is-field-valid="(event) => (form.sex = event)"
        />
        <Text
          :value="t('register.canNotBeChangeLater')"
          class="text-secondary"
        ></Text>
      </div>
      <div class="flex flex-col gap-2">
        <HtmlText
          :value="t('detail.description.orientation')"
          class="text-secondary"
        />
        <SelectValidationWrapper
          id="orientationSelect"
          name="orientation"
          ref="orientationRef"
          :options="orientationOptions"
          :preselected-value="orientation"
          :on-change="handleChangeField"
          @is-field-valid="(event) => (form.orientation = event)"
        />
      </div>
      <div class="flex flex-col gap-2">
        <HtmlText
          :value="t('detail.description.age', { age: age.toString() })"
          class="text-secondary"
        />
        <Incrementor
          class="justify-center w-full"
          :name="'age'"
          :min-value="18"
          :max-value="80"
          :start-value="age"
          @on-update="handleChangeIncrementorField"
        ></Incrementor>
      </div>
      <div class="flex flex-col gap-2">
        <HtmlText
          :value="t('detail.description.size', { size: size.toString() })"
          class="text-secondary"
        />
        <Incrementor
          class="justify-center w-full"
          :name="'size'"
          :min-value="100"
          :max-value="250"
          :start-value="size"
          @on-update="handleChangeIncrementorField"
        ></Incrementor>
      </div>

      <div
        class="fixed bottom-0 left-0 w-full px-5 py-5 flex flex-row gap-5 bg-coal-800"
      >
        <CustomButton
          class="w-full"
          :label="t('actions.previous')"
          :base="true"
          :outline="false"
          @click="goToPreviousStep"
        >
          <template #iconStart> <ArrowLeft class="mr-2" /> </template
        ></CustomButton>
        <CustomButton
          class="w-full"
          type="submit"
          :label="t('actions.validate')"
          :base="true"
          :outline="false"
          :category="'success'"
        ></CustomButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProfileStore } from '~/stores/profileStore'
import ArrowLeft from '../icons/ArrowLeft.vue'
import CustomButton from '../design/CustomButton.vue'
import Text from '../design/Text.vue'
import { SelectOption } from '~/constants/types'
import HtmlText from '../design/HtmlText.vue'
import SelectValidationWrapper from '../validation/SelectValidationWrapper.vue'
import Incrementor from '../design/Incrementor.vue'

const emit = defineEmits(['validate-register-flow', 'previous-step'])
const { t } = useI18n()
const profileStore = useProfileStore()

const sexOptions: SelectOption[] = [
  {
    value: 'M',
    text: t('detail.enums.sex.M'),
  },
  { value: 'F', text: t('detail.enums.sex.F') },
]
const orientationOptions: SelectOption[] = [
  { value: 'HETEROSEXUAL', text: t('detail.enums.orientation.HETEROSEXUAL') },
  { value: 'HOMOSEXUAL', text: t('detail.enums.orientation.HOMOSEXUAL') },
  { value: 'BISEXUAL', text: t('detail.enums.orientation.BISEXUAL') },
]

// Form setting
const form = ref({
  sex: false,
  orientation: false,
})
const sexRef = ref(null)
const orientationRef = ref(null)

const sex = ref('M')
const orientation = ref('HETEROSEXUAL')
const age = ref(18)
const size = ref(175)

function submitForm() {
  sexRef.value.validate()
  orientationRef.value.validate()
  if (form.value.sex && form.value.orientation) {
    validateRegisterFlow()
  }
}

async function validateRegisterFlow() {
  const baseInfos = {
    sex: sex.value,
    orientation: orientation.value,
    age: age.value,
    size: size.value,
  }
  profileStore.setDetail(baseInfos)
  emit('validate-register-flow')
}

function goToPreviousStep() {
  emit('previous-step')
}

function handleChangeField(name, value) {
  switch (name) {
    case 'sex':
      sex.value = value
      break
    case 'orientation':
      orientation.value = value
      break
    case 'age':
      age.value = value
      break
    case 'size':
      size.value = value
      break
    default:
      break
  }
}

function handleChangeIncrementorField(values) {
  handleChangeField(values.name, values.value)
}
</script>
