<template>
  <div
    class="fixed flex top-12 h-10 left-0 right-0 w-full flex-row gap-3 px-5 bg-alert-500 text-center justify-center"
  >
    <Warning class="my-auto"></Warning>
    <HtmlText class="flex h-fit my-auto" :value="value"></HtmlText>
  </div>
</template>

<script setup lang="ts">
import Warning from '../icons/Warning.vue'
import HtmlText from './HtmlText.vue'

defineProps({
  value: {
    type: String,
    default: 1,
  },
})
</script>
