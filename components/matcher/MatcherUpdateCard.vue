<template>
  <div class="w-full">
    <div class="flex flex-col gap-5 pb-40">
      <!-- SEX INTERESTED IN -->
      <MatcherUpdateItem
        :label="t('matcher.description.sexInterestedIn')"
        :options="sexInterestedInOptions"
        :enum-name="'sexInterestedIn'"
      >
        <template #itemIcon><Sex :width="28" :height="28"></Sex></template>
      </MatcherUpdateItem>

      <!-- ORIENTATION -->
      <MatcherUpdateItem
        :label="t('matcher.description.orientation')"
        :options="orientationOptions"
        :enum-name="'orientation'"
      >
        <template #itemIcon
          ><SexualOrientation :width="28" :height="28"></SexualOrientation
        ></template>
      </MatcherUpdateItem>

      <!-- AGE -->
      <div class="flex flex-row gap-5 items-center w-full">
        <Age :width="28" :height="28"></Age>
        <div class="flex flex-col gap-2 pl-5 border-l border-primary w-full">
          <HtmlText :value="t('matcher.description.age')" />
          <div class="flex flex-row gap-10 w-full">
            <Incrementor
              :name="'minAge'"
              :min-value="18"
              :max-value="80"
              :start-value="matcherStore.newMatcher.minAge"
              :condition-value="matcherStore.newMatcher.maxAge"
              :condition="'<'"
              @on-update="handleChangeIncrementorField"
            ></Incrementor>
            <Incrementor
              :name="'maxAge'"
              :min-value="18"
              :max-value="80"
              :start-value="matcherStore.newMatcher.maxAge"
              :condition-value="matcherStore.newMatcher.minAge"
              :condition="'>'"
              @on-update="handleChangeIncrementorField"
            ></Incrementor>
          </div>
        </div>
      </div>

      <!-- SIZE -->
      <div class="flex flex-row gap-5 items-center w-full">
        <Size :width="28" :height="28"></Size>
        <div class="flex flex-col gap-2 pl-5 border-l border-primary w-full">
          <HtmlText :value="t('matcher.description.size')" />
          <div class="flex flex-row gap-10 w-full">
            <Incrementor
              :name="'minSize'"
              :min-value="100"
              :max-value="250"
              :start-value="matcherStore.newMatcher.minSize"
              :condition-value="matcherStore.newMatcher.maxSize"
              :condition="'<'"
              @on-update="handleChangeIncrementorField"
            ></Incrementor>
            <Incrementor
              :name="'maxSize'"
              :min-value="100"
              :max-value="250"
              :start-value="matcherStore.newMatcher.maxSize"
              :condition-value="matcherStore.newMatcher.minSize"
              :condition="'>'"
              @on-update="handleChangeIncrementorField"
            ></Incrementor>
          </div>
        </div>
      </div>

      <!-- DISTANCE -->
      <div class="flex flex-row gap-5 items-center w-full">
        <Pin :width="28" :height="28"></Pin>
        <div class="flex flex-col gap-2 pl-5 border-l border-primary w-full">
          <HtmlText
            :value="
              t('matcher.description.distance', {
                maxDistance: matcherStore.newMatcher.distance,
              })
            "
          />
          <Incrementor
            :name="'distance'"
            :min-value="1"
            :max-value="200"
            :start-value="matcherStore.newMatcher.distance"
            @on-update="handleChangeIncrementorField"
          ></Incrementor>
        </div>
      </div>

      <!-- RELATIONSHIP GOAL -->
      <MatcherUpdateItem
        :label="t('matcher.description.relationshipGoal')"
        :options="relationshipGoalOptions"
        :enum-name="'relationshipGoal'"
      >
        <template #itemIcon
          ><RelationshipGoal :width="28" :height="28"></RelationshipGoal
        ></template>
      </MatcherUpdateItem>

      <!-- CHILDREN SITUATION -->
      <MatcherUpdateItem
        :label="t('matcher.description.childrenSituation')"
        :options="childrenSituationOptions"
        :enum-name="'childrenSituation'"
      >
        <template #itemIcon
          ><ChildrenSituation :width="28" :height="28"></ChildrenSituation
        ></template>
      </MatcherUpdateItem>

      <!-- ETHNICITY -->
      <MatcherUpdateItem
        :label="t('matcher.description.ethnicity')"
        :options="ethnicityOptions"
        :enum-name="'ethnicity'"
      >
        <template #itemIcon
          ><Ethnicity :width="28" :height="28"></Ethnicity
        ></template>
      </MatcherUpdateItem>

      <!-- POLITICAL VIEW -->
      <MatcherUpdateItem
        :label="t('matcher.description.politicalView')"
        :options="politicalViewOptions"
        :enum-name="'politicalView'"
      >
        <template #itemIcon
          ><Balance :width="28" :height="28"></Balance
        ></template>
      </MatcherUpdateItem>

      <!-- RELIGION -->
      <MatcherUpdateItem
        :label="t('matcher.description.religion')"
        :options="religionOptions"
        :enum-name="'religion'"
      >
        <template #itemIcon
          ><Religion :width="28" :height="28"></Religion
        ></template>
      </MatcherUpdateItem>

      <!-- SMOKING SITUATION -->
      <MatcherUpdateItem
        :label="t('matcher.description.smokingSituation')"
        :options="smokingSituationOptions"
        :enum-name="'smokingSituation'"
      >
        <template #itemIcon
          ><SmokingSituation :width="28" :height="28"></SmokingSituation
        ></template>
      </MatcherUpdateItem>

      <!-- ALCOHOL CONSUMPTION -->
      <MatcherUpdateItem
        :label="t('matcher.description.alcoholConsumption')"
        :options="alcoholConsumptionOptions"
        :enum-name="'alcoholConsumption'"
      >
        <template #itemIcon
          ><AlcoholConsumption :width="28" :height="28"></AlcoholConsumption
        ></template>
      </MatcherUpdateItem>

      <!-- FITNESS -->
      <MatcherUpdateItem
        :label="t('matcher.description.fitness')"
        :options="fitnessOptions"
        :enum-name="'fitness'"
      >
        <template #itemIcon
          ><Fitness :width="28" :height="28"></Fitness
        ></template>
      </MatcherUpdateItem>

      <!-- TEMPER -->
      <MatcherUpdateItem
        :label="t('matcher.description.temper')"
        :options="temperOptions"
        :enum-name="'temper'"
      >
        <template #itemIcon
          ><Temper :width="28" :height="28"></Temper
        ></template>
      </MatcherUpdateItem>

      <!-- ACTIONS -->
      <div
        class="flex flex-row fixed bottom-20 left-0 w-full p-2 gap-2 bg-coal-800"
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
          @click="updateMatcher"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { SelectOption, Matcher } from '~/constants/types'
