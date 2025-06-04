<template>
  <div class="flex flex-col gap-7 text-primary pb-40">
    <ProfileItem
      :label="t('detail.description.sex')"
      :content="sex"
      :is-content-tag="true"
    >
      <template #itemIcon><Sex :width="28" :height="28"></Sex></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.orientation')"
      :content="orientation"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><SexualOrientation :width="28" :height="28"></SexualOrientation
      ></template>
    </ProfileItem>

    <ProfileItem :label="t('detail.description.age')" :content="age">
      <template #itemIcon><Age :width="28" :height="28"></Age></template>
    </ProfileItem>

    <ProfileItem :label="t('detail.description.size')" :content="size">
      <template #itemIcon><Size :width="28" :height="28"></Size></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.relationshipGoal')"
      :content="relationshipGoal"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><RelationshipGoal :width="28" :height="28"></RelationshipGoal
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.childrenSituation')"
      :content="childrenSituation"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><ChildrenSituation :width="28" :height="28"></ChildrenSituation
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.ethnicity')"
      :content="ethnicity"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><Ethnicity :width="28" :height="28"></Ethnicity
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.politicalView')"
      :content="politicalView"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><Balance :width="28" :height="28"></Balance
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.religion')"
      :content="religion"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><Religion :width="28" :height="28"></Religion
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.smokingSituation')"
      :content="smokingSituation"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><SmokingSituation :width="28" :height="28"></SmokingSituation
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.alcoholConsumption')"
      :content="alcoholConsumption"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><AlcoholConsumption :width="28" :height="28"></AlcoholConsumption
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('detail.description.fitness')"
      :content="fitness"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><Fitness :width="28" :height="28"></Fitness
      ></template>
    </ProfileItem>

    <div
      class="flex flex-row fixed left-0 w-full p-2 gap-2 bg-coal-800 bottom-20"
    >
      <CustomButton
        class="w-full"
        :label="t('actions.back')"
        :base="true"
        :outline="false"
        :category="'light_mercury'"
        @click="navigateTo(localePath('/home'))"
      >
        <template #iconStart> <ArrowLeft class="mr-2" /> </template
      ></CustomButton>
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
import Sex from '../icons/Sex.vue'
import Age from '../icons/Age.vue'
import Size from '../icons/Size.vue'
import RelationshipGoal from '../icons/RelationshipGoal.vue'
import ChildrenSituation from '../icons/ChildrenSituation.vue'
import Ethnicity from '../icons/Ethnicity.vue'
import Religion from '../icons/Religion.vue'
import SmokingSituation from '../icons/SmokingSituation.vue'
import AlcoholConsumption from '../icons/AlcoholConsumption.vue'
import Fitness from '../icons/Fitness.vue'
import Modify from '../icons/Modify.vue'
import ProfileItem from '../design/ProfileItem.vue'
import Balance from '../icons/Balance.vue'
import SexualOrientation from '../icons/SexualOrientation.vue'

const { t } = useI18n()
const profileStore = useProfileStore()
const localePath = useLocalePath()
const emit = defineEmits(['on-modify', 'on-next'])

const detailEnumsTranslationPath = 'detail.enums.'

const age = computed(() => {
  return profileStore.detail.age.toString()
})
const size = computed(() => {
  return profileStore.detail.size.toString()
})
const relationshipGoal = computed(() => {
  return t(
    detailEnumsTranslationPath +
      'relationshipGoal.' +
      profileStore.detail.relationshipGoal,
  )
})
const childrenSituation = computed(() => {
  return t(
    detailEnumsTranslationPath +
      'childrenSituation.' +
      profileStore.detail.childrenSituation,
  )
})
const alcoholConsumption = computed(() => {
  return t(
    detailEnumsTranslationPath +
      'alcoholConsumption.' +
      profileStore.detail.alcoholConsumption,
  )
})
const smokingSituation = computed(() => {
  return t(
    detailEnumsTranslationPath +
      'smokingSituation.' +
      profileStore.detail.smokingSituation,
  )
})
const ethnicity = computed(() => {
  return t(
    detailEnumsTranslationPath + 'ethnicity.' + profileStore.detail.ethnicity,
  )
})
const politicalView = computed(() => {
  return t(
    detailEnumsTranslationPath +
      'politicalView.' +
      profileStore.detail.politicalView,
  )
})
const fitness = computed(() => {
  return t(
    detailEnumsTranslationPath + 'fitness.' + profileStore.detail.fitness,
  )
})
const religion = computed(() => {
  return t(
    detailEnumsTranslationPath + 'religion.' + profileStore.detail.religion,
  )
})
const sex = computed(() => {
  return t(detailEnumsTranslationPath + 'sex.' + profileStore.detail.sex)
})
const orientation = computed(() => {
  return t(
    detailEnumsTranslationPath +
      'orientation.' +
      profileStore.detail.orientation,
  )
})

function onModify() {
  emit('on-modify')
}

function onNext() {
  emit('on-next')
}
</script>
