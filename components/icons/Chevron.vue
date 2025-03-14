<template>
  <svg
    :width="width"
    :height="height"
    class="fill-current"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
    />
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
