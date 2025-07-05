<template>
  <div
    class="flex min-h-10 w-full flex-row gap-3 px-5 bg-alert-50 text-alert-500 items-center justify-center"
  >
    <Warning class="my-auto min-w-max"></Warning>
    <HtmlText :value="value"></HtmlText>
    <div class="min-w-max" @click="closeAnnouncement">
      <Cross></Cross>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cross from '../icons/Cross.vue'
import Warning from '../icons/Warning.vue'
import HtmlText from './HtmlText.vue'

defineProps({
  value: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['close-announcement'])

function closeAnnouncement() {
  emit('close-announcement')
}
</script>
