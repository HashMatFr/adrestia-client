<template>
  <div
    name="fullScreenModal"
    class="full-screen-modal-mask fixed w-full h-full top-0 left-0"
  >
    <div class="bg-coal-800 h-screen fixed top-0 left-0 overflow-y-auto">
      <div
        :class="['flex justify-end items-center px-6 h-16 text-left', navClass]"
      >
        <slot name="modalHeader"></slot>
        <CustomButton
          name="closeModal"
          :base="false"
          :outline="false"
          @click="onModalClose()"
        >
          <template #iconEnd> <Cross /> </template
        ></CustomButton>
      </div>
      <slot name="modalContent"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '../design/CustomButton.vue'
import Cross from '../icons/Cross.vue'

defineProps({
  navClass: {
    type: String,
    default: 'bg-white',
  },
})
const emit = defineEmits(['on-modal-close'])

function onModalClose() {
  emit('on-modal-close')
}
</script>
<style scoped>
.full-screen-modal-mask {
  z-index: 1000;
}
</style>