import { useProfileStore } from '~/stores/profileStore'
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
import Temper from '../icons/Temper.vue'
import Incrementor from '../design/Incrementor.vue'
import { useProfileService } from '~/composables/useProfileService'
import { useMatcherStore } from '~/stores/matcherStore'
import HtmlText from '../design/HtmlText.vue'
import Pin from '../icons/Pin.vue'
import Balance from '../icons/Balance.vue'
import MatcherUpdateItem from './MatcherUpdateItem.vue'
import SexualOrientation from '../icons/SexualOrientation.vue'

const emit = defineEmits(['on-update', 'on-cancel'])

const { t } = useI18n()
const profileStore = useProfileStore()
const matcherStore = useMatcherStore()
const profileService = useProfileService()

matcherStore.newMatcher.minAge = profileStore.matcher.minAge
matcherStore.newMatcher.maxAge = profileStore.matcher.maxAge
matcherStore.newMatcher.minSize = profileStore.matcher.minSize
matcherStore.newMatcher.maxSize = profileStore.matcher.maxSize
matcherStore.newMatcher.distance = profileStore.matcher.distance

matcherStore.newMatcher.matcherId = profileStore.matcher.matcherId
matcherStore.newMatcher.sexInterestedIn =
  profileStore.matcher.sexInterestedIn.split(',')
matcherStore.newMatcher.orientation =
  profileStore.matcher.orientation.split(',')
matcherStore.newMatcher.relationshipGoal =
  profileStore.matcher.relationshipGoal.split(',')
matcherStore.newMatcher.childrenSituation =
  profileStore.matcher.childrenSituation.split(',')
