<template>
  <div>
    <svg
      class="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 18 18"
    >
      <path d="M5 6.28572H7L8 20.9524H4L5 6.28572Z" />
      <path d="M15 6.28572H17L18 20.9524H14L15 6.28572Z" />
      <path d="M3 20.9524H19V22H3V20.9524Z" />
      <rect x="4" y="5.2381" width="4" height="1.04762" />
      <rect x="14" y="5.2381" width="4" height="1.04762" />
      <path d="M11 0L20.5263 4.71429H1.47372L11 0Z" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
})
</script>
