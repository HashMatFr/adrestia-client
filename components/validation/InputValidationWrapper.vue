<template>
  <div :name="name">
    <CustomInput
      :id="id"
      v-model="inputValue"
      :disabled="disabled"
      :required="isRequired"
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
import { computed, PropType, ref, watch } from 'vue'
import { useValidationRules } from '../../composables/useValidationRules'
import CustomInput from '../design/CustomInput.vue'
import { ValidationRule } from '~/constants/types'

const props = defineProps({
  search: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array as PropType<Array<ValidationRule>>,
    default: () => {
      return []
    },
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
let inputValue = ref(props.value)
watch(
  () => props.value,
  (newVal) => {
    inputValue.value = newVal
  },
)
const error = ref('')
const valid = ref(false)

const isRequired = computed(() => {
  return props.rules?.findIndex((r) => r.name === 'required') > -1
})

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

  props.rules.forEach((rule: ValidationRule) => {
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
function validateAgainstRule(rule: ValidationRule): boolean {
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
function applyRule(rule: ValidationRule) {
  let result
  if (!rule.param) {
    result = validationRules[rule.name](inputValue.value)
  } else {
    result = validationRules[rule.name](inputValue.value, rule.param)
  }
  return result
}

defineExpose({
  validate,
  validateAgainstRule,
})
</script>
