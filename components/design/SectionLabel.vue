<template>
  <div
    class="flex w-max px-2 h-7 flex flex-col rounded-tr rounded-tl bg-light_mercury text-contrast border-black"
  >
    <Text class="my-auto" font-size="s" :value="label" :upper="upper"></Text>
  </div>
</template>

<script setup lang="ts">
import Text from './Text.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  upper: {
    type: Boolean,
    default: true,
  },
})
</script>
