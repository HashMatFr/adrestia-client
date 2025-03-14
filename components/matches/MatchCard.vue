<template>
  <div
    class="flex flex-row justify-between w-full bg-coal-900 rounded p-2 gap-3"
  >
    <div class="w-10 h-10 flex rounded-full bg-white"></div>
    <div class="flex flex-col gap-2 w-full my-auto">
      <Text :value="'PRENOM placeholder'"></Text>
      <Text v-if="lastMessageContent" :value="lastMessageContent"></Text>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, PropType } from 'vue'
import { Match } from '~/constants/types'
import Text from '../design/Text.vue'

const props = defineProps({
  match: {
    type: Object as PropType<Match>,
    required: true,
  },
})

const lastMessageContent = computed(() => {
  if (props.match.messages[0].content) {
    return props.match.messages[0].content
  } else {
    return ''
  }
})
</script>
