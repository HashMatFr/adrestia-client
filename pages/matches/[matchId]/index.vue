<template>
  <div class="w-full px-5 pt-20 flex flex-col gap-5 pb-24">
    <div class="w-full h-screen relative">
      <!-- Matches Actions -->
      <div
        class="absolute top-0 left-0 w-full py-1 flex flex-row justify-between"
      >
        <div class="flex min-w-max" @click="backToMatches">
          <ArrowLeft :height="10" class="text-accent-500" />
        </div>
        <div class="flex min-w-max" @click="displayDeleteOrBlockMatchModal">
          <BlockSymbol :height="10" class="text-alert-500" />
        </div>
      </div>
    </div>

    <Conversation
      @edit-existing-message="editExistingMessage"
      @send-new-message="sendNewMessage"
      @delete-message="logicallyDeleteMessage"
    ></Conversation>

    <!-- Block or Delete Match Modal -->
    <Modal
      v-if="shouldDisplayDeleteOrBlockMatchModal"
      @on-modal-close="closeDeleteOrBlockMatchModal"
    >
      <template #modalHeader>
        <Text :value="t('match.deletionModalTitle')"></Text>
      </template>
      <template #modalContent>
        <div class="flex flex-col gap-3 bg-coal-800 p-5 rounded-b">
          <Text :value="t('match.deletionModalExplanation')"></Text>
          <CustomButton
            class="w-full"
            :label="t('actions.delete')"
            :base="true"
            :outline="false"
            :category="'alert'"
            @click="deleteMatch"
            ><template #iconStart> <GarbageCan class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            class="w-full"
            :label="t('actions.blockThenDelete')"
            :base="true"
            :outline="false"
            :category="'alert'"
            @click="blockMatch"
            ><template #iconStart> <BlockSymbol class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            class="w-full"
            :label="t('actions.cancel')"
            :base="true"
            :outline="false"
            @click="closeDeleteOrBlockMatchModal"
            ><template #iconStart> <ArrowLeft class="mr-2" /> </template
          ></CustomButton>
        </div> </template
    ></Modal>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import CustomButton from '~/components/design/CustomButton.vue'
import Text from '~/components/design/Text.vue'
import Modal from '~/components/global/Modal.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import BlockSymbol from '~/components/icons/BlockSymbol.vue'
import GarbageCan from '~/components/icons/GarbageCan.vue'
import Conversation from '~/components/matches/Conversation.vue'
import { useMessagesService } from '~/composables/useMessagesService'
import { Match, Message } from '~/constants/types'
import { useActiveMatchStore } from '~/stores/activeMatchStore'
import { useLayoutStore } from '~/stores/layoutStore'
import { useProfileStore } from '~/stores/profileStore'
import { usePropertiesStore } from '~/stores/propertiesStore'

definePageMeta({
  layout: 'default',
  middleware: ['profile-activation-guard'],
})

const { t } = useI18n()
const localePath = useLocalePath()
const layoutStore = useLayoutStore()
const activeMatchStore = useActiveMatchStore()
const profileStore = useProfileStore()
const propertiesStore = usePropertiesStore()

const messagesService = useMessagesService()

const displayedMatch = computed<Match>(() => {
  return activeMatchStore.focusedMatch
})

layoutStore.pageTitle =
  displayedMatch.value.interlocutorProfile.username +
  ', ' +
  displayedMatch.value.interlocutorProfile.detailDto.age
layoutStore.shouldDisplayHomeButton = true
layoutStore.shouldDisplaySettingsButton = true
layoutStore.shouldDisplayLanguagesSwitcher = false

function backToMatches() {
  return navigateTo(
    localePath({
      name: 'matches',
    }),
  )
}

const shouldDisplayDeleteOrBlockMatchModal = ref(false)
function displayDeleteOrBlockMatchModal() {
  shouldDisplayDeleteOrBlockMatchModal.value = true
}

function closeDeleteOrBlockMatchModal() {
  shouldDisplayDeleteOrBlockMatchModal.value = false
}

function deleteMatch() {}

function blockMatch() {}

// Recursive timeout for match messages short polling
const pollingTimeout = ref(null)
let delay = propertiesStore.getPropertyValueByKey(
  'messagesOfMatchShortPollingDelay',
)
  ? Number.parseInt(
      propertiesStore.getPropertyValueByKey('messagesOfMatchShortPollingDelay'),
    )
  : 10000 // default initial delay

function startShortPolling() {
  pollingTimeout.value = setTimeout(function () {
    messagesService.updateMessagesByMatchId(displayedMatch.value.matchId)
    startShortPolling()
  }, delay)
}

onMounted(() => {
  messagesService.updateMessagesByMatchId(displayedMatch.value.matchId)
  startShortPolling()
})

onUnmounted(() => {
  if (pollingTimeout.value) {
    clearTimeout(pollingTimeout.value)
  }
  activeMatchStore.focusedMatch = null
  activeMatchStore.messages = null
  activeMatchStore.focusedMessage = null
})

function editExistingMessage(newContent) {
  let existingMessage = activeMatchStore.focusedMessage
  existingMessage.content = newContent
  messagesService.updateMessageContent(existingMessage)
}

function sendNewMessage(newContent) {
  let newMessage: Message = {
    messageId: '',
    createdAt: '',
    hasBeenLogicallyDeleted: false,
    hasBeenModified: false,
    hasBeenRead: false,
    matchId: activeMatchStore.focusedMatch.matchId,
    authorProfileId: profileStore.profileId,
    content: newContent,
    interlocutorProfileId:
      activeMatchStore.focusedMatch.interlocutorProfile.profileId,
  }
  messagesService.addMessage(displayedMatch.value.matchId, newMessage)
}

function logicallyDeleteMessage() {
  if (activeMatchStore.focusedMessage?.messageId) {
    messagesService.logicallyDeleteMessage(
      activeMatchStore.focusedMessage.messageId,
    )
  }
}
</script>
