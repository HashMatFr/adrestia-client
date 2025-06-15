<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path d="M11 0L16 6H6L11 0Z" class="fill-current" />
      <path d="M16 11L19 12.1V13.2L16 12.1V11Z" class="fill-current" />
      <path d="M18 12.1H19V22H18V12.1Z" class="fill-current" />
      <path d="M19 15L22 15.7V16.4L19 15.7V15Z" class="fill-current" />
      <path d="M21 15.7H22V22H21V15.7Z" class="fill-current" />
      <path d="M3 15L0 15.7V16.4L3 15.7V15Z" class="fill-current" />
      <path d="M1 15.7H0V22H1V15.7Z" class="fill-current" />
      <path d="M6 11L3 12.1V13.2L6 12.1V11Z" class="fill-current" />
      <path d="M4 12.1H3V22H4V12.1Z" class="fill-current" />
      <path
        d="M16 22H13V19.5C13 18.241 12.4075 17.0552 11.4004 16.2998L11 16L10.5996 16.2998C9.59248 17.0552 9 18.241 9 19.5V22H6V6H16V22ZM11 7C9.89543 7 9 7.89543 9 9C9 10.1046 9.89543 11 11 11C12.1046 11 13 10.1046 13 9C13 7.89543 12.1046 7 11 7Z"
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
