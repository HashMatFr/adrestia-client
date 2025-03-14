<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 21"
    >
      <rect
        x="0.5"
        y="14.5"
        width="21"
        height="6"
        class="stroke-current fill-none"
      />
      <rect
        x="0.5"
        y="-0.5"
        width="17"
        height="6"
        transform="matrix(1 0 0 -1 2 14)"
        class="stroke-current fill-none"
      />
      <rect x="7" y="3" width="1" height="5" class="fill-current" />
      <rect x="14" y="3" width="1" height="5" class="fill-current" />
      <path
        d="M8.34759 2C9.00007 3 8.8909 4 7.69549 4C6.50009 4 5.73778 3 6.39043 2C7.04291 1 6.39051 0 6.39051 0C7.11109 0 7.69511 1 8.34759 2Z"
        class="fill-current"
      />
      <path
        d="M15.1967 2C15.8492 3 15.74 4 14.5446 4C13.3492 4 12.5869 3 13.2395 2C13.892 1 13.2396 0 13.2396 0C13.9602 0 14.5442 1 15.1967 2Z"
        class="fill-current"
      />
      <path
        d="M3 9H19V11L17.1176 10.3333L16.0961 9.97155C15.5295 9.77088 14.925 9.70048 14.3274 9.7656L3 11V9Z"
        class="fill-current"
      />
      <path
        d="M1 15H21V17L6.70293 15.7291C6.2379 15.6878 5.76922 15.7282 5.31812 15.8485L1 17V15Z"
        class="fill-current"
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
    default: 21,
  },
})
</script>
