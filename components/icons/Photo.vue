<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M2 2H20V-2H2V2ZM20 2V20H24V2H20ZM20 20H2V24H20V20ZM2 20V2H-2V20H2ZM2 20H2H-2C-2 22.2091 -0.20914 24 2 24V20ZM20 20V24C22.2091 24 24 22.2091 24 20H20ZM20 2H24C24 -0.209138 22.2091 -2 20 -2V2ZM2 -2C-0.209138 -2 -2 -0.20914 -2 2H2V2V-2Z"
        class="fill-current"
        mask="url(#path-1-inside-1_39_11)"
      />
      <circle cx="6.5" cy="6.5" r="2.5" class="fill-current" />
      <path
        d="M1 15.8242C10.7808 12.2326 16.0513 10.5141 21 13.606V21H1V15.8242Z"
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
