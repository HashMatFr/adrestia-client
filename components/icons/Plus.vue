<template>
  <svg
    :width="width"
    :height="height"
    class="fill-current"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 11C0 9.89543 0.895431 9 2 9H20C21.1046 9 22 9.89543 22 11V11C22 12.1046 21.1046 13 20 13H2C0.89543 13 0 12.1046 0 11V11Z"
    />
    <path
      d="M9 2C9 0.89543 9.89543 0 11 0V0C12.1046 0 13 0.895431 13 2V20C13 21.1046 12.1046 22 11 22V22C9.89543 22 9 21.1046 9 20V2Z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 22,
  },
  width: {
    type: Number,
    default: 22,
  },
})
</script>
