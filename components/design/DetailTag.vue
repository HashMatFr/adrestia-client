<template>
  <div
    :class="[
      'flex px-3 py-1 rounded-full gap-2',
      {
        'border-2 border-main-500': !shouldBeHighlighted,
        'bg-main-500 border-2 border-main-500 text-contrast':
          shouldBeHighlighted,
      },
    ]"
  >
    <slot name="tagIcon"></slot>
    <Text :value="value" />
  </div>
</template>

<script setup lang="ts">
import Text from './Text.vue'

defineProps({
  value: {
    type: String,
    required: true,
  },
  shouldBeHighlighted: {
    type: Boolean,
    required: true,
  },
})
</script>
