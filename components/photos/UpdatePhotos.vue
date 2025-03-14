<template>
  <div class="w-full flex flex-col gap-3 text-center">
    <Text :value="t('photos.manageDescription')"></Text>
  </div>
  <div
    :class="[
      'w-full flex grid grid-cols-2 gap-3 justify-center',
      { 'pb-20': photosStore.focusedCard != -1 },
    ]"
  >
    <PhotoCard
      v-for="(ref, index) in photosStore.filesReferences"
      :index="index"
      :file-reference="ref"
      @delete-photo="confirmPhotoDeletion"
    ></PhotoCard>
    <div
      v-if="
        photosStore.focusedCard != -1 &&
        photosStore.filesReferences[photosStore.focusedCard].fileReferenceId &&
        existingFilesReferencesLength > 1
      "
      class="flex flex-row fixed bottom-20 left-0 w-full p-2 gap-2 bg-coal-800"
    >
      <CustomButton
        class="w-full text-accent-500"
        :base="true"
        :outline="false"
        :borderless="false"
        :disabled="
          photosStore.filesReferences[photosStore.focusedCard].fileIndex === 0
        "
        @click="changeIndex('up')"
        ><template #iconStart> <ArrowLeft class="rotate-90" /> </template
      ></CustomButton>
      <CustomButton
        class="w-full text-accent-500"
        :base="true"
        :outline="false"
        :borderless="false"
        :disabled="
          !photosStore.filesReferences[photosStore.focusedCard + 1].fileIndex
        "
        @click="changeIndex('down')"
        ><template #iconStart> <ArrowLeft class="-rotate-90" /> </template
      ></CustomButton>
    </div>

    <!-- Photo Deletion Modal -->
    <Modal v-if="shouldDisplayDeleteModal" @on-modal-close="closeModal">
      <template #modalHeader>
        <Text :value="t('photos.deletion.modalTitle')"></Text>
      </template>
      <template #modalContent>
        <div class="flex flex-col gap-3 bg-coal-800 p-5 rounded-b">
          <Text :value="t('photos.deletion.modalExplanation')"></Text>
          <CustomButton
            class="w-full"
            :label="t('actions.delete')"
            :base="true"
            :outline="false"
            :borderless="false"
            :category="'alert'"
            @click="deletePhoto"
            ><template #iconStart> <GarbageCan class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            class="w-full"
            :label="t('actions.cancel')"
            :base="true"
            :outline="false"
            :borderless="false"
            @click="closeModal"
            ><template #iconStart> <ArrowLeft class="mr-2" /> </template
          ></CustomButton>
        </div> </template
    ></Modal>
  </div>
</template>
<script setup lang="ts">
import { usePhotosStore } from '~/stores/photosStore'
import PhotoCard from './PhotoCard.vue'
import { useFilesService } from '~/composables/useFilesService'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { useProfileStore } from '~/stores/profileStore'
import ArrowLeft from '../icons/ArrowLeft.vue'
import CustomButton from '../design/CustomButton.vue'
import { computed, ref } from 'vue'
import Modal from '../global/Modal.vue'
import GarbageCan from '../icons/GarbageCan.vue'
import Text from '../design/Text.vue'
import { FileReference } from '~/constants/types'
defineCustomElements(window)

const { t } = useI18n()
const filesService = useFilesService()
const profileStore = useProfileStore()
const photosStore = usePhotosStore()

// Initial fetch of references and downloading data once
filesService.getFilesReferences().then(() => {
  photosStore.filesReferences.forEach((ref) => {
    if (ref.fileReferenceId && !photosStore.photos[ref.filename].dataUrl) {
      filesService.downloadFile(profileStore.profileId, ref.filename)
    }
  })
})

const existingFilesReferencesLength = computed(() => {
  return photosStore.filesReferences.filter((ref) => ref.fileReferenceId).length
})

function changeIndex(direction: string) {
  const refFrom: FileReference =
    photosStore.filesReferences[photosStore.focusedCard]
  let refIdTo
  if (direction === 'up' && refFrom.fileIndex > 0) {
    refIdTo =
      photosStore.filesReferences[photosStore.focusedCard - 1].fileReferenceId
  } else if (
    direction === 'down' &&
    refFrom.fileIndex < existingFilesReferencesLength.value - 1
  ) {
    refIdTo =
      photosStore.filesReferences[photosStore.focusedCard + 1].fileReferenceId
  }
  if (refIdTo) {
    filesService.changeFilesReferencesOrder(refFrom.fileReferenceId, refIdTo)
  }
}

// Photo Deletion Modal
const shouldDisplayDeleteModal = ref(false)
const refIdToDelete = ref('')

function confirmPhotoDeletion(refId) {
  if (existingFilesReferencesLength.value > 1) {
    shouldDisplayDeleteModal.value = true
    refIdToDelete.value = refId
  }
}

function deletePhoto() {
  if (refIdToDelete.value && existingFilesReferencesLength.value > 1) {
    filesService.deleteFile(refIdToDelete.value)
    closeModal()
  }
}

function closeModal() {
  shouldDisplayDeleteModal.value = false
  refIdToDelete.value = ''
}
</script>
