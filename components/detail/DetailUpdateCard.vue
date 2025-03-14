<template>
  <div class="w-full">
    <form @submit.prevent="submitForm">
      <div class="flex flex-col gap-5 text-primary pb-40">
        <div class="flex flex-col gap-2">
          <HtmlText
            :value="t('detail.description.sex')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="sexSelect"
            name="sex"
            ref="sexRef"
            :options="sexOptions"
            :preselected-value="sex"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.sex = event)"
          />
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
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.relationshipGoal')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="relationshipGoalSelect"
            name="relationshipGoal"
            ref="relationshipGoalRef"
            :options="relationshipGoalOptions"
            :preselected-value="relationshipGoal"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.relationshipGoal = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.childrenSituation')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="childrenSituationSelect"
            name="childrenSituation"
            ref="childrenSituationRef"
            :options="childrenSituationOptions"
            :preselected-value="childrenSituation"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.childrenSituation = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.ethnicity')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="ethnicitySelect"
            name="ethnicity"
            ref="ethnicityRef"
            :options="ethnicityOptions"
            :preselected-value="ethnicity"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.ethnicity = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.politicalView')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="politicalViewSelect"
            name="politicalView"
            ref="politicalViewRef"
            :options="politicalViewOptions"
            :preselected-value="politicalView"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.politicalView = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.religion')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="religionSelect"
            name="religion"
            ref="religionRef"
            :options="religionOptions"
            :preselected-value="religion"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.religion = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.smokingSituation')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="smokingSituationSelect"
            name="smokingSituation"
            ref="smokingSituationRef"
            :options="smokingSituationOptions"
            :preselected-value="smokingSituation"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.smokingSituation = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.alcoholConsumption')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="alcoholConsumptionSelect"
            name="alcoholConsumption"
            ref="alcoholConsumptionRef"
            :options="alcoholConsumptionOptions"
            :preselected-value="alcoholConsumption"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.alcoholConsumption = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.fitness')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="fitnessSelect"
            name="fitness"
            ref="fitnessRef"
            :options="fitnessOptions"
            :preselected-value="fitness"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.fitness = event)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Text
            :value="t('detail.description.temper')"
            class="text-secondary"
          />
          <SelectValidationWrapper
            id="temperSelect"
            name="temper"
            ref="temperRef"
            :options="temperOptions"
            :preselected-value="temper"
            :on-change="handleChangeField"
            @is-field-valid="(event) => (form.temper = event)"
          />
        </div>
        <div
          class="flex flex-row fixed left-0 w-full p-2 gap-2 bg-coal-800 bottom-20"
        >
          <CustomButton
            :label="t('actions.cancel')"
            class="w-full"
            :base="true"
            :outline="false"
            :borderless="false"
            :category="'alert'"
            @click="onCancel"
          />
          <CustomButton
            :label="t('actions.validate')"
            :base="true"
            :outline="false"
            :borderless="false"
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
import CustomButton from '../design/CustomButton.vue'
import Text from '../design/Text.vue'
import SelectValidationWrapper from '../validation/SelectValidationWrapper.vue'
import { SelectOption } from '~/constants/types'
import HtmlText from '../design/HtmlText.vue'
import Incrementor from '../design/Incrementor.vue'

