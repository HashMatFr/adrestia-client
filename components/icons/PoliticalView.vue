<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 21 22"
    >
      <path d="M4.75 6H6.25L7 21H4L4.75 6Z" class="fill-current" />
      <path d="M14.75 6H16.25L17 21H14L14.75 6Z" class="fill-current" />
      <path d="M9.75 6H11.25L12 21H9L9.75 6Z" class="fill-current" />
      <path d="M2 21H19V22H2V21Z" class="fill-current" />
      <rect x="14" y="5" width="3" height="1" class="fill-current" />
      <rect x="9" y="5" width="3" height="1" class="fill-current" />
      <path d="M10.5 0L19.5933 4.5H1.40673L10.5 0Z" class="fill-current" />
      <rect x="4" y="5" width="3" height="1" class="fill-current" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 21,
  },
  height: {
    type: Number,
    default: 22,
  },
})
</script>
