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
        d="M18 7C18 10.866 14 14 11 14C8 14 4 10.866 4 7C4 3.13401 6.58172 0 11 0C15.4183 0 18 3.13401 18 7Z"
      />
      <rect x="5.78955" y="15.7143" width="10.4211" height="1.04762" />
      <path d="M2.90502 16.7619H19.078L22 22H0L2.90502 16.7619Z" />
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
