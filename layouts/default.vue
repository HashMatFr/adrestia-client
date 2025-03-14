<template>
  <div class="min-h-screen max-w-full bg-coal-800 text-primary">
    <slot />
    <Header></Header>
    <ActionsBar></ActionsBar>
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/layouts/Header.vue'
import ActionsBar from '~/components/layouts/ActionsBar.vue'
</script>