matcherStore.newMatcher.ethnicity = profileStore.matcher.ethnicity.split(',')
matcherStore.newMatcher.politicalView =
  profileStore.matcher.politicalView.split(',')
matcherStore.newMatcher.religion = profileStore.matcher.religion.split(',')
matcherStore.newMatcher.smokingSituation =
  profileStore.matcher.smokingSituation.split(',')
matcherStore.newMatcher.alcoholConsumption =
  profileStore.matcher.alcoholConsumption.split(',')
matcherStore.newMatcher.fitness = profileStore.matcher.fitness.split(',')
matcherStore.newMatcher.temper = profileStore.matcher.temper.split(',')

const sexInterestedInOptions: SelectOption[] = [
  {
    value: 'M',
    text: t('matcher.enums.sexInterestedIn.M'),
  },
  { value: 'F', text: t('matcher.enums.sexInterestedIn.F') },
]
const orientationOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.orientation.NOT_AVAILABLE'),
  },
  { value: 'HETEROSEXUAL', text: t('matcher.enums.orientation.HETEROSEXUAL') },
  { value: 'HOMOSEXUAL', text: t('matcher.enums.orientation.HOMOSEXUAL') },
  { value: 'BISEXUAL', text: t('matcher.enums.orientation.BISEXUAL') },
]
const alcoholConsumptionOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.alcoholConsumption.NOT_AVAILABLE'),
  },
  { value: 'NEVER', text: t('matcher.enums.alcoholConsumption.NEVER') },
  { value: 'SOMETIMES', text: t('matcher.enums.alcoholConsumption.SOMETIMES') },
  { value: 'REGULARLY', text: t('matcher.enums.alcoholConsumption.REGULARLY') },
]
const childrenSituationOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.childrenSituation.NOT_AVAILABLE'),
  },
  {
    value: 'ZERO_DO_NOT_WANT',
    text: t('matcher.enums.childrenSituation.ZERO_DO_NOT_WANT'),
  },
  { value: 'ZERO_WANT', text: t('matcher.enums.childrenSituation.ZERO_WANT') },
  {
    value: 'HAVE_WANT_MORE',
    text: t('matcher.enums.childrenSituation.HAVE_WANT_MORE'),
  },
  {
    value: 'HAVE_DO_NOT_WANT_MORE',
    text: t('matcher.enums.childrenSituation.HAVE_DO_NOT_WANT_MORE'),
  },
]
const ethnicityOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.ethnicity.NOT_AVAILABLE'),
  },
  { value: 'OCEANIAN', text: t('matcher.enums.ethnicity.OCEANIAN') },
  { value: 'ASIAN', text: t('matcher.enums.ethnicity.ASIAN') },
  { value: 'EUROPEAN', text: t('matcher.enums.ethnicity.EUROPEAN') },
  {
    value: 'MIDDLE_EASTERN',
    text: t('matcher.enums.ethnicity.MIDDLE_EASTERN'),
  },
  { value: 'AFRICAN', text: t('matcher.enums.ethnicity.AFRICAN') },
  { value: 'LATIN', text: t('matcher.enums.ethnicity.LATIN') },
]
const fitnessOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.fitness.NOT_AVAILABLE'),
  },
  { value: 'SEDENTARY', text: t('matcher.enums.fitness.SEDENTARY') },
  { value: 'ATHLETE', text: t('matcher.enums.fitness.ATHLETE') },
  { value: 'ACTIVE', text: t('matcher.enums.fitness.ACTIVE') },
]
const politicalViewOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.politicalView.NOT_AVAILABLE'),
  },
  { value: 'LEFT', text: t('matcher.enums.politicalView.LEFT') },
  { value: 'MODERATE', text: t('matcher.enums.politicalView.MODERATE') },
  { value: 'RIGHT', text: t('matcher.enums.politicalView.RIGHT') },
  { value: 'LIBERTARIAN', text: t('matcher.enums.politicalView.LIBERTARIAN') },
  { value: 'APOLITICAL', text: t('matcher.enums.politicalView.APOLITICAL') },
  { value: 'OTHER', text: t('matcher.enums.politicalView.OTHER') },
]
const relationshipGoalOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.relationshipGoal.NOT_AVAILABLE'),
  },
  {
    value: 'NOT_SERIOUS',
    text: t('matcher.enums.relationshipGoal.NOT_SERIOUS'),
  },
  { value: 'SHORT_TERM', text: t('matcher.enums.relationshipGoal.SHORT_TERM') },
  { value: 'LONG_TERM', text: t('matcher.enums.relationshipGoal.LONG_TERM') },
  { value: 'MARRIAGE', text: t('matcher.enums.relationshipGoal.MARRIAGE') },
  { value: 'FRIENDSHIP', text: t('matcher.enums.relationshipGoal.FRIENDSHIP') },
]
const religionOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.religion.NOT_AVAILABLE'),
  },
  { value: 'CHRISTIAN', text: t('matcher.enums.religion.CHRISTIAN') },
  { value: 'MUSLIM', text: t('matcher.enums.religion.MUSLIM') },
  { value: 'JEWISH', text: t('matcher.enums.religion.JEWISH') },
  { value: 'HINDU', text: t('matcher.enums.religion.HINDU') },
  { value: 'SPIRITUAL', text: t('matcher.enums.religion.SPIRITUAL') },
  { value: 'ATHEIST', text: t('matcher.enums.religion.ATHEIST') },
  { value: 'AGNOSTIC', text: t('matcher.enums.religion.AGNOSTIC') },
  { value: 'OTHER', text: t('matcher.enums.religion.OTHER') },
]
const smokingSituationOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.smokingSituation.NOT_AVAILABLE'),
  },
  { value: 'NEVER', text: t('matcher.enums.smokingSituation.NEVER') },
  { value: 'SOMETIMES', text: t('matcher.enums.smokingSituation.SOMETIMES') },
  { value: 'REGULARLY', text: t('matcher.enums.smokingSituation.REGULARLY') },
]
const temperOptions: SelectOption[] = [
  {
    value: 'NOT_AVAILABLE',
    text: t('matcher.enums.temper.NOT_AVAILABLE'),
  },
  { value: 'INTROVERT', text: t('matcher.enums.temper.INTROVERT') },
  { value: 'EXTROVERT', text: t('matcher.enums.temper.EXTROVERT') },
  { value: 'MIDDLE', text: t('matcher.enums.temper.MIDDLE') },
]

