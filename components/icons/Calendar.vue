<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <rect
        x="0.5"
        y="1.5"
        width="21"
        height="20"
        rx="1.5"
        class="fill-none stroke-current"
      />
      <rect x="1" y="6" width="20" height="1" class="fill-current" />
      <rect x="3" width="1" height="3" class="fill-current" />
      <rect x="18" width="1" height="3" class="fill-current" />
      <rect x="15" width="1" height="3" class="fill-current" />
      <rect x="12" width="1" height="3" class="fill-current" />
      <rect x="9" width="1" height="3" class="fill-current" />
      <rect x="6" width="1" height="3" class="fill-current" />
      <rect x="4" y="9" width="2" height="2" class="fill-current" />
      <rect x="4" y="17" width="2" height="2" class="fill-current" />
      <rect x="4" y="13" width="2" height="2" class="fill-current" />
      <rect x="16" y="9" width="2" height="2" class="fill-current" />
      <rect x="16" y="17" width="2" height="2" class="fill-current" />
      <rect x="16" y="13" width="2" height="2" class="fill-current" />
      <rect x="12" y="9" width="2" height="2" class="fill-current" />
      <rect x="12" y="17" width="2" height="2" class="fill-current" />
      <rect x="12" y="13" width="2" height="2" class="fill-current" />
      <rect x="8" y="9" width="2" height="2" class="fill-current" />
      <rect x="8" y="17" width="2" height="2" class="fill-current" />
      <rect x="8" y="13" width="2" height="2" class="fill-current" />
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
