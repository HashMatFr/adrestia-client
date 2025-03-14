<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 18.4348L7.5 14.4812L7.5 22.3884L0 18.4348Z"
      class="fill-current"
    />
    <path
      d="M0 2H18C20.2091 2 22 3.79086 22 6V14.4348C22 16.6439 20.2091 18.4348 18 18.4348H6"
      class="fill-none stroke-current"
      stroke-width="4"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 23,
  },
  width: {
    type: Number,
    default: 24,
  },
})
</script>
