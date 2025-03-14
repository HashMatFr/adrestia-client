<template>
  <div class="flex flex-row gap-2 items-center w-fit">
    <div
      class="bg-main-500 rounded-full h-8 w-8 items-center justify-center flex"
      @click="substract"
    >
      <Minus :width="14" class="text-contrast flex my-auto mx-auto" />
    </div>
    <Text :value="startValue.toString()"></Text>
    <div
      class="bg-main-500 rounded-full h-8 w-8 items-center justify-center flex"
      @click="add"
    >
      <Plus :width="14" class="text-contrast flex my-auto mx-auto" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Text from './Text.vue'
import Minus from '../icons/Minus.vue'
import Plus from '../icons/Plus.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  minValue: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 100,
  },
  startValue: {
    type: Number,
    default: 0,
  },
  conditionValue: {
    type: Number,
    default: null,
  },
  condition: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['on-update'])

const currentValue = ref(18)
currentValue.value = props.startValue

function add() {
  if (
    currentValue.value + 1 <= props.maxValue &&
    checkCondition(currentValue.value + 1)
  ) {
    currentValue.value = currentValue.value + 1
    emit('on-update', { name: props.name, value: currentValue.value })
  }
}
function substract() {
  if (
    currentValue.value - 1 >= props.minValue &&
    checkCondition(currentValue.value - 1)
  ) {
    currentValue.value = currentValue.value - 1
    emit('on-update', { name: props.name, value: currentValue.value })
  }
}
function checkCondition(valueToCheck) {
  if (props.conditionValue && props.condition === '<') {
    return valueToCheck < props.conditionValue
  } else if (props.conditionValue && props.condition === '>')
    return valueToCheck > props.conditionValue
  else {
    return true
  }
}
</script>
