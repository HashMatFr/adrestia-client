<template>
  <div class="w-full">
    <div class="w-full flex justify-end">
      <Text
        v-if="props.maxLength && shouldDisplayCounter"
        :value="counter"
        :italic="true"
        :class="[
          'w-fit',
          {
            'text-secondary': isCounterValid,
            'text-alert-500': !isCounterValid,
          },
        ]"
      ></Text>
    </div>

    <textarea
      ref="textAreaRef"
      v-model="inputValue"
      :class="[
        'w-full bg-transparent rounded p-3 text-primary mt-1 border-2 focus:outline-none focus:border-main-500',
        {
          'border-2 text-disabled bg-coal-400': disabled,
          'border-2 text-alert-500 bg-alert-50 border-alert-500':
            !isCounterValid || invalid,
        },
      ]"
      :placeholder="placeholder"
      :name="name"
      :id="name"
      :rows="rows"
      :required="required"
      :disabled="disabled"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @input="onInput"
      @invalid="isInvalid"
    ></textarea>

    <Text
      v-if="labelBottom"
      :value="labelBottom"
      :class="[
        'text-center',
        {
          'text-success-500': valid,
          'text-alert-500': invalid,
          'text-secondary': !invalid && !valid,
        },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Text from './Text.vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  valid: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  onChange: {
    type: Function,
    required: true,
  },
  value: {
    type: String,
    default: '',
  },
  labelBottom: {
    type: String,
    default: '',
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  pattern: {
    type: String,
  },
  checkValidity: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 5,
  },
  maxLength: {
    type: Number,
    required: false,
  },
  shouldDisplayCounter: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['invalid', 'valid', 'input'])

const inputValue = ref('')
const isFocus = ref(false)
inputValue.value = props.value

const textAreaRef = ref<HTMLTextAreaElement | null>(null)

function onInput(e) {
  if (props.checkValidity && props.pattern && e.target.value) {
    let pattern = new RegExp(props.pattern)
    if (pattern.test(e.target.value)) {
      isValid()
      emit('input', props.name, e.target.value)
    } else {
      if (textAreaRef.value) {
        textAreaRef.value.value = props.value
      }
      isInvalid(e)
    }
  } else {
    emit('input', props.name, e.target.value)
  }
}

const counter = computed(() => {
  if (props.maxLength) {
    return inputValue.value.length + ' / ' + props.maxLength
  } else {
    return ''
  }
})

const isCounterValid = computed(() => {
  if (props.maxLength) {
    return inputValue.value.length <= props.maxLength
  } else {
    return true
  }
})

function isInvalid(e) {
  emit('invalid', e)
}

function isValid() {
  emit('valid')
}

watch(
  () => inputValue.value,
  (newValue) => {
    props.onChange(props.name, newValue)
  },
)

const labelBottom = computed(() => {
  if (props.invalid && props.valid === false) {
    return props.errorMessage || ''
  }
  return props.helpLabel
})
</script>
