<template>
  <div class="w-fit flex flex-row gap-2 items-center">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="[
        'flex rounded transition-all ease-in-out duration-300',
        {
          'bg-accent-500 h-4 w-8': currentStep === index + 1,
          'bg-accent-200 h-3 w-6': currentStep !== index + 1,
        },
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  currentStep: {
    type: Number,
    default: 1,
  },
  steps: {
    type: Number,
    required: true,
  },
})
</script>
