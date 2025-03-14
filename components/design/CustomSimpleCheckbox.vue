<template>
  <div class="flex flex-row gap-2">
    <input
      type="checkbox"
      :id="name"
      :name="name"
      :value="value"
      :required="required"
      :checked="checked || indeterminate"
      @change="onChange($event)"
      :class="[
        'simple-checkbox-state w-6 h-6 rounded focus:ring-offset-0 focus:ring-0',
        { indeterminate: indeterminate },
      ]"
    />
    <Text :value="label"></Text>
  </div>
</template>
<script setup lang="ts">
import Text from './Text.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  label: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function,
    required: true,
  },
})

function onChange($event) {
  props.onChange(props.name, $event)
}
</script>
<style scoped>
.simple-checkbox-state:checked {
  background-image: url('../../assets/img/checkbox.svg');
  background-color: #efbf04;
  border-width: 0px;
}

.simple-checkbox-state {
  background-image: unset;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #4a4a4a;
}

.simple-checkbox-state.indeterminate {
  background-image: url('../../assets/img/indeterminate.svg');
  background-color: #efbf04;
  border-width: 0px;
}
</style>
