<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 8L22 12L17 16"
      class="stroke-current fill-none"
      stroke-width="2"
    />
    <path
      d="M9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13V11ZM9 13L21 13V11L9 11V13Z"
      class="fill-current"
    />
    <path
      d="M19.7782 4.22183C18.2398 2.68345 16.2798 1.63581 14.146 1.21137C12.0122 0.786929 9.80047 1.00477 7.79049 1.83733C5.7805 2.66989 4.06253 4.07979 2.85384 5.88873C1.64514 7.69767 1 9.82441 1 12C0.999999 14.1756 1.64514 16.3023 2.85383 18.1113C4.06253 19.9202 5.78049 21.3301 7.79048 22.1627C9.80047 22.9952 12.0122 23.2131 14.146 22.7886C16.2798 22.3642 18.2398 21.3166 19.7782 19.7782"
      class="stroke-current fill-none"
      stroke-width="2"
      stroke-linecap="round"
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