const props = defineProps({
  sex: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  relationshipGoal: {
    type: String,
    required: true,
  },
  childrenSituation: {
    type: String,
    required: true,
  },
  ethnicity: {
    type: String,
    required: true,
  },
  politicalView: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  smokingSituation: {
    type: String,
    required: true,
  },
  alcoholConsumption: {
    type: String,
    required: true,
  },
  fitness: {
    type: String,
    required: true,
  },
  temper: {
    type: String,
    required: true,
  },
  orientation: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['on-update', 'on-cancel', 'update-field'])

const { t } = useI18n()

const sexOptions: SelectOption[] = [
  {
    value: 'M',
    text: t('detail.enums.sex.M'),
  },
  { value: 'F', text: t('detail.enums.sex.F') },
]
const orientationOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.orientation.NOT_AVAILABLE'),
  },
  { value: 'HETEROSEXUAL', text: t('detail.enums.orientation.HETEROSEXUAL') },
  { value: 'HOMOSEXUAL', text: t('detail.enums.orientation.HOMOSEXUAL') },
  { value: 'BISEXUAL', text: t('detail.enums.orientation.BISEXUAL') },
]
const alcoholConsumptionOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.alcoholConsumption.NOT_AVAILABLE'),
  },
  { value: 'NEVER', text: t('detail.enums.alcoholConsumption.NEVER') },
  { value: 'SOMETIMES', text: t('detail.enums.alcoholConsumption.SOMETIMES') },
  { value: 'REGULARLY', text: t('detail.enums.alcoholConsumption.REGULARLY') },
]
const childrenSituationOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.childrenSituation.NOT_AVAILABLE'),
  },
  {
    value: 'ZERO_DO_NOT_WANT',
    text: t('detail.enums.childrenSituation.ZERO_DO_NOT_WANT'),
  },
  { value: 'ZERO_WANT', text: t('detail.enums.childrenSituation.ZERO_WANT') },
  {
    value: 'HAVE_WANT_MORE',
    text: t('detail.enums.childrenSituation.HAVE_WANT_MORE'),
  },
  {
    value: 'HAVE_DO_NOT_WANT_MORE',
    text: t('detail.enums.childrenSituation.HAVE_DO_NOT_WANT_MORE'),
  },
]
const ethnicityOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.ethnicity.NOT_AVAILABLE'),
  },
  { value: 'OCEANIAN', text: t('detail.enums.ethnicity.OCEANIAN') },
  { value: 'ASIAN', text: t('detail.enums.ethnicity.ASIAN') },
  { value: 'EUROPEAN', text: t('detail.enums.ethnicity.EUROPEAN') },
  { value: 'MIDDLE_EASTERN', text: t('detail.enums.ethnicity.MIDDLE_EASTERN') },
  { value: 'AFRICAN', text: t('detail.enums.ethnicity.AFRICAN') },
  { value: 'LATIN', text: t('detail.enums.ethnicity.LATIN') },
]
const fitnessOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.fitness.NOT_AVAILABLE'),
  },
  { value: 'SEDENTARY', text: t('detail.enums.fitness.SEDENTARY') },
  { value: 'ATHLETE', text: t('detail.enums.fitness.ATHLETE') },
  { value: 'ACTIVE', text: t('detail.enums.fitness.ACTIVE') },
]
const politicalViewOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.politicalView.NOT_AVAILABLE'),
  },
  { value: 'LEFT', text: t('detail.enums.politicalView.LEFT') },
  { value: 'MODERATE', text: t('detail.enums.politicalView.MODERATE') },
  { value: 'RIGHT', text: t('detail.enums.politicalView.RIGHT') },
  { value: 'LIBERTARIAN', text: t('detail.enums.politicalView.LIBERTARIAN') },
  { value: 'APOLITICAL', text: t('detail.enums.politicalView.APOLITICAL') },
  { value: 'OTHER', text: t('detail.enums.politicalView.OTHER') },
]
const relationshipGoalOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.relationshipGoal.NOT_AVAILABLE'),
  },
  {
    value: 'NOT_SERIOUS',
    text: t('detail.enums.relationshipGoal.NOT_SERIOUS'),
  },
  { value: 'SHORT_TERM', text: t('detail.enums.relationshipGoal.SHORT_TERM') },
  { value: 'LONG_TERM', text: t('detail.enums.relationshipGoal.LONG_TERM') },
  { value: 'MARRIAGE', text: t('detail.enums.relationshipGoal.MARRIAGE') },
  { value: 'FRIENDSHIP', text: t('detail.enums.relationshipGoal.FRIENDSHIP') },
]
const religionOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.religion.NOT_AVAILABLE'),
  },
  { value: 'CHRISTIAN', text: t('detail.enums.religion.CHRISTIAN') },
  { value: 'MUSLIM', text: t('detail.enums.religion.MUSLIM') },
  { value: 'JEWISH', text: t('detail.enums.religion.JEWISH') },
  { value: 'HINDU', text: t('detail.enums.religion.HINDU') },
  { value: 'SPIRITUAL', text: t('detail.enums.religion.SPIRITUAL') },
  { value: 'ATHEIST', text: t('detail.enums.religion.ATHEIST') },
  { value: 'AGNOSTIC', text: t('detail.enums.religion.AGNOSTIC') },
  { value: 'OTHER', text: t('detail.enums.religion.OTHER') },
]
const smokingSituationOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.smokingSituation.NOT_AVAILABLE'),
  },
  { value: 'NEVER', text: t('detail.enums.smokingSituation.NEVER') },
  { value: 'SOMETIMES', text: t('detail.enums.smokingSituation.SOMETIMES') },
  { value: 'REGULARLY', text: t('detail.enums.smokingSituation.REGULARLY') },
]
const temperOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('detail.enums.temper.NOT_AVAILABLE'),
  },
  { value: 'INTROVERT', text: t('detail.enums.temper.INTROVERT') },
  { value: 'EXTROVERT', text: t('detail.enums.temper.EXTROVERT') },
  { value: 'MIDDLE', text: t('detail.enums.temper.MIDDLE') },
]

// Form setting
const form = ref({
  sex: false,
  orientation: false,
  relationshipGoal: false,
  childrenSituation: false,
  ethnicity: false,
  politicalView: false,
  religion: false,
  smokingSituation: false,
  alcoholConsumption: false,
  fitness: false,
  temper: false,
})
const sexRef = ref(null)
const orientationRef = ref(null)
const relationshipGoalRef = ref(null)
const childrenSituationRef = ref(null)
const ethnicityRef = ref(null)
const politicalViewRef = ref(null)
const religionRef = ref(null)
const smokingSituationRef = ref(null)
const alcoholConsumptionRef = ref(null)
const fitnessRef = ref(null)
const temperRef = ref(null)

function submitForm() {
  sexRef.value.validate()
  orientationRef.value.validate()
  relationshipGoalRef.value.validate()
  childrenSituationRef.value.validate()
  ethnicityRef.value.validate()
  politicalViewRef.value.validate()
  religionRef.value.validate()
  smokingSituationRef.value.validate()
  alcoholConsumptionRef.value.validate()
  fitnessRef.value.validate()
  temperRef.value.validate()

  let isValid =
    form.value.sex &&
    form.value.orientation &&
    form.value.relationshipGoal &&
    form.value.childrenSituation &&
    form.value.ethnicity &&
    form.value.politicalView &&
    form.value.religion &&
    form.value.smokingSituation &&
    form.value.alcoholConsumption &&
    form.value.fitness &&
    form.value.temper

  if (isValid) {
    emit('on-update')
  }
}

function onCancel() {
  emit('on-cancel')
}

function handleChangeIncrementorField(values) {
  emit('update-field', {
    name: values.name,
    value: values.value,
  })
}

function handleChangeField(name, value) {
  emit('update-field', {
    name,
    value,
  })
}
</script>
