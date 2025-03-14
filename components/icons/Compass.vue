<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <circle
        cx="11"
        cy="11"
        r="10.5"
        class="stroke-current fill-none"
        :stroke-width="2"
      />
      <circle
        cx="10.9999"
        cy="11"
        r="2"
        transform="rotate(45.0116 10.9999 11)"
        class="fill-current"
      />
      <path
        d="M17.3653 4.63734L13.8285 11.0006L11.0007 8.17159L17.3653 4.63734Z"
        class="fill-current"
      />
      <path
        d="M10.1771 13.7131L5.92187 16.076L8.28647 11.8217L10.1771 13.7131Z"
        class="stroke-current fill-none"
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
