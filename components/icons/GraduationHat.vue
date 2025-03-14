<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 13"
    >
      <path d="M11 0L22 4L11 8L0 4L11 0Z" class="fill-current" />
      <path
        d="M3.5 6.5L11 9.18182L18.5 6.5L19 11.7273C15.8391 11.8219 14.082 12.0903 11 13C7.94772 12.0052 6.19219 11.7159 3 11.7273L3.5 6.5Z"
        class="fill-current"
      />
      <rect x="1" y="4" width="1" height="6" rx="0.5" class="fill-current" />
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
    default: 13,
  },
})
</script>
