<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 18 22"
    >
      <path d="M2 2C2 0.89543 2.89543 0 4 0V0V10H2V2Z" class="fill-current" />
      <path
        d="M16 2C16 0.89543 15.1046 0 14 0V0V10H16V2Z"
        class="fill-current"
      />
      <rect x="4" width="10" height="2" class="fill-current" />
      <path
        d="M16 10C17.1046 10 18 10.8954 18 12V20C18 21.1046 17.1046 22 16 22H2C0.895431 22 3.22133e-08 21.1046 0 20V12C1.28853e-07 10.8954 0.895431 10 2 10H16ZM9 12C7.89543 12 7 12.8954 7 14C7 14.6725 7.3328 15.2663 7.8418 15.6289L7 19H11L10.1572 15.6289C10.6666 15.2664 11 14.6728 11 14C11 12.8954 10.1046 12 9 12Z"
        class="fill-current"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 18,
  },
  height: {
    type: Number,
    default: 22,
  },
})
</script>
