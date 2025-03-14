<template>
  <div>
    <svg
      class="fill-none stroke-current"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        d="M17.5 7.5C17.5 9.40752 16.5771 11.1609 15.2738 12.4475C13.9622 13.742 12.3315 14.5 11 14.5C9.66846 14.5 8.03777 13.742 6.72625 12.4475C5.42287 11.1609 4.5 9.40752 4.5 7.5C4.5 5.53022 5.11357 3.7791 6.21804 2.52753C7.31619 1.28313 8.92713 0.5 11 0.5C13.0729 0.5 14.6838 1.28313 15.782 2.52753C16.8864 3.7791 17.5 5.53022 17.5 7.5Z"
      />
      <path d="M0.797607 21.5L3.21846 16.5H18.7654L21.2004 21.5H0.797607Z" />
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
