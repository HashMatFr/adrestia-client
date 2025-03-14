<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 21 13"
    >
      <rect y="2" width="6" height="1" class="fill-current" />
      <circle cx="10.5" cy="2.5" r="2.5" class="fill-current" />
      <path d="M8 2.5L5.75 3.79904V1.20096L8 2.5Z" class="fill-current" />
      <rect
        x="21"
        y="3"
        width="6"
        height="1"
        transform="rotate(180 21 3)"
        class="fill-current"
      />
      <path d="M13 2.5L15.25 1.20096V3.79904L13 2.5Z" class="fill-current" />
      <rect
        x="8"
        y="11"
        width="6"
        height="1"
        transform="rotate(180 8 11)"
        class="fill-current"
      />
      <circle cx="10.5" cy="10.5" r="2" class="stroke-current fill-none" />
      <path d="M0 10.5L2.25 9.20096V11.799L0 10.5Z" class="fill-current" />
      <rect x="13" y="10" width="6" height="1" class="fill-current" />
      <path d="M21 10.5L18.75 11.799V9.20096L21 10.5Z" class="fill-current" />
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
    default: 13,
  },
})
</script>
