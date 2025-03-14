<template>
  <div>
    <svg
      class="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M0 0L22 11L0 22L4.62382 11.8276C4.86284 11.3018 4.86284 10.6982 4.62382 10.1724L0 0Z"
      />
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
