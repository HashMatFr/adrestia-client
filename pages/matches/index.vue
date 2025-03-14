<template>
  <div class="w-full px-5 pt-20 flex flex-col gap-5 pb-24"></div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['profile-activation-guard'],
})
</script>
