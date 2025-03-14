<template>
  <component
    :is="tag"
    class="m-0"
    :class="{
      'font-nunitoSans': fontFamily === 'NunitoSans',
      'text-4xl leading-11': fontSize === '4xl',
      'text-3xl leading-9': fontSize === '3xl',
      'text-xxl leading-7': fontSize === 'xxl',
      'text-l leading-6': fontSize === 'l',
      'text-xs leading-4': fontSize === 'xs',
      'text-s leading-5': fontSize === 's',
      'text-base leading-6': fontSize === 'base',
      'text-xl leading-7': fontSize === 'xl',
      'text-5xl leading-12': fontSize === '5xl',
      'font-normal': fontWeight === 'normal',
      'font-medium': fontWeight === 'medium',
      'font-semibold': fontWeight === 'semibold',
      'font-bold': fontWeight === 'bold',
      italic: italic,
      uppercase: upper && !lower && !capital,
      lowercase: lower && !upper && !capital,
      capitalize: capital && !lower && !upper,
    }"
  >
    {{ value }}
  </component>
</template>
<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: 'p',
    validator: function (value: string) {
      return (
        ['p', 'li', 'span', 'div', 'h1', 'h2', 'h3', 'h4'].indexOf(value) !== -1
      )
    },
  },
  fontSize: {
    type: String,
    default: 'base',
    validator: function (value: string) {
      return (
        ['xs', 's', 'base', 'l', 'xl', 'xxl', '3xl', '4xl', '5xl'].indexOf(
          value,
        ) !== -1
      )
    },
  },
  fontWeight: {
    type: String,
    default: 'normal',
    validator: function (value: string) {
      return ['normal', 'medium', 'semibold', 'bold'].indexOf(value) !== -1
    },
  },
  fontFamily: {
    type: String,
    default: 'NunitoSans',
    validator: function (value: string) {
      return ['NunitoSans'].indexOf(value) !== -1
    },
  },
  italic: {
    type: Boolean,
    default: false,
  },
  upper: {
    type: Boolean,
    default: false,
  },
  lower: {
    type: Boolean,
    default: false,
  },
  capital: {
    type: Boolean,
    default: false,
  },
})
</script>
