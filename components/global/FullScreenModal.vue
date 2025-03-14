<template>
  <div
    name="fullScreenModal"
    class="full-screen-modal-mask fixed w-full h-full top-0 left-0"
  >
    <div class="bg-white h-screen fixed top-0 left-0 overflow-y-auto">
      <div
        :class="['flex justify-end items-center px-6 h-16 text-left', navClass]"
      >
        <slot name="modalHeader"></slot>
        <CustomButton :base="false" :outline="true" :borderless="false">
          <template #iconEnd> <Cross /> </template
        ></CustomButton>
        <button
          name="closeModal"
          class="text-interaction focus:outline-none"
          @click="onModalClose()"
        >
          <Cross />
        </button>
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
