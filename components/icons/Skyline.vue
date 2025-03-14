<template>
  <svg
    :width="width"
    :height="height"
    class="fill-current"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 4L3 6.5V22H0V6.5L1.5 4Z" />
    <rect x="3" y="14" width="1" height="8" />
    <path d="M4 10.6515C5.34716 8.31516 5.5 8.58809 7 10.6515V22H4V10.6515Z" />
    <rect x="7" y="17" width="2" height="5" />
    <rect x="12" y="10" width="3" height="12" />
    <rect x="9" y="13" width="3" height="9" />
    <path d="M15 2.97297L18 0V22H15V2.97297Z" />
    <rect x="18" y="19" width="1" height="3" />
    <path d="M19 10L22 11.5V22H19V10Z" />
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
