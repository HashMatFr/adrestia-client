<template>
  <button
    type="button"
    :class="[
      'flex w-auto rounded-lg justify-center focus:outline-none font-semibold font-sans transition ease-in-out duration-150 button',
      {
        'py-1.5 px-2': size === 'small',
        'p-2.5 px-3': size === 'medium',
        'p-3': size === 'large',
        'rounded-full': rounded,
        'border-2 border-white border-opacity-0 bg-coal-500 text-primary disabled:text-disabled disabled:bg-interaction-disabled':
          base && category === 'coal',
        'border-2 border-white border-opacity-0 bg-main-500 text-contrast disabled:text-disabled disabled:bg-interaction-disabled':
          base && category === 'main',
        'border-2 border-white border-opacity-0 bg-alert-500 text-primary disabled:text-disabled disabled:bg-interaction-disabled':
          base && category === 'alert',
        'border-2 border-white border-opacity-0 bg-success-500 text-primary disabled:text-disabled disabled:bg-interaction-disabled':
          base && category === 'success',

        'text-coal-500 border-2 border-coal-500 disabled:text-disabled disabled:border-light':
          outline && category === 'coal',
        'text-main-500 border-2 border-main-500 disabled:text-disabled disabled:border-light':
          outline && category === 'main',
        'text-alert-500 border-2 border-alert-500 disabled:text-disabled disabled:border-light':
          outline && category === 'alert',
        'text-success-500 border-2 border-success-500 disabled:text-disabled':
          outline && category === 'success',

        'border-2 border-white border-opacity-0 text-main-500 disabled:text-disabled':
          borderless && category === 'main',
        'border-2 border-white border-opacity-0 text-coal-500 disabled:text-disabled':
          borderless && category === 'coal',
        'border-2 border-white border-opacity-0 text-alert-500 disabled:text-disabled':
          borderless && category === 'alert',
        'border-2 border-white border-opacity-0 text-success-500 disabled:text-disabled':
          borderless && category === 'success',

        iconSmall: label === '' && size === 'small',
        iconMedium: label === '' && size === 'medium',
        iconLarge: label === '' && size === 'large',
      },
    ]"
    @click="onClick"
    :disabled="disabled"
    :borderless="borderless"
  >
    <slot name="iconStart"></slot>
    <Text
      v-if="label"
      tag="span"
      :fontSize="fontSize"
      :value="label"
      fontWeight="semibold"
      :class="{
        'leading-7': size === 'large',
        'leading-4': size === 'small',
      }"
    />
    <slot name="iconEnd"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Text from './Text.vue'

const props = defineProps({
  rounded: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'medium',
    validator: function (value: string) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  base: {
    type: Boolean,
    default: true,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  borderless: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    default: 'main',
    validator: function (value: string) {
      return ['main', 'coal', 'alert', 'success'].indexOf(value) !== -1
    },
  },
})
const emit = defineEmits(['on-click'])

const fontSize = computed(() => {
  switch (props.size) {
    case 'small':
      return 'xs'
    case 'medium':
      return 'base'
    case 'large':
      return 'l'
    default:
      return 'base'
  }
})

function onClick() {
  emit('on-click')
}
</script>
<style>
.iconSmall {
  padding: 0.5rem !important;
}
.iconMedium {
  padding: 0.75rem !important;
}
.iconLarge {
  padding: 12px !important;
}
</style>
