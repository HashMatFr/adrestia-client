<template>
  <div
    :class="[
      'w-fit py-4 px-3 bg-coal-50 rounded lg:py-5',
      {
        'border-2 border-light border-solid': borderConfig === 'light',
      },
    ]"
  >
    <!-- Header -->
    <div class="h-min flex flex-row items-center justify-between">
      <slot class="w-fit" name="dropdownHeaderLeft"></slot>
      <Text :value="cardLabel" class="w-fit font-base card-label text-center" />
      <CustomButton class="w-fit" :base="false" @click="displayBody()">
        <template #iconEnd>
          <SelectChevron
            :width="24"
            :style="dropdownChevronStyle"
            class="dynamic-icon my-auto text-interaction"
          />
        </template>
      </CustomButton>
    </div>

    <!-- Body -->
    <div :style="dropdownBodyStyle" class="dynamic-height w-full">
      <slot name="dropdownBody"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import CustomButton from './CustomButton.vue'
import Text from './Text.vue'
import SelectChevron from '../icons/SelectChevron.vue'

const props = defineProps({
  dropdownBodyMaxHeight: {
    type: Number,
    required: false,
    default: 1000,
  },
  cardLabel: {
    type: String,
    required: true,
    default: '',
  },
  borderConfig: {
    type: String,
    default: 'light',
  },
  externalDropState: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const emit = defineEmits(['card-drop-state'])

const isDropped = ref(false)

const dropdownBodyStyle = computed(() => {
  let style = {
    maxHeight: ``,
  }
  if (props.dropdownBodyMaxHeight) {
    if (isDropped.value) {
      style.maxHeight = `${props.dropdownBodyMaxHeight}px`
    } else {
      style.maxHeight = `0px`
    }
  }
  return style
})
const dropdownChevronStyle = computed(() => {
  let style = {
    transform: '',
  }
  if (isDropped.value) {
    style.transform = 'rotate(-0.5turn)'
  } else {
    style.transform = 'rotate(0)'
  }
  return style
})

watch(
  () => props.externalDropState,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      isDropped.value = newValue
    }
  },
)

function displayBody() {
  isDropped.value = !isDropped.value
  emit('card-drop-state', isDropped.value)
}
</script>
<style scoped>
.card-label {
  font-size: 22px;
}
.dynamic-height {
  overflow-y: hidden;
  transition: max-height 0.6s ease-in-out;
  transition-delay: 0s;
}
.dynamic-icon {
  transition: transform 0.4s ease-in-out;
}
</style>
