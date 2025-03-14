<template>
  <svg
    :width="width"
    :height="height"
    class="fill-current"
    viewBox="0 0 22 4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 2C0 0.895431 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V2C22 3.10457 21.1046 4 20 4H2C0.89543 4 0 3.10457 0 2V2Z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 4,
  },
  width: {
    type: Number,
    default: 22,
  },
})
</script>
