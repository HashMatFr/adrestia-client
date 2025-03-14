<template>
  <div class="relative flex flex-col gap-1 w-full">
    <div
      ref="listBoxTrigger"
      class="flex flex-row justify-between rounded border-2 border-main-500 p-2 bg-coal-900"
      @click="handleListBox"
    >
      <Text :value="currentText"></Text>
      <Chevron
        :class="[
          {
            '-rotate-90': shouldDisplayOptions,
            'rotate-90': !shouldDisplayOptions,
          },
        ]"
      />
    </div>
    <div
      ref="listbox"
      v-if="shouldDisplayOptions"
      class="absolute flex flex-col gap-0 border-2 border-main-500 bg-coal-900 z-10 top-12 left-0 w-full max-h-44 rounded overflow-y-auto"
    >
      <div
        v-for="option in options"
        :key="option.value"
        :class="[
          'w-full p-1 text-left',
          {
            'bg-silver-500 text-primary': option.value === currentValue,
            'bg-silver-50 text-secondary': option.value !== currentValue,
          },
        ]"
        @click="handleClick(option.value, option.text)"
      >
        <Text :value="option.text"></Text>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, PropType, computed } from 'vue'
import Text from './Text.vue'
import { SelectOption } from '~/constants/types'
import Chevron from '../icons/Chevron.vue'
import { useLayoutStore } from '~/stores/layoutStore'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Object as PropType<Array<SelectOption>>,
    required: true,
    validator: (values: Array<any>) =>
      values.every(
        (value) =>
          typeof value.text === 'string' && typeof value.value === 'string',
      ),
  },
  onChange: {
    type: Function,
    required: true,
  },
  required: {
    type: Boolean,
    required: true,
  },
  preselectedValue: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['on-options-opening'])
const layoutStore = useLayoutStore()

const displayOptionsRef = ref(false)
const currentValue = ref('')
const currentText = ref('')

const shouldDisplayOptions = computed(() => {
  return displayOptionsRef.value && layoutStore.openedSelectFieldId === props.id
})

// Closing of the menu/list when outside click
const listbox = ref<HTMLElement | null>(null)
const listBoxTrigger = ref<HTMLElement | null>(null)

function closeListBox(e) {
  if (
    displayOptionsRef.value &&
    listBoxTrigger.value &&
    !listBoxTrigger.value.outerHTML.includes(e.target.outerHTML) &&
    listbox.value &&
    !listbox.value.outerHTML.includes(e.target.outerHTML)
  ) {
    displayOptionsRef.value = false
  }
}
document.addEventListener('click', (ev) => closeListBox(ev))
onUnmounted(() => window.removeEventListener('click', (ev) => closeListBox(ev)))

if (props.preselectedValue !== '') {
  currentValue.value = props.preselectedValue
  currentText.value = (
    props.options.find(
      (item: any) => item.value === props.preselectedValue,
    ) as any
  )?.text
}

function handleListBox() {
  layoutStore.openedSelectFieldId = props.id
  displayOptionsRef.value = !displayOptionsRef.value
}

function handleClick(value, text) {
  displayOptionsRef.value = false
  handleUpdate(value, text)
}

function handleUpdate(value, text) {
  const [newValue, newText] =
    currentValue.value === value ? ['', ''] : [value, text]

  currentValue.value = newValue
  currentText.value = newText
  props.onChange(props.name, newValue)
}
</script>
