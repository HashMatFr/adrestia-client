<template>
  <div class="w-fit flex flex-row gap-2 items-center">
    <div
      v-for="step in steps"
      :class="[
        'flex rounded transition-[width] transition-[height] ease-in-out duration-300',
        {
          'bg-accent-500 h-4 w-8': currentStep === step,
          'bg-accent-500 h-2 w-4': currentStep > step,
          'bg-light_mercury h-2 w-4': currentStep < step,
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
