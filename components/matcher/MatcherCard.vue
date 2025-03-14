<template>
  <div class="flex w-full flex-col gap-3">
    <Text
      :value="t('matcher.subtitle')"
      class="text-center"
      font-size="l"
    ></Text>
    <MatcherDisplayCard
      v-if="!isUpdateMode"
      @on-modify="setIsUpdateMode(true)"
    ></MatcherDisplayCard>
    <MatcherUpdateCard
      v-else
      @on-cancel="setIsUpdateMode(false)"
      @on-update="setIsUpdateMode(false)"
    ></MatcherUpdateCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MatcherDisplayCard from './MatcherDisplayCard.vue'
import MatcherUpdateCard from './MatcherUpdateCard.vue'
import Text from '../design/Text.vue'

const { t } = useI18n()
const isUpdateMode = ref(false)

function setIsUpdateMode(newState) {
  isUpdateMode.value = newState
}
</script>
