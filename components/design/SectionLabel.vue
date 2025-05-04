<template>
  <div class="w-max flex flex-col gap-1">
    <Text font-size="l" :value="label"></Text>
    <div class="w-20 h-1 bg-main-500 rounded"></div>
  </div>
</template>

<script setup lang="ts">
import Text from './Text.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
