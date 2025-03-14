<template>
  <div>
    <CustomSelect
      :id="id"
      :name="name"
      v-model="selectValue"
      :options="options"
      :on-change="handleChangeField"
      :preselected-value="selectValue"
      :required="required"
      :disabled="disabled"
    />
  </div>
</template>
<script setup lang="ts">
import { PropType, ref } from 'vue'
import { useValidationRules } from '../../composables/useValidationRules'
import CustomSelect from '../design/CustomSelect.vue'
import { SelectOption } from '~/constants/types'

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
    default: true,
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

const emit = defineEmits(['is-field-valid'])
const validationRules = useValidationRules()
const selectValue = ref('')
const error = ref('')
selectValue.value = props.preselectedValue

function handleChangeField(name, value) {
  selectValue.value = value
  validate()
  props.onChange(name, value)
}

function validate() {
  error.value = ''
  if (props.required) {
    const result = validationRules.required(selectValue.value)
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
