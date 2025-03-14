<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 15"
    >
      <rect x="6" y="6" width="10" height="3" class="fill-current" />
      <path
        d="M17 1C17 0.447715 17.4477 0 18 0V0C18.5523 0 19 0.447715 19 1V14C19 14.5523 18.5523 15 18 15V15C17.4477 15 17 14.5523 17 14V1Z"
        class="fill-current"
      />
      <path
        d="M0 4C0 3.44772 0.447715 3 1 3V3C1.55228 3 2 3.44772 2 4V11C2 11.5523 1.55228 12 1 12V12C0.447715 12 0 11.5523 0 11V4Z"
        class="fill-current"
      />
      <path
        d="M3 1C3 0.447715 3.44772 0 4 0V0C4.55228 0 5 0.447715 5 1V14C5 14.5523 4.55228 15 4 15V15C3.44772 15 3 14.5523 3 14V1Z"
        class="fill-current"
      />
      <path
        d="M20 4C20 3.44772 20.4477 3 21 3V3C21.5523 3 22 3.44772 22 4V11C22 11.5523 21.5523 12 21 12V12C20.4477 12 20 11.5523 20 11V4Z"
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
    default: 15,
  },
})
</script>
