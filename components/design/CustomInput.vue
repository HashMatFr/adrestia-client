<template>
  <div :class="type === 'search' ? 'h-full' : 'h-auto'">
    <div
      :class="['pb-0.5', { 'flex items-center justify-between': link }]"
      v-if="label"
    >
      <label
        :for="id"
        :class="[
          {
            'text-alert-700': invalid,
            'text-success-700': valid,
            'text-primary': !valid && !invalid && !warning,
            'font-nunitoSans': labelFontFamily === 'NunitoSans',
            'text-4xl leading-11': labelFontSize === '4xl',
            'text-3xl leading-9': labelFontSize === '3xl',
            'text-xxl leading-7': labelFontSize === 'xxl',
            'text-l leading-6': labelFontSize === 'l',
            'text-xs leading-4': labelFontSize === 'xs',
            'text-s leading-5': labelFontSize === 's',
            'text-base leading-6': labelFontSize === 'base',
            'text-xl leading-7': labelFontSize === 'xl',
            'text-5xl leading-12': labelFontSize === '5xl',
            'font-normal': labelFontWeight === 'normal',
            'font-medium': labelFontWeight === 'medium',
            'font-semibold': labelFontWeight === 'semibold',
            'font-bold': labelFontWeight === 'bold',
            italic: labelItalic,
            uppercase: labelUpper && !labelLower && !labelCapital,
            lowercase: labelLower && !labelUpper && !labelCapital,
            capitalize: labelCapital && !labelLower && !labelUpper,
          },
          'text-left',
        ]"
      >
        {{ label }}{{ required && label !== '' ? '*' : null }}
      </label>
      <p>
        <a
          v-if="link"
          class="underline-offset-4 text-interaction underline font-sans text-s"
          :href="link"
          @click="handleLinkClick"
        >
          {{ linkText }}
        </a>
      </p>
    </div>
    <div
      :class="[
        type === 'search' ? 'p-2' : 'box-border border-2 border-solid p-3 h-12',
        'flex wrapper items-center w-full rounded',
        {
          'h-full pl-5': type === 'search',
          border: !isFocus && type !== 'search',
          'bg-interaction-disabled': disabled,
          'bg-success-50 border-success-700 text-success-700': valid,
          'bg-alert-50 border-alert-700 text-alert-700': invalid,
          'border-main-500': isFocus && type !== 'search',
        },
      ]"
    >
      <Magnifier
        v-if="search"
        :class="[
          'hidden lg:block mr-3 text-disabled mt-2',
          {
            'lg:hidden': isFocus,
            'text-success-700': valid,
            'text-alert-700': invalid,
          },
        ]"
      />
      <input
        ref="myInput"
        v-bind="addPatternArg"
        :id="id"
        :value="value"
        :name="name"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxLengthValue"
        :min="min"
        :max="max"
        :required="required"
        :autocomplete="autocomplete"
        :class="[
          'w-full bg-transparent focus:outline-none focus:',
          {
            'placeholder-success-700': valid,
            'placeholder-alert-700': invalid,
            'text-primary': !valid && !invalid && !warning,
            'text-4xl leading-11': placeHolderFontSize === '4xl',
            'text-3xl leading-9': placeHolderFontSize === '3xl',
            'text-xxl leading-7': placeHolderFontSize === 'xxl',
            'text-l leading-6': placeHolderFontSize === 'l',
            'text-xs leading-4': placeHolderFontSize === 'xs',
            'text-s leading-5': placeHolderFontSize === 's',
            'text-base leading-6': placeHolderFontSize === 'base',
            'text-xl leading-7': placeHolderFontSize === 'xl',
            'text-5xl leading-12': placeHolderFontSize === '5xl',
          },
        ]"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @paste="disabledPaste"
        @input="onInput"
        @invalid="isInvalid"
      />
      <Check v-if="valid" />
      <Information
        v-else-if="invalid || warning"
        :class="[
          'transform rotate-180',
          {
            'text-alert-700': invalid,
          },
        ]"
      />
      <slot name="iconEnd" v-else-if="errorMessage === ''"></slot>
    </div>
    <Text
      fontSize="s"
      :value="labelBottom"
      :class="[
        'leading-5 font-sans pt-0.5',
        {
          'text-success-700': valid,
          'text-alert-700': invalid,
          'text-secondary': !invalid && !valid && !warning,
        },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Information from '../icons/Information.vue'
