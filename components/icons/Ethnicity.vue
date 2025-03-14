<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 21 19"
    >
      <path
        d="M20.5 9.5C20.5 14.4247 16.0711 18.5 10.5 18.5C4.92889 18.5 0.5 14.4247 0.5 9.5C0.5 4.57534 4.92889 0.5 10.5 0.5C16.0711 0.5 20.5 4.57534 20.5 9.5Z"
        class="stroke-current fill-none"
      />
      <line
        x1="10.5"
        y1="1"
        x2="10.5"
        y2="18"
        class="stroke-current fill-none"
      />
      <path
        d="M11.0003 1C20.2702 7.26738 20.3962 10.9769 11 18"
        class="stroke-current fill-none"
      />
      <path
        d="M10 1C0.70099 7.82459 0.632406 11.5455 10 18"
        class="stroke-current fill-none"
      />
      <path
        d="M11 1C15.0319 7.74184 14.968 11.4573 11 18"
        class="stroke-current fill-none"
      />
      <path
        d="M10 1C6.04318 7.54596 5.95705 11.264 10 18"
        class="stroke-current fill-none"
      />
      <line y1="9.5" x2="21" y2="9.5" class="stroke-current fill-none" />
      <path
        d="M2 14.5C8.62601 13.295 12.3675 13.3101 19 14.5"
        class="stroke-current fill-none"
      />
      <path
        d="M2 4.5C8.53158 5.96753 12.4594 5.98565 19 4.5"
        class="stroke-current fill-none"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 21,
  },
  height: {
    type: Number,
    default: 19,
  },
})
</script>
