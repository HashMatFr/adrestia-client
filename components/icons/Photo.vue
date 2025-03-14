<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M2 0.5H20C20.8284 0.5 21.5 1.17157 21.5 2V20C21.5 20.8284 20.8284 21.5 20 21.5H2C1.17157 21.5 0.5 20.8284 0.5 20V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
        class="fill-none stroke-current"
      />
      <circle cx="6.5" cy="6.5" r="2.5" class="fill-current" />
      <path
        d="M1 15.8242C10.7808 12.2326 16.0513 10.5141 21 13.606V21H1V15.8242Z"
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
    default: 22,
  },
})
</script>
