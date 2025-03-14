<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.1811 11.7894C22.6063 9.09241 22.6063 4.71973 20.1811 2.02274C17.756 -0.674247 13.8241 -0.674246 11.399 2.02274L11 2.46652L10.6009 2.02276C8.17583 -0.67423 4.24395 -0.674231 1.81883 2.02276C-0.606279 4.71974 -0.606278 9.09242 1.81884 11.7894L2.21787 12.2332L2.21773 12.2333L10.9728 21.9699C10.9737 21.9709 10.9747 21.9719 10.9757 21.9728L11.0001 22L19.7552 12.2635C19.7561 12.2624 19.757 12.2613 19.7579 12.2601L20.1811 11.7894Z"
        class="fill-current"
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
