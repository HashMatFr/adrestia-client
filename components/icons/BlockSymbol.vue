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
        r="10"
        class="fill-none stroke-current"
        stroke-width="2"
      />
      <rect
        x="4.75928"
        y="19.2029"
        width="2.57457"
        height="20.1275"
        transform="rotate(-135.611 4.75928 19.2029)"
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
    default: 22,
  },
})
</script>
