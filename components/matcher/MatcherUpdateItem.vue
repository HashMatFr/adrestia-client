<template>
  <div class="w-full flex flex-row gap-5 items-center">
    <slot name="itemIcon"></slot>
    <div class="flex flex-col gap-2 pl-5 border-l border-primary">
      <Text :value="label" />
      <div class="flex flex-wrap gap-2">
        <div
          v-for="option in options"
          :class="[
            'flex px-3 py-1 rounded-full gap-2 items-center text-center',
            {
              'bg-main-500 border-2 border-main-500 text-contrast':
                shouldBeChecked(option.value),
              'border-2 border-main-500': !shouldBeChecked(option.value),
            },
          ]"
          @click="handleChangeEnumField(option.value)"
        >
          {{ option.text }}
          <Check v-if="shouldBeChecked(option.value)"></Check>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMatcherStore } from '~/stores/matcherStore'
import { SelectOption } from '~/constants/types'
import { PropType } from 'vue'
import Text from '../design/Text.vue'
import Check from '../icons/Check.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  enumName: {
    type: String,
    required: true,
  },
  options: {
    type: Object as PropType<Array<SelectOption>>,
    required: true,
  },
})
const matcherStore = useMatcherStore()

function shouldBeChecked(optionValue) {
  return matcherStore.newMatcher[props.enumName].includes(optionValue)
}

function handleChangeEnumField(enumValue) {
  let valueIndex = matcherStore.newMatcher[props.enumName].findIndex(
    (element) => element === enumValue,
  )
  if (valueIndex > -1) {
    matcherStore.newMatcher[props.enumName].splice(valueIndex, 1)
  } else {
    matcherStore.newMatcher[props.enumName].push(enumValue)
  }
}
</script>
