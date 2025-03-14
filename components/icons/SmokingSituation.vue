<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 21 16"
    >
      <rect y="12.0845" width="16.8741" height="3.11111" class="fill-current" />
      <rect
        x="17.6204"
        y="12.0843"
        width="1.65879"
        height="3.11111"
        class="fill-current"
      />
      <path
        d="M17.5065 10.7749C17.5065 6.64001 13.2657 7.41776 15.101 1.44153"
        stroke="white"
      />
      <path
        d="M19.8476 10.3992C19.8476 6.26431 15.6068 7.04206 17.4421 1.06582"
        stroke="white"
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
    default: 16,
  },
})
</script>
