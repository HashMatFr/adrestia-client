<template>
  <div>
    <div
      :class="{
        'max-sm:grid sm:flex py-1.5': true,
        'max-sm:grid-cols-1 sm:flex-col': displayOptionsAsColumn,
        'max-sm:grid-cols-2': !displayOptionsAsColumn,
      }"
    >
      <div
        v-for="(option, index) in options"
        :key="option.data"
        :class="{
          'flex content-center': true,
          'mb-3': options && index + 1 < options.length,
        }"
      >
        <input
          type="radio"
          :id="option.data"
          :name="name"
          :value="option.value"
          :checked="radioSelectedValue === option.value"
          v-model="radioSelectedValue"
          :disabled="option.disabled"
          :class="[
            {
              'form-radio mr-2 w-6 h-6 text-white focus:outline-none focus:ring-0 focus:ring-offset-0': true,
            },
          ]"
        />
        <label
          :for="option.name"
          :class="[
            {
              'mr-4 text-primary font-sans': true,
              'font-nunitoSans': labelOptionsFontFamily === 'NunitoSans',
              'text-4xl leading-11': labelOptionsFontSize === '4xl',
              'text-3xl leading-9': labelOptionsFontSize === '3xl',
              'text-xxl leading-7': labelOptionsFontSize === 'xxl',
              'text-l leading-6': labelOptionsFontSize === 'l',
              'text-xs leading-4': labelOptionsFontSize === 'xs',
              'text-s leading-5': labelOptionsFontSize === 's',
              'text-base leading-6': labelOptionsFontSize === 'base',
              'text-xl leading-7': labelOptionsFontSize === 'xl',
              'text-5xl leading-12': labelOptionsFontSize === '5xl',
              '!text-disabled cursor-not-allowed': option.disabled,
              'font-normal': labelOptionsFontWeight === 'normal',
              'font-medium': labelOptionsFontWeight === 'medium',
              'font-semibold': labelOptionsFontWeight === 'semibold',
              'font-bold': labelOptionsFontWeight === 'bold',
            },
          ]"
          @click="onLabelClick(option)"
          >{{ option.label }}</label
        >
      </div>
    </div>
    <Text
      v-if="invalid"
      fontSize="s"
      :value="errorMessage"
      class="text-alert-700"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import Text from './Text.vue'

const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  selectedValue: {
    type: String,
  },
  label: {
    type: String,
  },
  onChange: {
    type: Function,
    required: true,
  },
  options: {
    type: Array,
    validator: (values: Array<any>) => {
      const valuePropertiesRequired = ['value', 'data', 'label']
      return values.every((value) =>
        valuePropertiesRequired.every(
          (propertyRequired) =>
            value[propertyRequired].length > 0 &&
            typeof value[propertyRequired] === 'string',
        ),
      )
    },
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  labelOptionsFontSize: {
    type: String,
    default: 'l',
    validator: function (value: string) {
      const fontSizeListExpected = [
        'xs',
        's',
        'base',
        'l',
        'xl',
        'xxl',
        '3xl',
        '4xl',
        '5xl',
      ]
      return fontSizeListExpected.indexOf(value) !== -1
    },
  },
  labelOptionsFontWeight: {
    type: String,
    default: 'normal',
    validator: function (value: string) {
      return ['normal', 'medium', 'semibold', 'bold'].indexOf(value) !== -1
    },
  },
  labelOptionsFontFamily: {
    type: String,
    default: 'NunitoSans',
    validator: function (value: string) {
      return ['NunitoSans'].indexOf(value) !== -1
    },
  },
  displayOptionsAsColumn: {
    type: Boolean,
    default: false,
  },
})

const radioSelectedValue = ref('')
radioSelectedValue.value = props.selectedValue as string
watch(
  () => radioSelectedValue.value,
  (newValue) => {
    props.onChange(props.name, newValue)
  },
)
function onLabelClick(option: any) {
  if (option.disabled) return
  radioSelectedValue.value = option.value
}
</script>
<style scoped>
.form-radio {
  background-image: unset;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #4a4a4a;
}
.form-radio:checked {
  background-image: url('../../assets/img/radio.svg');
  background-color: #ffd700;
  border-width: 1px;
  border-color: #4a4a4a;
}
</style>
