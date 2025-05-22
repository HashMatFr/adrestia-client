<template>
  <div
    class="ml-3 flex w-max px-2 h-[28px] flex flex-col -skew-x-[30deg] bg-light_mercury text-contrast border-black"
  >
    <Text
      class="skew-x-[30deg] my-auto"
      font-size="s"
      :value="label"
      :upper="upper"
    ></Text>
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
