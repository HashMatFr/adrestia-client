<template>
  <div
    :class="[
      'relative flex w-full h-72 bg-coal-900 rounded',
      {
        'border-3 border-solid border-main-500': isCardFocused,
        'border-2 border-dashed border-main-200': !isCardFocused,
      },
    ]"
    @click="focusCard"
  >
    <Text
      v-if="!getPhotoData"
      :value="placeholder"
      class="px-2 italic flex w-full h-auto text-center my-auto"
    ></Text>
    <img v-else :src="getPhotoData" :alt="placeholder" class="object-cover" />
    <div class="w-full absolute bottom-2 px-2 flex flex-row gap-3">
      <CustomButton
        v-if="isCardFocused && fileReference.fileReferenceId"
        class="w-full"
        :base="true"
        :outline="false"
        :borderless="false"
        :category="'alert'"
        @click="deletePhoto"
        ><template #iconStart> <GarbageCan /> </template
      ></CustomButton>
      <CustomButton
        v-if="isCardFocused && fileReference.fileReferenceId"
        class="w-full"
        :base="true"
        :outline="false"
        :borderless="false"
        @click="modifyPhoto"
        ><template #iconStart> <Modify /> </template
      ></CustomButton>
      <CustomButton
        v-if="!fileReference.fileReferenceId"
        class="w-full"
        :base="true"
        :outline="false"
        :borderless="false"
        :category="'success'"
        @click="addPhoto"
        ><template #iconStart> <Plus /> </template
      ></CustomButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, PropType } from 'vue'
import { FileReference } from '~/constants/types'
import { usePhotosStore } from '~/stores/photosStore'
import GarbageCan from '../icons/GarbageCan.vue'
import Modify from '../icons/Modify.vue'
import Plus from '../icons/Plus.vue'
import Text from '../design/Text.vue'
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera'
import { useFilesService } from '~/composables/useFilesService'
import CustomButton from '../design/CustomButton.vue'
import { useProfileService } from '~/composables/useProfileService'

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  fileReference: {
    type: Object as PropType<FileReference>,
    required: true,
  },
})

const emit = defineEmits(['delete-photo'])

const { t } = useI18n()
const photosStore = usePhotosStore()
const filesService = useFilesService()
const profileService = useProfileService()

const isCardFocused = computed(() => {
  return photosStore.focusedCard === props.index
})

const getPhotoData = computed(() => {
  return photosStore.photos[props.fileReference.filename]?.dataUrl
})

const placeholder = computed(() => {
  return t('photos.card.placeholder' + (props.index + 1))
})

function focusCard() {
  if (isCardFocused.value) {
    photosStore.focusedCard = -1
  } else {
    photosStore.focusedCard = props.index
  }
}

async function addPhoto() {
  const newPhoto: Photo = await Camera.getPhoto({
    resultType: CameraResultType.DataUrl,
    allowEditing: true,
    source: CameraSource.Camera,
    quality: 60,
    height: 300,
  })

  const correctIndex = photosStore.filesReferences.filter(
    (ref) => ref.fileReferenceId,
  ).length

  const formData = new FormData()
  formData.append('initialFileIndex', correctIndex.toString())
  fetch(newPhoto.dataUrl)
    .then((res) => res.blob())
    .then(async (blob) => {
      formData.append(
        'multipartFile',
        new File([blob], 'photo' + props.index + '.jpeg', {
          type: 'image/jpeg',
        }),
      )

      const newReference = await filesService.addFile(formData, correctIndex)
      if (newReference && photosStore.photos[newReference.filename]) {
        photosStore.photos[newReference.filename].dataUrl = newPhoto.dataUrl

        // If the profile has at least one photo, it should be activated
        if (newReference.fileIndex === 0) {
          profileService.updateProfileActivationStatus(true)
        }
      }
    })
}

async function modifyPhoto() {
  if (photosStore.filesReferences[props.index].fileReferenceId) {
    const newPhoto: Photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      allowEditing: true,
      source: CameraSource.Camera,
      quality: 60,
    })

    const formData = new FormData()
    formData.append(
      'fileReferenceId',
      photosStore.filesReferences[props.index].fileReferenceId,
    )
    fetch(newPhoto.dataUrl)
      .then((res) => res.blob())
      .then(async (blob) => {
        formData.append(
          'multipartFile',
          new File([blob], 'photo' + props.index + '.jpeg', {
            type: 'image/jpeg',
          }),
        )

        const updatedReference: FileReference = await filesService.updateFile(
          formData,
          props.index,
        )
        if (updatedReference) {
          photosStore.photos[updatedReference.filename].dataUrl =
            newPhoto.dataUrl
        }
      })
  }
}

function deletePhoto() {
  emit('delete-photo', props.fileReference.fileReferenceId)
}
</script>
