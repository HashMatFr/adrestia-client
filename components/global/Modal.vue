<template>
  <div ref="modalMask" class="modal-mask fixed w-full h-full top-0 left-0">
    <div ref="modalBody" class="modal-specs mx-auto rounded shadow-lg">
      <div
        :class="[
          'modal__header flex flex-row items-center justify-between w-full rounded-t px-5 py-2',
          modalHeaderClass,
        ]"
      >
        <slot name="modalHeader"></slot>
        <CustomButton :base="false" :outline="true" @click="onModalClose()">
          <template #iconEnd> <Cross /> </template
        ></CustomButton>
      </div>
      <slot name="modalContent"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import CustomButton from '../design/CustomButton.vue'
import Cross from '../icons/Cross.vue'

defineProps({
  modalHeaderClass: {
    type: String,
    default: 'bg-coal-900',
  },
})
const emit = defineEmits(['on-modal-close'])

const modalMask = ref<HTMLElement | null>(null)
const modalBody = ref<HTMLElement | null>(null)

function onModalClose() {
  emit('on-modal-close')
}
function closeModal(e) {
  if (
    modalMask.value &&
    modalBody.value &&
    modalMask.value.outerHTML.includes(e.target.outerHTML) &&
    !modalBody.value.outerHTML.includes(e.target.outerHTML)
  ) {
    onModalClose()
  }
}

document.addEventListener('click', (ev) => closeModal(ev))
onUnmounted(() => window.removeEventListener('click', (ev) => closeModal(ev)))
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.modal-specs {
  width: 315px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-header {
  height: 54px;
}
</style>
