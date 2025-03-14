<template>
  <div class="w-full flex flex-row items-center bg-coal-950">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['flex flex-col items-center h-16 w-full bg-coal-800']"
      @click="changeFocusedTab(index)"
    >
      <div class="flex flex-col w-full h-full items-center justify-center">
        <Text
          :fontSize="currentTab !== index ? 'base' : 'l'"
          :fontWeight="currentTab !== index ? 'normal' : 'semibold'"
          :value="tab.title"
        ></Text>
      </div>
      <div
        :class="[
          'flex bg-main-500 transition-all ease-in-out duration-300 h-2 rounded',
          { 'w-full': currentTab === index, 'w-0': currentTab !== index },
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { TabConfig } from '~/constants/types'

defineProps({
  currentTab: {
    type: Number,
    default: 0,
  },
  tabs: {
    type: Object as PropType<Array<TabConfig>>,
    required: true,
  },
})
const emit = defineEmits(['change-focused-tab'])

function changeFocusedTab(index: number) {
  emit('change-focused-tab', index)
}
</script>
