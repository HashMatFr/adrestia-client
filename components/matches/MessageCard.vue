<template>
  <div class="flex flex-row gap-1 w-2/3">
    <!-- Message Actions -->
    <div v-if="isUserMessage" class="flex flex-col gap-3 min-w-max my-auto">
      <div class="p-1" @click="editMessage">
        <Modify :height="10" :width="10" class="text-accent-500" />
      </div>
      <div class="p-1">
        <GarbageCan
          :height="12"
          :width="10"
          class="text-alert-500"
          @click="deleteMessage"
        />
      </div>
    </div>

    <!-- Message Content -->
    <div
      v-if="message.hasBeenLogicallyDeleted"
      :class="[
        'flex flex-col gap-1 w-full p-2 rounded w-full shadow-base',
        {
          'ml-auto mr-0 bg-silver-500 text-primary': isUserMessage,
          'mr-auto ml-0 bg-coal-900 text-inverted': !isUserMessage,
        },
      ]"
    >
      <Text
        v-if="getInterlocutorMessageRelativeTime"
        :value="getInterlocutorMessageRelativeTime"
        class="flex self-end"
      ></Text>
      <Text :value="message.content" class="w-full flex"></Text>
      <div class="flex w-full items-end text-neon_blue">
        <DoubleCheck v-if="isUserMessage && message.hasBeenRead"></DoubleCheck>
        <SingleCheck v-else-if="isUserMessage"></SingleCheck>
      </div>
    </div>
    <div
      v-else
      :class="[
        'flex gap-1 w-auto p-2 rounded',
        {
          'ml-auto mr-0 bg-silver-500 text-primary': isUserMessage,
          'mr-auto ml-0 bg-coal-900 text-inverted': !isUserMessage,
        },
      ]"
    >
      <Text :value="t('match.deletedMessageLabel')"></Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { Message } from '~/constants/types'
import { useProfileStore } from '~/stores/profileStore'
import Text from '../design/Text.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Modify from '../icons/Modify.vue'
import GarbageCan from '../icons/GarbageCan.vue'
import { useActiveMatchStore } from '~/stores/activeMatchStore'
import SingleCheck from '../icons/SingleCheck.vue'
import DoubleCheck from '../icons/DoubleCheck.vue'

dayjs.extend(relativeTime)

const props = defineProps({
  message: {
    type: Object as PropType<Message>,
    required: true,
  },
})
const emit = defineEmits(['edit-message', 'prepare-delete-message'])

const { t } = useI18n()

const profileStore = useProfileStore()
const activeMatchStore = useActiveMatchStore()

const isUserMessage = computed(() => {
  return props.message.authorProfileId === profileStore.profileId
})

const getInterlocutorMessageRelativeTime = computed(() => {
  if (isUserMessage.value && props.message.createdAt) {
    return dayjs(props.message.createdAt).fromNow()
  } else {
    return ''
  }
})

function editMessage() {
  activeMatchStore.focusedMessage = JSON.parse(JSON.stringify(props.message))
  emit('edit-message')
}

function deleteMessage() {
  activeMatchStore.focusedMessage = JSON.parse(JSON.stringify(props.message))
  emit('prepare-delete-message')
}
</script>
