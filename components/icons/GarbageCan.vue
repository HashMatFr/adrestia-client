<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 20 24"
    >
      <path
        d="M2.14527 6H17.8547C18.4346 6 18.8929 6.49158 18.8523 7.07L17.7996 22.07C17.7629 22.5938 17.3272 23 16.8021 23H3.1979C2.67278 23 2.23711 22.5938 2.20035 22.07L1.14772 7.07C1.10713 6.49158 1.56542 6 2.14527 6Z"
        class="fill-none stroke-current"
        stroke-width="2"
      />
      <path
        d="M0 1.5C0 0.671573 0.671573 0 1.5 0H18.5C19.3284 0 20 0.671573 20 1.5V1.5C20 2.32843 19.3284 3 18.5 3H1.5C0.671573 3 0 2.32843 0 1.5V1.5Z"
        class="fill-current"
      />
      <rect x="6" y="9" width="2" height="11" rx="1" class="fill-current" />
      <rect x="12" y="9" width="2" height="11" rx="1" class="fill-current" />
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
    default: 24,
  },
})
</script>
