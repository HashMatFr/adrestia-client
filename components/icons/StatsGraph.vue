<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
      <path d="M1.5 2L1.5 22" class="stroke-current fill-none" />
      <path
        d="M1.5 22.5L4 18L6.5 11L9.5 13L11.5 6.5L14 4.5L16 10H19.5L22 6.5"
        class="stroke-current fill-none"
      />
      <path
        d="M22 23C22.2761 23 22.5 22.7761 22.5 22.5C22.5 22.2239 22.2761 22 22 22V23ZM1 23H22V22H1V23Z"
        class="fill-current"
      />
      <path d="M1.5 0L3 3H0L1.5 0Z" class="fill-current" />
      <path d="M24 22.5L21 24V21L24 22.5Z" class="fill-current" />
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
