<template>
  <div :name="name">
    <my-checkbox
      v-model="checkboxValues"
      :label="label"
      :name="name"
      :values="values"
      :on-change="handleChangeField"
      :error-message="error"
      :required="required"
      :invalid="error !== ''"
      :label-font-size="labelFontSize"
      :label-font-weight="labelFontWeight"
      :label-font-family="labelFontFamily"
      :label-italic="labelItalic"
      :label-upper="labelUpper"
      :label-lower="labelLower"
      :label-capital="labelCapital"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MyCheckbox } from '@gvtmonaco/xdsvue'
import { useValidationRules } from '../../composables/useValidationRules'

const props = defineProps({
  values: {
    type: Array,
    required: true,
    validator: (values: Array<any>) => {
      const valuePropertiesRequired = ['value', 'name', 'choice']
      return values.every((value) =>
        valuePropertiesRequired.every(
          (propertyRequired) => typeof value[propertyRequired] === 'string',
        ),
      )
    },
  },
  label: {
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
  required: {
    type: Boolean,
    default: false,
  },
  labelFontSize: {
    type: String,
    default: 'base',
    validator: (value: string) => {
      return [
        'xs',
        's',
        'base',
        'l',
        'xl',
        'xxl',
        '3xl',
        '4xl',
        '5xl',
        'bannerDesktop',
        'bannerTablet',
        'bannerMobile',
        'subtitle',
      ].includes(value)
    },
  },
  labelFontWeight: {
    type: String,
    default: 'normal',
    validator: (value: string) => {
      return ['normal', 'medium', 'semibold', 'bold'].includes(value)
    },
  },
  labelFontFamily: {
    type: String,
    default: 'fontSans',
    validator: (value: string) => {
      return ['fontSans', 'fontRaleway'].includes(value)
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
})
const emit = defineEmits(['is-field-valid'])

const validationRules = useValidationRules()
const checkboxValues = ref([])
const error = ref('')

function handleChangeField(values) {
  checkboxValues.value = values
  validate()
  props.onChange(props.name, values)
}
function validate() {
  error.value = ''
  if (props.required) {
    const result = validationRules.required(checkboxValues.value)
    if (typeof result === 'string') {
      error.value = result
    }
  }
  emit('is-field-valid', error.value === '')
}

defineExpose({
  validate,
})
</script>
