<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 16 13"
    >
      <path
        d="M1 5.94444L6 11.5L11 5.94444L15 1.5"
        class="stroke-current fill-none"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 16,
  },
  height: {
    type: Number,
    default: 13,
  },
})
</script>
