<template>
  <div
    :class="[
      'flex flex-row justify-between w-full rounded gap-5 items-center p-2',
      { 'bg-coal-900': canBeDisplayed, 'bg-coal-400': !canBeDisplayed },
    ]"
    @click="displayLikingProfile"
  >
    <div class="flex flex-row gap-5 items-center">
      <div
        v-if="canBeDisplayed && avatarData"
        ref="avatarRef"
        class="w-16 h-16 flex"
      >
        <img
          :src="avatarData"
          :alt="'Avatar'"
          class="object-cover rounded-full"
        />
      </div>
      <div v-else class="w-16 h-16 flex bg-coal-900">
        <Lock class="m-auto text-main-500"></Lock>
      </div>
      <Text :value="profileToBrowse.username" class="p-2"></Text>
    </div>

    <div class="flex flex-row gap-5 items-center">
      <Text
        v-if="canBeDisplayed && getLikeRelativeTime"
        :value="getLikeRelativeTime"
      ></Text>
      <Chevron v-if="canBeDisplayed" class="text-main-500"></Chevron>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, PropType, ref, watch } from 'vue'
import { ProfileToBrowse } from '~/constants/types'
import Text from '../design/Text.vue'
import { useFilesService } from '~/composables/useFilesService'
import { useLikesStore } from '~/stores/likesStore'
import Chevron from '../icons/Chevron.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Lock from '../icons/Lock.vue'

dayjs.extend(relativeTime)

const props = defineProps({
  profileToBrowse: {
    type: Object as PropType<ProfileToBrowse>,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  canBeDisplayed: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['display-liking-profile'])
const likesStore = useLikesStore()

const getLikeRelativeTime = computed(() => {
  if (props.createdAt) {
    return dayjs(props.createdAt).fromNow()
  } else {
    return ''
  }
})

const avatarRef = ref<HTMLInputElement | undefined>()
watch(avatarRef, () => verifyAvatar())

window.addEventListener('scroll', verifyAvatar)
onUnmounted(() => {
  window.removeEventListener('scroll', verifyAvatar)
})

function verifyAvatar() {
  if (
    checkIfAvatarVisibility &&
    !likesStore.getAvatarDataByProfileId(props.profileToBrowse.profileId)
  ) {
    fetchAvatarData()
  }
}

function checkIfAvatarVisibility() {
  let isVisible = false
  if (avatarRef.value) {
    const boundingBox = avatarRef.value.getBoundingClientRect()
    const { top, bottom } = boundingBox
    isVisible = top <= window.innerHeight && bottom >= 0
  }
  return isVisible
}

const avatarData = computed(() => {
  return likesStore.getAvatarDataByProfileId(props.profileToBrowse.profileId)
})

const filesService = useFilesService()
function fetchAvatarData() {
  const filename = props.profileToBrowse?.fileToBrowseDtos[0]?.filename
  if (filename) {
    filesService.downloadAvatar(
      props.profileToBrowse.profileId,
      filename,
      'likesStore',
    )
  }
}

function displayLikingProfile() {
  if (props.canBeDisplayed) {
    emit('display-liking-profile')
  }
}
</script>
