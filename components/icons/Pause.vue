<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      class="fill-none stroke-current"
      stroke-width="2"
    />
    <rect x="9" y="6" width="2" height="12" rx="1" class="fill-current" />
    <rect x="13" y="6" width="2" height="12" rx="1" class="fill-current" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 24,
  },
  width: {
    type: Number,
    default: 24,
  },
})
</script>
