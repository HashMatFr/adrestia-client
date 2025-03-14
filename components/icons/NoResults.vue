<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 23 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11.011"
      cy="11"
      r="10"
      class="fill-none stroke-current"
      stroke-width="2"
    />
    <path
      d="M15.5791 13.6821C16.0872 14.1794 16.0959 14.9944 15.5985 15.5025V15.5025C15.1012 16.0105 14.2862 16.0192 13.7781 15.5219L6.41893 8.31791C5.91088 7.82058 5.90219 7.00556 6.39952 6.49752V6.49752C6.89685 5.98947 7.71187 5.98078 8.21992 6.47811L15.5791 13.6821Z"
      class="fill-current"
    />
    <rect
      x="7.41626"
      y="16.5"
      width="2.57457"
      height="12.8729"
      rx="1.28729"
      transform="rotate(-135.611 7.41626 16.5)"
      class="fill-current"
    />
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
    default: 23,
  },
})
</script>
