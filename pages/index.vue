<template>
  <div class="relative min-h-screen w-full">
    <BaseLoader class="page__loader" />
  </div>
</template>

<script setup lang="ts">
import { authService } from '~/authentication/authService'
import BaseLoader from '../components/global/BaseLoader.vue'

definePageMeta({
  layout: 'empty',
})
const localePath = useLocalePath()

authService.trySilentLogin()
navigateTo(localePath('/home'))
</script>
<style scoped>
.page__loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
