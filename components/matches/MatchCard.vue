<template>
  <div class="w-full flex flex-row" @click="goToConversation">
    <div
      class="flex flex-row justify-between w-full bg-coal-900 rounded p-2 gap-3"
    >
      <div class="w-10 h-10 flex rounded-full bg-coal-700"></div>
      <div class="flex flex-col gap-2 w-full my-auto">
        <Text
          :value="
            match.interlocutorProfile.username +
            ', ' +
            match.interlocutorProfile.detailDto.age
          "
        ></Text>
        <Text v-if="lastMessageContent" :value="lastMessageContent"></Text>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, PropType, ref } from 'vue'
import { Match } from '~/constants/types'
import Text from '../design/Text.vue'
import { useMatchesStore } from '~/stores/matchesStore'
import { useFilesService } from '~/composables/useFilesService'

const props = defineProps({
  match: {
    type: Object as PropType<Match>,
    required: true,
  },
})

const localePath = useLocalePath()
const matchesStore = useMatchesStore()

const interlocutorAvatar = ref(null)
interlocutorAvatar.value =
  matchesStore.getAvatarDataByProfileId(
    props.match.interlocutorProfile.profileId,
  ) ?? downloadInterlocutorAvatar()

const filesService = useFilesService()
function downloadInterlocutorAvatar() {
  const filename =
    props.match.interlocutorProfile?.fileToBrowseDtos[0]?.filename
  if (filename) {
    filesService.downloadPhotoToBrowse(
      props.match.interlocutorProfile.profileId,
      filename,
    )
  }
}

const lastMessageContent = computed(() => {
  if (props.match.messages[0].content) {
    return props.match.messages[0].content
  } else {
    return ''
  }
})

function goToConversation() {
  matchesStore.focusedMatch = props.match
  return navigateTo(localePath('/matches/' + props.match.matchId))
}
</script>
