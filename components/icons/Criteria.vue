<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M4 1H18C19.6569 1 21 2.34315 21 4V18C21 19.6569 19.6569 21 18 21H4C2.34315 21 1 19.6569 1 18V4C1 2.34315 2.34315 1 4 1Z"
        class="fill-none stroke-current"
        stroke-width="2"
      />
      <path
        d="M13 6C13 4.89543 13.8954 4 15 4V4C16.1046 4 17 4.89543 17 6V6C17 7.10457 16.1046 8 15 8V8C13.8954 8 13 7.10457 13 6V6Z"
        class="fill-current"
      />
      <rect x="4" y="5" width="14" height="2" class="fill-current" />
      <path
        d="M10 16C10 14.8954 10.8954 14 12 14V14C13.1046 14 14 14.8954 14 16V16C14 17.1046 13.1046 18 12 18V18C10.8954 18 10 17.1046 10 16V16Z"
        class="fill-current"
      />
      <rect x="4" y="15" width="14" height="2" class="fill-current" />
      <path
        d="M5 11C5 9.89543 5.89543 9 7 9V9C8.10457 9 9 9.89543 9 11V11C9 12.1046 8.10457 13 7 13V13C5.89543 13 5 12.1046 5 11V11Z"
        class="fill-current"
      />
      <rect x="4" y="10" width="14" height="2" class="fill-current" />
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
