<template>
  <div class="min-h-screen max-w-full bg-coal-800 text-primary">
    <slot />
    <Header></Header>
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/layouts/Header.vue'
</script>
