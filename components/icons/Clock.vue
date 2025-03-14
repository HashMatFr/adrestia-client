<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      r="10"
      class="fill-none stroke-current"
      stroke-width="2"
    />
    <circle cx="11" cy="11" r="1" class="fill-current" />
    <path
      d="M14 6L11.0001 10.8296"
      class="fill-none stroke-current"
      stroke-linecap="round"
    />
    <path
      d="M10.9999 11L14 14.5"
      class="fill-none stroke-current"
      stroke-linecap="round"
    />
    <path
      d="M3 11H5.00003"
      class="fill-none stroke-current"
      stroke-linecap="round"
    />
    <path
      d="M11 3V5.00003"
      class="fill-none stroke-current"
      stroke-linecap="round"
    />
    <path
      d="M11 17V19"
      class="fill-none stroke-current"
      stroke-linecap="round"
    />
    <path
      d="M17 11H19"
      class="fill-none stroke-current"
      stroke-linecap="round"
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
