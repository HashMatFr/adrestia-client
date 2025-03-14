<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M14.978 11L17.8096 5.14794L20.6413 11H14.978Z"
        class="stroke-current fill-none"
      />
      <path
        d="M1.35881 11L4.19048 5.14794L7.02214 11H1.35881Z"
        class="stroke-current fill-none"
      />
      <path
        d="M9.42848 5H12.5713L13.619 21H8.38086L9.42848 5Z"
        class="fill-current"
      />
      <path d="M11 0L16.8972 2.25H5.10273L11 0Z" class="fill-current" />
      <rect x="8.38086" y="4" width="5.2381" height="1" class="fill-current" />
      <rect y="3" width="20.9524" height="1" class="fill-current" />
      <rect
        x="7.33325"
        y="21"
        width="7.33333"
        height="1"
        class="fill-current"
      />
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
