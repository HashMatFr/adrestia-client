<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M4 1H18C19.6569 1 21 2.34315 21 4V18C21 19.6569 19.6569 21 18 21H4C2.34315 21 1 19.6569 1 18V4C1 2.34315 2.34315 1 4 1Z"
        class="fill-none stroke-current"
        stroke-width="2"
      />
      <rect x="5" y="4" width="10" height="2" class="fill-current" />
      <rect x="13" y="16" width="5" height="2" class="fill-current" />
      <rect x="8" y="12" width="10" height="2" class="fill-current" />
      <rect x="5" y="8" width="5" height="2" class="fill-current" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 22,
  },
  height: {
    type: Number,
    default: 22,
  },
})
</script>
