<template>
  <div :name="name">
    <CustomInput
      :id="id"
      v-model="inputValue"
      :disabled="disabled"
      :required="rules ? rules.includes('required') : false"
      :valid="valid && value !== ''"
      :invalid="error !== ''"
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :on-change="handleChangeField"
      :value="value"
      :link="link"
      :link-text="linkText"
      :help-label="helpLabel"
      :search="search"
      :error-message="error"
    >
      <template #iconEnd>
        <slot name="iconEnd"></slot>
      </template>
    </CustomInput>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useValidationRules } from '../../composables/useValidationRules'
import CustomInput from '../design/CustomInput.vue'

const props = defineProps({
  search: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
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
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
  helpLabel: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['is-field-valid'])
const validationRules = useValidationRules()
let inputValue = ref('')
inputValue.value = props.value
const error = ref('')
const valid = ref(false)

function handleChangeField(name: string, value: string) {
  let dummyValue = value
  if (!name.includes('password') && !name.includes('username')) {
    dummyValue = value.replace(/\s{2,}/g, ' ').trim()
  }
  inputValue.value = dummyValue
  props.onChange(name, dummyValue)
  validate()
}
function validate() {
  error.value = ''
  let dummyValid = false

  props.rules.split('|').forEach((rule) => {
    if (error.value === '') {
      const result = applyRule(rule)
      if (typeof result === 'boolean') {
        dummyValid = result
      } else {
        dummyValid = false
        error.value = result
      }
    }
  })
  valid.value = dummyValid
  emit('is-field-valid', dummyValid)
}
function validateAgainstRule(rule: string): Boolean {
  const result = applyRule(rule)
  if (typeof result === 'boolean') {
    valid.value = result
    return result
  } else {
    valid.value = false
    error.value = result
    return false
  }
}
function applyRule(rule: string) {
  const splitRuleFromParam = rule.split(':')
  let result
  if (splitRuleFromParam.length === 1) {
    result = validationRules[rule](inputValue.value)
  } else if (splitRuleFromParam.length === 2) {
    if (isNaN(splitRuleFromParam[1])) {
      result = validationRules[splitRuleFromParam[0]](
        inputValue.value,
        splitRuleFromParam[1],
      )
    } else {
      result = validationRules[splitRuleFromParam[0]](
        inputValue.value,
        parseInt(splitRuleFromParam[1]),
      )
    }
  }
  return result
}

defineExpose({
  validate,
  validateAgainstRule,
})
</script>
