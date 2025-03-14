<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path
        d="M10.6099 9.5L12 2.54951L13.3901 9.5H10.6099Z"
        class="stroke-current fill-none"
      />
      <path
        d="M13.3901 14.5L12 21.4505L10.6099 14.5H13.3901Z"
        class="stroke-current fill-none"
      />
      <path
        d="M9.5 13.3901L2.54951 12L9.5 10.6099V13.3901Z"
        class="stroke-current fill-none"
      />
      <path
        d="M14.5 10.6099L21.4505 12L14.5 13.3901V10.6099Z"
        class="stroke-current fill-none"
      />
      <path
        d="M17.5355 6.70711L15.4142 10.2426L13.9999 8.82843L17.5355 6.70711Z"
        class="fill-current"
      />
      <path
        d="M6.70711 6.70711L10.2426 8.82843L8.82843 10.2426L6.70711 6.70711Z"
        class="fill-current"
      />
      <path
        d="M6.7072 17.5355L8.82852 14L10.2427 15.4142L6.7072 17.5355Z"
        class="fill-current"
      />
      <path
        d="M17.5356 17.5355L14 15.4142L15.4142 14L17.5356 17.5355Z"
        class="fill-current"
      />
      <rect x="10" y="10" width="4" height="4" class="fill-current" />
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
