<template>
  <div class="w-full flex flex-row gap-3 items-center">
    <div class="relative flex items-center justify-center">
      <svg class="transform -rotate-90 w-[60px] h-[60px]">
        <!-- Background Circle -->
        <circle
          :r="radius"
          :cx="radius + 2"
          :cy="radius + 2"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
          :class="[
            {
              'text-success-500': currentIndex === steps.length,
              'text-light_mercury': currentIndex !== steps.length,
            },
          ]"
        />
        <!-- Progress Circle -->
        <circle
          v-show="currentIndex !== steps.length"
          :r="radius"
          :cx="radius + 2"
          :cy="radius + 2"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="computeStrokeDashOffset"
          stroke-linecap="round"
          class="transition-all duration-500 flex items-center justify-center text-alert-500"
        />
      </svg>
      <Text
        font-weight="semibold"
        :value="String((currentIndex / steps.length) * 100) + '%'"
        :class="[
          'absolute flex items-center justify-center',
          {
            'text-success-500': currentIndex === steps.length,
            'text-alert-500': currentIndex !== steps.length,
          },
        ]"
      />
    </div>

    <Text :value="steps[currentIndex].stepLabel" class="text-primary" />

    <CustomButton
      v-if="currentIndex !== steps.length"
      :label="''"
      :base="true"
      :outline="false"
      :size="'small'"
      class="w-min"
      @click="goToRequiredPage"
    >
      <template #iconEnd>
        <ArrowLeft :height="18" class="rotate-180" /></template
    ></CustomButton>
  </div>
</template>
<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ProgressStep } from '~/constants/types'
import Text from '../design/Text.vue'
import CustomButton from '../design/CustomButton.vue'
import ArrowLeft from '../icons/ArrowLeft.vue'

const props = defineProps({
  // The prop index starts at 1 (human friendly)
  currentIndex: {
    type: Number,
    default: 1,
    required: true,
    validator: (value: number) => {
      return value > 0
    },
  },
  steps: {
    type: Object as PropType<Array<ProgressStep>>,
    validator: (steps: Array<ProgressStep>) => {
      const stepRequiredProperties = ['stepLabel', 'stepRequiredPage']
      return steps.every((step) =>
        stepRequiredProperties.every(
          (propertyRequired) => step[propertyRequired] !== null,
        ),
      )
    },
    required: true,
  },
})

const localePath = useLocalePath()

// Progress circle stroke
const radius = 28
const circumference = Math.PI * (radius * 2)
const computeStrokeDashOffset = computed(() => {
  let percentage = 100
  const stepsCount = props.steps.length

  if (stepsCount > 0) {
    percentage = (props.currentIndex / stepsCount) * 100
  }

  if (percentage < 0) {
    percentage = 0
  } else if (percentage > 100) {
    percentage = 100
  }
  return ((100 - percentage) / 100) * circumference
})

function goToRequiredPage() {
  return navigateTo(
    localePath(props.steps[props.currentIndex].stepRequiredPage),
  )
}
</script>
