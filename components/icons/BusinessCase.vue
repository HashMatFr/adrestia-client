<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 23"
    >
      <path
        d="M0 6C0 4.89543 0.895431 4 2 4H20C21.1046 4 22 4.89543 22 6V10.614C22 11.4477 21.4829 12.1939 20.7022 12.4867L14 15V14C14 12.8954 13.1046 12 12 12H11H10C8.89543 12 8 12.8954 8 14V15L1.29775 12.4867C0.517145 12.1939 0 11.4477 0 10.614V6Z"
        class="fill-current"
      />
      <path
        d="M22 21C22 22.1046 21.1046 23 20 23H2C0.89543 23 0 22.1046 0 21V13L8 16V17C8 18.1046 8.89543 19 10 19H11H12C13.1046 19 14 18.1046 14 17V16L22 13V21Z"
        class="fill-current"
      />
      <rect x="9" y="13" width="4" height="5" rx="1" class="fill-current" />
      <path
        d="M15 4V3C15 1.89543 14.1046 1 13 1H9C7.89543 1 7 1.89543 7 3V4"
        class="fill-none stroke-current"
        stroke-width="2"
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
    default: 23,
  },
})
</script>
