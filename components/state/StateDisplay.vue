<template>
  <div class="w-full h-full flex flex-col gap-5">
    <CustomButton
      :label="t('actions.back')"
      :base="false"
      :outline="true"
      :borderless="false"
      class="w-fit"
      @click="navigateTo(localePath('/settings'))"
    >
      <template #iconStart> <ArrowLeft class="mr-2" /> </template
    ></CustomButton>
    <div class="w-full flex flex-row justify-between">
      <Text :value="t('state.joiningDate')" />
      <Text :value="formattedPauseExpiryDate" class="text-main-500" />
    </div>

    <ProfileItem :label="t('state.periodLabel')">
      <template #itemIcon
        ><Calendar :width="28" :height="28"></Calendar
      ></template>
    </ProfileItem>

    <form
      v-if="stateStore.activationState"
      @submit.prevent="openConfirmationModal"
      class="w-full flex flex-col gap-5"
    >
      <SelectValidationWrapper
        id="periodSelect"
        name="period"
        ref="periodRef"
        :options="periodOptions"
        :preselected-value="period"
        :on-change="handlePeriodChange"
        @is-field-valid="(event) => (form.period = event)"
      />

      <CustomButton
        :label="t('actions.deactivate')"
        :base="true"
        :outline="false"
        :borderless="false"
        class="w-full"
        type="submit"
      />
    </form>

    <CustomButton
      v-else-if="
        !stateStore.activationState && stateStore.profileCanBeReactivated
      "
      :label="t('actions.reactivate')"
      :base="true"
      :outline="false"
      :borderless="false"
      :category="'success'"
      class="w-full"
      :disabled="!stateStore.profileCanBeReactivated"
      @click="reactivateProfile"
    />

    <!-- Pause Profile Confirmation Modal -->
    <Modal v-if="shouldDisplayConfirmationModal" @on-modal-close="closeModal">
      <template #modalHeader>
        <Text :value="t('state.pageTitle')"></Text>
      </template>
      <template #modalContent>
        <div class="flex flex-col gap-3 bg-coal-800 p-5 rounded-b">
          <Text
            :value="t('state.pauseConfirmation', { correspondingPeriodInDays })"
          ></Text>
          <CustomButton
            class="w-full"
            :label="t('actions.deactivate')"
            :base="true"
            :outline="false"
            :borderless="false"
            :category="'success'"
            @click="deactivateProfile"
            ><template #iconStart> <Pause class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            class="w-full"
            :label="t('actions.cancel')"
            :base="true"
            :outline="false"
            :borderless="false"
            @click="closeModal"
            ><template #iconStart> <ArrowLeft class="mr-2" /> </template
          ></CustomButton>
        </div> </template
    ></Modal>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import CustomButton from '../design/CustomButton.vue'
import Text from '../design/Text.vue'
import SelectValidationWrapper from '../validation/SelectValidationWrapper.vue'
import { SelectOption } from '~/constants/types'
import ProfileItem from '../design/ProfileItem.vue'
import Calendar from '../icons/Calendar.vue'
import { useStateStore } from '~/stores/stateStore'
import { useStateService } from '~/composables/useStateService'
import Pause from '../icons/Pause.vue'
import ArrowLeft from '../icons/ArrowLeft.vue'
import Modal from '../global/Modal.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const stateStore = useStateStore()
const stateService = useStateService()

// Form setting
const form = ref({
  period: false,
})
const periodRef = ref(null)
const period = ref('WEEK')
const correspondingPeriodInDays = ref(7)
const shouldDisplayConfirmationModal = ref(false)

const periodOptions: SelectOption[] = [
  {
    value: 'WEEK',
    text: t('state.periodEnum.YEAR'),
  },
  {
    value: 'TWO_WEEKS',
    text: t('state.periodEnum.YEAR'),
  },
  {
    value: 'THREE_WEEKS',
    text: t('state.periodEnum.YEAR'),
  },
  {
    value: 'MONTH',
    text: t('state.periodEnum.MONTH'),
  },
]

const formattedAvailableReactivationDate = computed(() => {
  const jsDate = new Date(stateStore.availableReactivationDate)
  const monthIndex = jsDate.getMonth() + 1
  const monthWithPrefix = monthIndex < 10 ? '0' + monthIndex : monthIndex
  return jsDate.getDate() + '/' + monthWithPrefix + '/' + jsDate.getFullYear()
})

const formattedPauseExpiryDate = computed(() => {
  const jsDate = new Date(stateStore.pauseExpiryDate)
  const monthIndex = jsDate.getMonth() + 1
  const monthWithPrefix = monthIndex < 10 ? '0' + monthIndex : monthIndex
  return jsDate.getDate() + '/' + monthWithPrefix + '/' + jsDate.getFullYear()
})

function handlePeriodChange(name, value) {
  if (name === 'period') {
    period.value = value
    switch (period.value) {
      case 'WEEK':
        correspondingPeriodInDays.value = 7
        break
      case 'TWO_WEEKS':
        correspondingPeriodInDays.value = 14
        break
      case 'THREE_WEEKS':
        correspondingPeriodInDays.value = 21
        break
      case 'MONTH':
        correspondingPeriodInDays.value = 30
        break
      default:
        break
    }
  }
}

function openConfirmationModal() {
  shouldDisplayConfirmationModal.value = true
}

function closeModal() {
  shouldDisplayConfirmationModal.value = false
}

function deactivateProfile() {
  closeModal()
  periodRef.value.validate()
  if (form.value.period) {
    stateService.deactivateProfile(correspondingPeriodInDays.value)
  }
}

function reactivateProfile() {
  if (stateStore.profileCanBeReactivated) {
    stateService.reactivateProfile()
  }
}
</script>
