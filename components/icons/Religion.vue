<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 18 21"
    >
      <rect
        x="6.32227"
        y="3.93152"
        width="1"
        height="9"
        transform="rotate(-20 6.32227 3.93152)"
        class="fill-current"
      />
      <rect
        x="4.18726"
        y="6.83698"
        width="7"
        height="1"
        transform="rotate(-20 4.18726 6.83698)"
        class="fill-current"
      />
      <rect
        x="1.58055"
        y="4.06107"
        width="10"
        height="14"
        transform="rotate(-20 1.58055 4.06107)"
        class="stroke-current fill-none"
      />
      <path
        d="M0.68404 5.98363L0.939693 3.76223L6.05896 17.8273L5.81434 20.079L0.68404 5.98363Z"
        class="fill-current"
      />
      <path
        d="M6.11329 19.4382L5.77127 18.4985L15.8175 14.8419L15.6897 15.9526L6.11329 19.4382Z"
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
    default: 18,
  },
})
</script>
