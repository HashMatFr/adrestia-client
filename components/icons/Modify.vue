<template>
  <svg
    :width="width"
    :height="height"
    class="fill-current"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="11.6672"
      y="3.8891"
      width="6"
      height="12.375"
      transform="rotate(45 11.6672 3.8891)"
    />
    <path
      d="M2.91699 12.6395L7.15963 16.8822L2.1215 17.6777L2.91699 12.6395Z"
    />
    <path
      d="M14.1422 1.41421C14.9232 0.633165 16.1896 0.633165 16.9706 1.41421L18.3848 2.82843C19.1659 3.60948 19.1659 4.87581 18.3848 5.65685L16.8822 7.15946L12.6396 2.91682L14.1422 1.41421Z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 24,
  },
  width: {
    type: Number,
    default: 24,
  },
})
</script>
