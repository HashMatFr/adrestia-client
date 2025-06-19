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
    <div class="w-full py-2"></div>

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
import { Match } from '~/constants/types'
import { useActiveMatchStore } from '~/stores/activeMatchStore'
import { useLayoutStore } from '~/stores/layoutStore'

definePageMeta({
  layout: 'default',
  middleware: ['profile-activation-guard'],
})

const { t } = useI18n()
const localePath = useLocalePath()
const layoutStore = useLayoutStore()
const activeMatchStore = useActiveMatchStore()

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

// CONVERSATION WebSocket
const ws = ref(null) // WebSocket connection
const isConnected = ref(false) // Connection status
const retryInterval = 3000 // Time interval for retrying connection (ms)
let retryTimeout = null // Timeout reference for reconnection

const connectWebSocket = () => {
  ws.value = new WebSocket(
    '/api/adrestia/active-match/' + displayedMatch.value.matchId,
  )

  ws.value.onopen = () => {
    isConnected.value = true
    if (retryTimeout) {
      clearTimeout(retryTimeout) // Clear the retry timeout on successful connection
      retryTimeout = null
    }
  }

  ws.value.onmessage = (event) => {
    activeMatchStore.addMessage(event.data)
  }

  ws.value.onerror = (error) => {
    isConnected.value = false
  }

  ws.value.onclose = () => {
    isConnected.value = false
    attemptReconnect() // Trigger reconnection process when the connection closes
  }
}

// Retry connection mechanism
const attemptReconnect = () => {
  if (!isConnected.value) {
    retryTimeout = setTimeout(() => {
      connectWebSocket()
    }, retryInterval)
  }
}

onMounted(() => {
  connectWebSocket()
})

onUnmounted(() => {
  activeMatchStore.focusedMatch = null
  activeMatchStore.messages = null
  activeMatchStore.focusedMessage = null
  if (ws.value) {
    ws.value.close()
  }
  if (retryTimeout) {
    clearTimeout(retryTimeout)
  }
})
</script>
