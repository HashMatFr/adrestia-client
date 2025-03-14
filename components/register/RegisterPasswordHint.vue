<template>
  <div class="flex flex-row gap-1 items-center">
    <Check v-if="check" class="flex text-success-500"></Check>
    <Cross v-else class="flex text-alert-500"></Cross>
    <Text :value="rule" class="text-secondary" />
  </div>
</template>
<script setup lang="ts">
import Text from '../design/Text.vue'
import Check from '../icons/Check.vue'
import Cross from '../icons/Cross.vue'

defineProps({
  check: {
    type: Boolean,
    required: true,
  },
  rule: {
    type: String,
    required: true,
  },
})
</script>
