<template>
  <div class="w-full px-5 pt-24 flex flex-col gap-5 pb-24">
    <div class="fixed top-16 left-0 w-full bg-coal-800">
      <Stepper class="mx-auto" :steps="3" :currentStep="stepIndex"></Stepper>
    </div>
    <RegisterTouStep
      v-if="stepIndex === 1"
      @next-step="nextStep"
    ></RegisterTouStep>
    <RegisterProfileStep
      v-else-if="stepIndex === 2"
      @previous-step="previousStep"
      @next-step="nextStep"
    ></RegisterProfileStep>
    <RegisterConfirmation v-else-if="stepIndex === 3"></RegisterConfirmation>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Stepper from '~/components/design/Stepper.vue'
import RegisterConfirmation from '~/components/register/RegisterConfirmation.vue'
import RegisterProfileStep from '~/components/register/RegisterProfileStep.vue'
import RegisterTouStep from '~/components/register/RegisterTouStep.vue'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'empty',
  middleware: [],
})

const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('register.pageTitle')
layoutStore.isRegisterFlow = true
layoutStore.shouldDisplayHomeButton = false
layoutStore.shouldDisplaySettingsButton = false
layoutStore.shouldDisplayLanguagesSwitcher = true

const stepIndex = ref(1)

function nextStep() {
  stepIndex.value++
}

function previousStep() {
  stepIndex.value--
}
</script>
