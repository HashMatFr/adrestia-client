<template>
  <div class="flex flex-col gap-5 w-full">
    <DetailDisplayCard
      v-if="!isUpdateMode"
      :is-register-flow="false"
      @on-modify="setIsUpdateMode(true)"
    ></DetailDisplayCard>
    <DetailUpdateCard
      v-else
      :is-register-flow="false"
      :sex="sex"
      :orientation="orientation"
      :age="age"
      :size="size"
      :relationship-goal="relationshipGoal"
      :children-situation="childrenSituation"
      :ethnicity="ethnicity"
      :political-view="politicalView"
      :religion="religion"
      :smoking-situation="smokingSituation"
      :alcohol-consumption="alcoholConsumption"
      :fitness="fitness"
      @on-update="updateDetail"
      @on-cancel="setIsUpdateMode(false)"
      @update-field="updateField"
    ></DetailUpdateCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DetailDisplayCard from '../detail/DetailDisplayCard.vue'
import DetailUpdateCard from '../detail/DetailUpdateCard.vue'
import { useProfileService } from '~/composables/useProfileService'
import { Detail } from '~/constants/types'
import { useProfileStore } from '~/stores/profileStore'

const profileService = useProfileService()
const profileStore = useProfileStore()

const isUpdateMode = ref(false)

function setIsUpdateMode(bool) {
  isUpdateMode.value = bool
}

const sex = ref('NOT_AVAILABLE')
sex.value = profileStore.detail.sex

const orientation = ref('NOT_AVAILABLE')
orientation.value = profileStore.detail.orientation

const age = ref(18)
age.value = profileStore.detail.age

const size = ref(175)
size.value = profileStore.detail.size

const relationshipGoal = ref('NOT_AVAILABLE')
relationshipGoal.value = profileStore.detail.relationshipGoal

const childrenSituation = ref('NOT_AVAILABLE')
childrenSituation.value = profileStore.detail.childrenSituation

const ethnicity = ref('NOT_AVAILABLE')
ethnicity.value = profileStore.detail.ethnicity

const politicalView = ref('NOT_AVAILABLE')
politicalView.value = profileStore.detail.politicalView

const religion = ref('NOT_AVAILABLE')
religion.value = profileStore.detail.religion

const smokingSituation = ref('NOT_AVAILABLE')
smokingSituation.value = profileStore.detail.smokingSituation

const alcoholConsumption = ref('NOT_AVAILABLE')
alcoholConsumption.value = profileStore.detail.alcoholConsumption

const fitness = ref('NOT_AVAILABLE')
fitness.value = profileStore.detail.fitness

function updateField(values) {
  switch (values.name) {
    case 'orientation':
      orientation.value = values.value
      break
    case 'age':
      age.value = values.value
      break
    case 'size':
      size.value = values.value
      break
    case 'relationshipGoal':
      relationshipGoal.value = values.value
      break
    case 'childrenSituation':
      childrenSituation.value = values.value
      break
    case 'ethnicity':
      ethnicity.value = values.value
      break
    case 'politicalView':
      politicalView.value = values.value
      break
    case 'religion':
      religion.value = values.value
      break
    case 'smokingSituation':
      smokingSituation.value = values.value
      break
    case 'alcoholConsumption':
      alcoholConsumption.value = values.value
      break
    case 'fitness':
      fitness.value = values.value
      break
    default:
      break
  }
}

function updateDetail() {
  const newDetail: Detail = {
    detailId: profileStore.detail.detailId,
    age: age.value,
    size: size.value,
    sex: sex.value,
    orientation: orientation.value,
    relationshipGoal: relationshipGoal.value,
    childrenSituation: childrenSituation.value,
    ethnicity: ethnicity.value,
    politicalView: politicalView.value,
    religion: religion.value,
    smokingSituation: smokingSituation.value,
    alcoholConsumption: alcoholConsumption.value,
    fitness: fitness.value,
  }
  profileService.updateDetail(newDetail)
  setIsUpdateMode(false)
}
</script>
