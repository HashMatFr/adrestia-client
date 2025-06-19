<template>
  <div class="flex flex-col gap-3 w-full overflow-y-auto">
    <MessageCard
      v-for="mtd in activeMatchStore.messages"
      :message="mtd"
      @prepare-delete-message="displayDeleteMessageModal"
      @edit-message="setEditionMode"
    ></MessageCard>

    <!-- Delete Message Modal -->
    <Modal
      v-if="shouldDisplayDeleteMessageModal"
      @on-modal-close="closeDeleteMessageModal"
    >
      <template #modalHeader>
        <Text :value="t('message.deletionModalTitle')"></Text>
      </template>
      <template #modalContent>
        <div class="flex flex-col gap-3 bg-coal-800 p-5 rounded-b">
          <Text :value="t('message.deletionModalExplanation')"></Text>
          <CustomButton
            class="w-full"
            :label="t('actions.delete')"
            :base="true"
            :outline="false"
            :category="'alert'"
            @click="deleteMessage"
            ><template #iconStart> <GarbageCan class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            class="w-full"
            :label="t('actions.cancel')"
            :base="true"
            :outline="false"
            @click="closeDeleteMessageModal"
            ><template #iconStart> <ArrowLeft class="mr-2" /> </template
          ></CustomButton>
        </div> </template
    ></Modal>
  </div>
</template>

<script setup lang="ts">
import { useActiveMatchStore } from '~/stores/activeMatchStore'
import MessageCard from './MessageCard.vue'
import Modal from '../global/Modal.vue'
import CustomButton from '../design/CustomButton.vue'
import ArrowLeft from '../icons/ArrowLeft.vue'
import GarbageCan from '../icons/GarbageCan.vue'
import Text from '../design/Text.vue'
import { ref } from 'vue'

const { t } = useI18n()
const activeMatchStore = useActiveMatchStore()

// Message Deletion
const shouldDisplayDeleteMessageModal = ref(false)
function displayDeleteMessageModal() {
  shouldDisplayDeleteMessageModal.value = true
}

function deleteMessage() {}

function closeDeleteMessageModal() {
  activeMatchStore.focusedMessage = null
  shouldDisplayDeleteMessageModal.value = false
}

//Message Edition
const isEditionMode = ref(false)
function setEditionMode() {
  isEditionMode.value = true
}
</script>
