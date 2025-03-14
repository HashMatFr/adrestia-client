<template>
  <div>
    <svg
      class="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 80 80"
    >
      <path d="M34.4 25H45.6L48 76H32L34.4 25Z" class="fill-current" />
      <path d="M25.6 10H28.4L29 16H25L25.6 10Z" class="fill-current" />
      <path
        d="M30 23C30 21.8954 30.8954 21 32 21H48C49.1046 21 50 21.8954 50 23C50 24.1046 49.1046 25 48 25H32C30.8954 25 30 24.1046 30 23Z"
        class="fill-current"
      />
      <path d="M25 76H55V80H25V76Z" class="fill-current" />
      <path
        d="M74 48.3738C74 52.9896 68.8852 54.3435 66 59C61.8033 54.3435 58 53.706 58 49.0902C58 44.4743 62.1967 42.2846 66 45.9859C70.3279 42.5234 74 43.758 74 48.3738Z"
        class="fill-current"
      />
      <path
        d="M22 48.3738C22 52.9896 16.8852 54.3435 14 59C9.80328 54.3435 6 53.706 6 49.0902C6 44.4743 10.1967 42.2846 14 45.9859C18.3279 42.5234 22 43.758 22 48.3738Z"
        class="fill-current"
      />
      <path d="M0 17H80V21H0V17Z" class="fill-current" />
      <rect x="24" y="16" width="6" height="1" class="fill-current" />
      <path d="M38.6 10H41.4L42 16H38L38.6 10Z" class="fill-current" />
      <rect x="37" y="16" width="6" height="1" class="fill-current" />
      <path d="M51.6 10H54.4L55 16H51L51.6 10Z" class="fill-current" />
      <rect x="50" y="16" width="6" height="1" class="fill-current" />
      <rect x="25" y="9" width="4" height="1" class="fill-current" />
      <rect x="51" y="9" width="4" height="1" class="fill-current" />
      <rect x="38" y="9" width="4" height="1" class="fill-current" />
      <path d="M40 0L65.1147 9H14.8853L40 0Z" class="fill-current" />
      <rect x="52" y="60" width="28" height="2" class="fill-current" />
      <rect y="60" width="28" height="2" class="fill-current" />
      <rect x="78" y="55" width="2" height="5" class="fill-current" />
      <rect y="55" width="2" height="5" class="fill-current" />
      <rect x="26" y="55" width="2" height="5" class="fill-current" />
      <rect x="52" y="55" width="2" height="5" class="fill-current" />
      <rect x="64" y="21" width="4" height="1" class="fill-current" />
      <rect x="12" y="21" width="4" height="1" class="fill-current" />
      <line
        x1="0.527027"
        y1="55.8378"
        x2="12.527"
        y2="20.8378"
        class="stroke-current fill-none"
      />
      <line
        x1="27.527"
        y1="56.1622"
        x2="15.527"
        y2="21.1622"
        class="stroke-current fill-none"
      />
      <line
        x1="52.527"
        y1="55.8378"
        x2="64.527"
        y2="20.8378"
        class="stroke-current fill-none"
      />
      <line
        x1="79.527"
        y1="56.1622"
        x2="67.527"
        y2="21.1622"
        class="stroke-current fill-none"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 80,
  },
  height: {
    type: Number,
    default: 80,
  },
})
</script>
