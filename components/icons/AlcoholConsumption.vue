<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 23"
    >
      <line x1="0.5" x2="0.5" y2="22" class="stroke-current fill-none" />
      <line x1="14.5" x2="14.5" y2="22" class="stroke-current fill-none" />
      <line
        x1="14.9977"
        y1="21.5112"
        x2="-0.000371708"
        y2="21.5"
        class="stroke-current fill-none"
      />
      <path
        d="M14.998 18.0112V4.01117H17.998C19.6549 4.01117 20.998 5.35432 20.998 7.01117V15.0112C20.998 16.668 19.6549 18.0112 17.998 18.0112H14.998Z"
        class="stroke-current fill-none"
        stroke-width="2"
      />
      <rect x="3" y="7" width="1" height="12" class="fill-current" />
      <rect x="11" y="7" width="1" height="12" class="fill-current" />
      <rect x="7" y="7" width="1" height="12" class="fill-current" />
      <path
        d="M0.452904 3.45128C7.41277 4.87326 9.30236 1.60593 14.7325 1.77133"
        class="stroke-current fill-none"
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
