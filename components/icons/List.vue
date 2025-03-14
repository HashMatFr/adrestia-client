<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 20 22"
    >
      <rect
        x="1"
        y="3"
        width="18"
        height="18"
        class="fill-none stroke-current"
        stroke-width="2"
      />
      <rect x="4" y="10" width="3" height="3" class="fill-current" />
      <rect x="4" y="15" width="3" height="3" class="fill-current" />
      <rect x="9" y="11" width="7" height="2" class="fill-current" />
      <rect x="5" y="6" width="10" height="2" class="fill-current" />
      <rect x="9" y="16" width="7" height="2" class="fill-current" />
      <path
        d="M6 2C6 0.895431 6.89543 0 8 0H12C13.1046 0 14 0.895431 14 2V3H6V2Z"
        class="fill-current"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 20,
  },
  height: {
    type: Number,
    default: 22,
  },
})
</script>
