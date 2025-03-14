<template>
  <svg
    :width="width"
    :height="height"
    class="fill-current"
    viewBox="0 0 22 10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 3H22V6.75H21L20 5.5L19 7.375L18 6.75L17.5 5.5L17 6.75L16 8L15 6.75H14L13 5.5L12.5 6.75H7V3Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10ZM3.5 5C4.32843 5 5 4.32843 5 3.5C5 2.67157 4.32843 2 3.5 2C2.67157 2 2 2.67157 2 3.5C2 4.32843 2.67157 5 3.5 5Z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 10,
  },
  width: {
    type: Number,
    default: 22,
  },
})
</script>
