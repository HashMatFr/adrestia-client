<template>
  <div :name="name">
    <CustomRadio
      v-model="radioValue"
      :required="required"
      :name="name"
      :options="options"
      :selected-value="selectedValue"
      :label="label"
      :on-change="handleChangeField"
      :error-message="error"
      :invalid="error !== ''"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useValidationRules } from '../../composables/useValidationRules'
import CustomRadio from '../design/CustomRadio.vue'

const props = defineProps({
  options: {
    type: Array,
    default: () => {
      return []
    },
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
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  onChange: {
    type: Function,
    required: true,
  },
  selectedValue: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['is-field-valid'])

const validationRules = useValidationRules()
const radioValue = ref(null)
radioValue.value = props.selectedValue
const error = ref('')

function handleChangeField(name, value) {
  radioValue.value = value
  validate()
  props.onChange(name, value)
}
function validate() {
  error.value = ''
  if (props.required) {
    const result = validationRules.required(radioValue.value)
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
