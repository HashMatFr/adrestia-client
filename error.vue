<template>
  <div
    class="relative bg-white w-full h-full flex items-center justify-center lg:py-12"
  >
    <div
      class="flex items-center justify-center container bg-white shadow-specs rounded mt-9 mb-24 w-4/5"
    >
      <div v-if="error.statusCode === 404"></div>
      <div v-else></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const error = useError()
</script>
