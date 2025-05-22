<template>
  <div class="w-full h-full flex flex-col gap-5">
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
    <div class="w-full flex flex-row justify-between">
      <Text :value="t('stats.joiningDate')" />
      <Text :value="formattedJoiningDate" class="text-main-500" />
    </div>

    <ProfileItem :label="t('stats.periodLabel')">
      <template #itemIcon
        ><Calendar :width="28" :height="28"></Calendar
      ></template>
    </ProfileItem>

    <form @submit.prevent="submitForm" class="w-full flex flex-col gap-5">
      <SelectValidationWrapper
        id="periodSelect"
        name="period"
        ref="periodRef"
        :options="periodOptions"
        :preselected-value="period"
        :on-change="handlePeriodChange"
        @is-field-valid="(event) => (form.period = event)"
      />
    </form>

    <div class="w-full flex flex-col gap-2 rounded border-primary border p-3">
      <div class="w-full flex flex-row justify-between">
        <Text :value="t('stats.receivedLikes')" />
        <Text
          :value="statsStore.receivedLikesLastPeriodCount"
          class="text-main-500"
        />
      </div>
      <div class="w-full flex flex-row justify-between">
        <Text :value="t('stats.givenLikes')" />
        <Text
          :value="statsStore.givenLikesLastPeriodCount"
          class="text-main-500"
        />
      </div>
      <div class="w-full flex flex-row justify-between">
        <Text :value="t('stats.receivedDislikes')" />
        <Text
          :value="statsStore.receivedDislikesLastPeriodCount"
          class="text-main-500"
        />
      </div>
      <div class="w-full flex flex-row justify-between">
        <Text :value="t('stats.givenDislikes')" />
        <Text
          :value="statsStore.givenDislikesLastPeriodCount"
          class="text-main-500"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStatsService } from '~/composables/useStatsService'
import { useStatsStore } from '~/stores/statsStore'
import CustomButton from '../design/CustomButton.vue'
import Text from '../design/Text.vue'
import SelectValidationWrapper from '../validation/SelectValidationWrapper.vue'
import { SelectOption } from '~/constants/types'
import ProfileItem from '../design/ProfileItem.vue'
import Calendar from '../icons/Calendar.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const statsStore = useStatsStore()
const statsService = useStatsService()

// Form setting
const form = ref({
  period: false,
})
const periodRef = ref(null)
const period = ref('YEAR')
const correspondingPeriodInDays = ref(365)

const periodOptions: SelectOption[] = [
  {
    value: 'YEAR',
    text: t('stats.periodEnum.YEAR'),
  },
  {
    value: 'SEMESTER',
    text: t('stats.periodEnum.SEMESTER'),
  },
  {
    value: 'TRIMESTER',
    text: t('stats.periodEnum.TRIMESTER'),
  },
  {
    value: 'MONTH',
    text: t('stats.periodEnum.MONTH'),
  },
  {
    value: 'HALFMONTH',
    text: t('stats.periodEnum.HALFMONTH'),
  },
  {
    value: 'WEEK',
    text: t('stats.periodEnum.WEEK'),
  },
  {
    value: 'DAY',
    text: t('stats.periodEnum.DAY'),
  },
]

const formattedJoiningDate = computed(() => {
  const jsDate = new Date(statsStore.joiningDate)
  const monthIndex = jsDate.getMonth() + 1
  const monthWithPrefix = monthIndex < 10 ? '0' + monthIndex : monthIndex
  return jsDate.getDate() + '/' + monthWithPrefix + '/' + jsDate.getFullYear()
})

function handlePeriodChange(name, value) {
  if (name === 'period') {
    period.value = value
    switch (period.value) {
      case 'YEAR':
        correspondingPeriodInDays.value = 365
        break
      case 'SEMESTER':
        correspondingPeriodInDays.value = 180
        break
      case 'TRIMESTER':
        correspondingPeriodInDays.value = 90
        break
      case 'MONTH':
        correspondingPeriodInDays.value = 30
        break
      case 'HALFMONTH':
        correspondingPeriodInDays.value = 14
        break
      case 'WEEK':
        correspondingPeriodInDays.value = 7
        break
      case 'DAY':
        correspondingPeriodInDays.value = 1
        break
      default:
        break
    }
    periodRef.value.validate()
    if (form.value.period) {
      statsService.getProfileStats(correspondingPeriodInDays.value)
    }
  }
}
</script>