import Magnifier from '../icons/Magnifier.vue'
import Check from '../icons/Check.vue'
import Text from './Text.vue'

const props = defineProps({
  autocomplete: {
    type: String,
    default: 'on',
  },
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
  invalid: {
    type: Boolean,
    default: false,
  },
  warning: {
    type: Boolean,
    default: false,
  },
  warningMessage: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  maxlength: {
    type: String,
    default: '',
  },
  label: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  id: {
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
  link: {
    type: String,
  },
  linkText: {
    type: String,
  },
  linkActionLabel: {
    type: String,
    default: '',
  },
  helpLabel: {
    type: String,
    default: '',
  },
  search: {
    type: Boolean,
    default: false,
  },
  shouldMagnifierBeDisplayed: {
    type: Boolean,
    default: false,
  },
  labelFontSize: {
    type: String,
    default: 'base',
    validator: (value: string) => {
      return (
        ['xs', 's', 'base', 'l', 'xl', 'xxl', '3xl', '4xl', '5xl'].indexOf(
          value,
        ) !== -1
      )
    },
  },
  labelFontWeight: {
    type: String,
    default: 'normal',
    validator: function (value: string) {
      return ['normal', 'medium', 'semibold', 'bold'].indexOf(value) !== -1
    },
  },
  labelFontFamily: {
    type: String,
    default: 'NunitoSans',
    validator: function (value: string) {
      return ['NunitoSans'].indexOf(value) !== -1
    },
  },
  labelItalic: {
    type: Boolean,
    default: false,
  },
  labelUpper: {
    type: Boolean,
    default: false,
  },
  labelLower: {
    type: Boolean,
    default: false,
  },
  labelCapital: {
    type: Boolean,
    default: false,
  },
  placeHolderFontSize: {
    type: String,
    default: 'base',
    validator: (value: string) => {
      return (
        ['xs', 's', 'base', 'l', 'xl', 'xxl', '3xl', '4xl', '5xl'].indexOf(
          value,
        ) !== -1
      )
    },
  },
  pattern: {
    type: String,
  },
  checkValidity: {
    type: Boolean,
    default: false,
  },
  min: {
    type: String,
  },
  max: {
    type: String,
  },
})
const emit = defineEmits(['input-link-action', 'invalid', 'valid', 'input'])
const isFocus = ref(false)

const maxLengthValue = computed(() => {
  return props.maxlength ? props.maxlength : undefined
})
const labelBottom = computed(() => {
  if (props.invalid && props.valid === false && props.warning === false) {
    return props.errorMessage
  } else if (props.warning) {
    return props.warningMessage
  } else {
    return props.helpLabel
  }
})

const addPatternArg = computed(() => {
  if (props.pattern) {
    return { pattern: props.pattern }
  } else {
    return {}
  }
})

function disabledPaste(e) {
  if (props.name === 'passwordConfirmation') {
    e.preventDefault()
  }
}
function handleLinkClick() {
  emit('input-link-action', props.linkActionLabel)
}

const myInput = ref<HTMLInputElement | null>(null)
function onInput(e) {
  props.onChange(props.name, e.target.value)
  if (props.checkValidity && myInput.value) {
    if (myInput.value.checkValidity()) {
      isValid()
    }
  }
  emit('input', props.name, e.target.value)
}
function isInvalid(e) {
  emit('invalid', e)
}
function isValid() {
  emit('valid')
}
</script>
<style scoped>
.input__webkit-override {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-background-clip: text !important;
}
</style>
