<template>
  <div>
    <svg
      class="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M11.8944 4.02492L19.6584 19.5528C19.9908 20.2177 19.5073 21 18.7639 21H3.23607C2.49269 21 2.00919 20.2177 2.34164 19.5528L10.1056 4.02492C10.4741 3.28787 11.5259 3.28787 11.8944 4.02492Z"
        class="fill-none stroke-current"
        stroke-width="2"
      />
      <rect x="10" y="9" width="2" height="7" rx="1" class="fill-current" />
      <rect x="10" y="17" width="2" height="2" rx="1" class="fill-current" />
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
