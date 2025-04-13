<template>
  <div>
    <svg
      class="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 20 19"
    >
      <path d="M9.79297 0L19.293 9.19239L0.292969 9.19239L9.79297 0Z" />
      <rect x="14.4587" y="3" width="2.06693" height="4" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5256 7H3.09058V19H6V13H10V19H16.5256V7Z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 20,
  },
  height: {
    type: Number,
    default: 19,
  },
})
</script>