function onCancel() {
  emit('on-cancel')
}

function handleChangeIncrementorField(values) {
  switch (values.name) {
    case 'minAge':
      matcherStore.newMatcher.minAge = values.value
      break
    case 'maxAge':
      matcherStore.newMatcher.maxAge = values.value
      break
    case 'minSize':
      matcherStore.newMatcher.minSize = values.value
      break
    case 'maxSize':
      matcherStore.newMatcher.maxSize = values.value
      break
    case 'distance':
      matcherStore.newMatcher.distance = values.value
      break
    default:
      break
  }
}

function updateMatcher() {
  const matcherDto: Matcher = {
    matcherId: profileStore.matcher.matcherId,
    minAge: matcherStore.newMatcher.minAge,
    maxAge: matcherStore.newMatcher.maxAge,
    minSize: matcherStore.newMatcher.minSize,
    maxSize: matcherStore.newMatcher.maxSize,
    distance: matcherStore.newMatcher.distance,
    sexInterestedIn: matcherStore.newMatcher.sexInterestedIn.toString(),
    orientation: matcherStore.newMatcher.orientation.toString(),
    relationshipGoal: matcherStore.newMatcher.relationshipGoal.toString(),
    childrenSituation: matcherStore.newMatcher.childrenSituation.toString(),
    ethnicity: matcherStore.newMatcher.ethnicity.toString(),
    politicalView: matcherStore.newMatcher.politicalView.toString(),
    religion: matcherStore.newMatcher.religion.toString(),
    smokingSituation: matcherStore.newMatcher.smokingSituation.toString(),
    alcoholConsumption: matcherStore.newMatcher.alcoholConsumption.toString(),
    fitness: matcherStore.newMatcher.fitness.toString(),
    temper: matcherStore.newMatcher.temper.toString(),
  }
  profileService.updateMatcher(matcherDto)
  emit('on-update', false)
}
</script>
