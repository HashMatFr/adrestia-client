<template>
  <div class="flex flex-col gap-5 text-primary pb-40">
    <!-- ORIENTATION -->
    <ProfileItem
      :label="t('matcher.description.orientation')"
      :content="orientationOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><SexualOrientation :width="28" :height="28"></SexualOrientation
      ></template>
    </ProfileItem>

    <!-- AGE -->
    <ProfileItem
      :label="t('matcher.description.age', { minAge, maxAge })"
      :content="t('matcher.description.ageInterval', { minAge, maxAge })"
    >
      <template #itemIcon><Age :width="28" :height="28"></Age></template>
    </ProfileItem>

    <!-- DISTANCE -->
    <ProfileItem
      :label="t('matcher.description.distance')"
      :content="
        t('matcher.description.distanceValue', { maxDistance: distance })
      "
    >
      <template #itemIcon><Pin :width="28" :height="28"></Pin></template>
    </ProfileItem>

    <!-- RELATIONSHIP GOAL -->
    <ProfileItem
      :label="t('matcher.description.relationshipGoal')"
      :content="relationshipGoalOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><RelationshipGoal :width="28" :height="28"></RelationshipGoal
      ></template>
    </ProfileItem>

    <!-- CHILDREN SITUATION -->
    <ProfileItem
      :label="t('matcher.description.childrenSituation')"
      :content="childrenSituationOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><ChildrenSituation :width="28" :height="28"></ChildrenSituation
      ></template>
    </ProfileItem>

    <!-- ETHNICITY -->
    <ProfileItem
      :label="t('matcher.description.ethnicity')"
      :content="ethnicityOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><Ethnicity :width="28" :height="28"></Ethnicity
      ></template>
    </ProfileItem>

    <!-- POLITICAL VIEW -->
    <ProfileItem
      :label="t('matcher.description.politicalView')"
      :content="politicalViewOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><Balance :width="28" :height="28"></Balance
      ></template>
    </ProfileItem>

    <!-- RELIGION -->
    <ProfileItem
      :label="t('matcher.description.religion')"
      :content="religionOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><Religion :width="28" :height="28"></Religion
      ></template>
    </ProfileItem>

    <!-- SMOKING SITUATION -->
    <ProfileItem
      :label="t('matcher.description.smokingSituation')"
      :content="smokingSituationOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><SmokingSituation :width="28" :height="28"></SmokingSituation
      ></template>
    </ProfileItem>

    <!-- ALCOHOL CONSUMPTION -->
    <ProfileItem
      :label="t('matcher.description.alcoholConsumption')"
      :content="alcoholConsumptionOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><AlcoholConsumption :width="28" :height="28"></AlcoholConsumption
      ></template>
    </ProfileItem>

    <!-- FITNESS -->
    <ProfileItem
      :label="t('matcher.description.fitness')"
      :content="fitnessOptions"
      :isContentTag="true"
    >
      <template #itemIcon
        ><Fitness :width="28" :height="28"></Fitness
      ></template>
    </ProfileItem>

    <div class="fixed bottom-20 left-0 w-full p-2 flex bg-coal-800">
      <CustomButton
        :label="t('actions.modify')"
        class="w-full"
        :base="true"
        :outline="false"
        @click="onModify()"
        ><template #iconStart> <Modify class="mr-2" /> </template
      ></CustomButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProfileStore } from '~/stores/profileStore'
import { computed } from 'vue'
import CustomButton from '../design/CustomButton.vue'
import Age from '../icons/Age.vue'
import RelationshipGoal from '../icons/RelationshipGoal.vue'
import ChildrenSituation from '../icons/ChildrenSituation.vue'
import Ethnicity from '../icons/Ethnicity.vue'
import Religion from '../icons/Religion.vue'
import SmokingSituation from '../icons/SmokingSituation.vue'
import AlcoholConsumption from '../icons/AlcoholConsumption.vue'
import Fitness from '../icons/Fitness.vue'
import Sex from '../icons/Sex.vue'
import Modify from '../icons/Modify.vue'
import ProfileItem from '../design/ProfileItem.vue'
import Pin from '../icons/Pin.vue'
import Balance from '../icons/Balance.vue'
import SexualOrientation from '../icons/SexualOrientation.vue'

const { t } = useI18n()
const profileStore = useProfileStore()

const emit = defineEmits(['on-modify'])

const minAge = computed(() => {
  return profileStore.matcher.minAge
})
const maxAge = computed(() => {
  return profileStore.matcher.maxAge
})
const distance = computed(() => {
  return profileStore.matcher.distance
})
const relationshipGoalOptions = computed(() => {
  return profileStore.matcher.relationshipGoal
    .split(',')
    .map((x) => t('matcher.enums.relationshipGoal.' + x))
})
const childrenSituationOptions = computed(() => {
  return profileStore.matcher.childrenSituation
    .split(',')
    .map((x) => t('matcher.enums.childrenSituation.' + x))
})
const alcoholConsumptionOptions = computed(() => {
  return profileStore.matcher.alcoholConsumption
    .split(',')
    .map((x) => t('matcher.enums.alcoholConsumption.' + x))
})
const smokingSituationOptions = computed(() => {
  return profileStore.matcher.smokingSituation
    .split(',')
    .map((x) => t('matcher.enums.smokingSituation.' + x))
})
const ethnicityOptions = computed(() => {
  return profileStore.matcher.ethnicity
    .split(',')
    .map((x) => t('matcher.enums.ethnicity.' + x))
})
const politicalViewOptions = computed(() => {
  return profileStore.matcher.politicalView
    .split(',')
    .map((x) => t('matcher.enums.politicalView.' + x))
})
const fitnessOptions = computed(() => {
  return profileStore.matcher.fitness
    .split(',')
    .map((x) => t('matcher.enums.fitness.' + x))
})
const religionOptions = computed(() => {
  return profileStore.matcher.religion
    .split(',')
    .map((x) => t('matcher.enums.religion.' + x))
})
const orientationOptions = computed(() => {
  return profileStore.matcher.orientation
    .split(',')
    .map((x) => t('matcher.enums.orientation.' + x))
})

function onModify() {
  emit('on-modify')
}
</script>
