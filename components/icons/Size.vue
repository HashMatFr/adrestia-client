<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 7 21"
    >
      <rect
        x="0.5"
        y="0.5"
        width="6"
        height="20"
        class="stroke-current fill-none"
      />
      <rect x="1" y="2" width="3" height="1" class="fill-current" />
      <rect x="1" y="14" width="3" height="1" class="fill-current" />
      <rect x="1" y="18" width="3" height="1" class="fill-current" />
      <rect x="1" y="16" width="1" height="1" class="fill-current" />
      <rect x="1" y="12" width="1" height="1" class="fill-current" />
      <rect x="1" y="10" width="3" height="1" class="fill-current" />
      <rect x="1" y="8" width="1" height="1" class="fill-current" />
      <rect x="1" y="6" width="3" height="1" class="fill-current" />
      <rect x="1" y="4" width="1" height="1" class="fill-current" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 7,
  },
  height: {
    type: Number,
    default: 21,
  },
})
</script>
