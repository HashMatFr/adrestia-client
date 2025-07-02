<template>
  <div class="flex flex-col gap-3 w-full overflow-y-auto py-2">
    <MessageCard
      v-for="mtd in activeMatchStore.messages"
      :message="mtd"
      @prepare-delete-message="displayDeleteMessageModal"
      @edit-message="setEditionMode"
    ></MessageCard>

    <form class="w-full gap-1 flex flex-row items-center">
      <TextAreaValidationWrapper
        id="messageContent"
        name="messageContent"
        ref="messageContentRef"
        class="w-full"
        :value="messageContent"
        :rules="[{ name: 'max', param: 2000 }]"
        :max-length="2000"
        :on-change="handleChangeField"
        @is-field-valid="(event) => (form.messageContent = event)"
      ></TextAreaValidationWrapper>
      <div class="flex flex-col gap-3">
        <div class="text-alert-500" @click="deleteDraft">
          <Cross :height="12" :width="12" />
        </div>
        <div class="text-accent-500" @click="sendMessage">
          <Send :height="12" :width="12" />
        </div>
      </div>
    </form>

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
import TextAreaValidationWrapper from '../validation/TextAreaValidationWrapper.vue'
import Cross from '../icons/Cross.vue'
import Send from '../icons/Send.vue'

const emit = defineEmits([
  'edit-existing-message',
  'send-new-message',
  'delete-message',
])

const { t } = useI18n()
const activeMatchStore = useActiveMatchStore()

const isEditionMode = ref(false)

// Form setting
const form = ref({
  messageContent: false,
})
const messageContent = ref('')
const messageContentRef = ref(null)

function handleChangeField(name, value) {
  messageContent.value = value
}

function sendMessage() {
  messageContentRef.value.validate()

  if (messageContent.value && form.value.messageContent) {
    if (isEditionMode.value) {
      emit('edit-existing-message', messageContent.value)
    } else {
      emit('send-new-message', messageContent.value)
    }
  }
}

function deleteDraft() {
  activeMatchStore.focusedMessage = null
  isEditionMode.value = false
  messageContent.value = ''
}

// Message Deletion
const shouldDisplayDeleteMessageModal = ref(false)
function displayDeleteMessageModal() {
  shouldDisplayDeleteMessageModal.value = true
}

function deleteMessage() {
  shouldDisplayDeleteMessageModal.value = false
  emit('delete-message')
}

function closeDeleteMessageModal() {
  activeMatchStore.focusedMessage = null
  shouldDisplayDeleteMessageModal.value = false
}

//Message Edition
function setEditionMode() {
  isEditionMode.value = true
  messageContent.value = activeMatchStore.focusedMessage.content
}
</script>
