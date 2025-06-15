<template>
  <div class="flex w-full h-full pt-12 text-primary">
    <div v-if="profileToBrowse" class="flex w-full h-full">
      <ProfileToBrowseCard
        :profile-to-browse="profileToBrowse"
      ></ProfileToBrowseCard>
      <div class="w-full fixed bottom-20 p-2 bg-coal-800 flex flex-row gap-2">
        <CustomButton
          :base="true"
          :outline="false"
          :category="'alert'"
          :label="t('actions.dislike')"
          class="w-full"
          @click="dislikeCurrentProfile"
          ><template #iconStart> <Cross class="mr-2" /> </template
        ></CustomButton>
        <CustomButton
          v-if="isRewindAvailable"
          :base="true"
          :outline="false"
          :label="t('actions.rewind')"
          class="w-full"
          @click="rewindToPreviousProfile"
          ><template #iconStart> <CircularArrow class="mr-2" /> </template
        ></CustomButton>
        <CustomButton
          :base="true"
          :outline="false"
          :category="'success'"
          :label="t('actions.like')"
          class="w-full"
          @click="openInitialMessageModal"
          ><template #iconStart> <Heart class="mr-2" /> </template
        ></CustomButton>
      </div>

      <!-- Like with initial message modal -->
      <Modal
        v-if="shouldDisplayInitialMessageModal"
        @on-modal-close="closeInitialMessageModal"
      >
        <template #modalHeader>
          <Text :value="t('explore.initialMessage.modalTitle')"></Text>
        </template>
        <template #modalContent>
          <div class="w-full flex flex-col gap-3 bg-coal-800 p-5 rounded-b">
            <Text :value="t('explore.initialMessage.modalExplanation')"></Text>
            <form
              novalidate
              @submit.prevent="submitInitialMessageForm"
              class="flex flex-col gap-3 w-full"
            >
              <InputValidationWrapper
                id="initialMessage"
                ref="initialMessageRef"
                type="text"
                name="initialMessage"
                :label="t('explore.initialMessage.fieldLabel')"
                :value="initialMessage"
                :rules="[
                  { name: 'unicodeLettersOrDigits' },
                  { name: 'max', param: 255 },
                ]"
                class="w-full"
                :on-change="handleChangeField"
                @is-field-valid="(event) => (form.initialMessage = event)"
              />
              <CustomButton
                :base="true"
                :outline="false"
                :category="'success'"
                :label="t('actions.like')"
                class="w-full"
                type="submit"
                ><template #iconStart> <Heart class="mr-2" /> </template
              ></CustomButton>
              <CustomButton
                class="w-full"
                :label="t('actions.cancel')"
                :category="'alert'"
                :base="true"
                :outline="false"
                @click="closeInitialMessageModal"
              ></CustomButton>
            </form>
          </div> </template
      ></Modal>

      <!-- New Match modal -->
      <Modal
        v-if="shouldDisplayNewMatchModal"
        @on-modal-close="continueBrowsing"
      >
        <template #modalHeader>
          <Text :value="t('explore.newMatch.modalTitle')"></Text>
        </template>
        <template #modalContent>
          <div class="flex flex-col gap-3 bg-coal-800 p-5 rounded-b">
            <Text :value="t('explore.newMatch.modalExplanation')"></Text>
            <CustomButton
              class="w-full"
              :label="t('actions.goToNewMatch')"
              :base="true"
              :outline="false"
              :category="'success'"
              @click="goToNewMatch"
              ><template #iconStart> <GarbageCan class="mr-2" /> </template
            ></CustomButton>
            <CustomButton
              class="w-full"
              :label="t('actions.continueBrowsing')"
              :base="true"
              :outline="false"
              @click="continueBrowsing"
              ><template #iconStart> <ArrowLeft class="mr-2" /> </template
            ></CustomButton>
          </div> </template
      ></Modal>
    </div>
    <div
      v-else
      class="flex w-full h-full items-center justify-center py-5 px-10"
    >
      <div
        class="flex w-full flex-col gap-7 text-center bg-coal-900 p-2 rounded"
      >
        <NoResults :width="92" :height="88" class="mx-auto mt-5"></NoResults>
        <Text :value="t('explore.noResults1')"></Text>
        <Text :value="t('explore.noResults2')"></Text>
        <CustomButton
          :base="true"
          :outline="false"
          :label="t('actions.changeCriteria')"
          @click="goToMatcherPage"
          ><template #iconStart> <Modify class="mr-2" /> </template
        ></CustomButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import CustomButton from '~/components/design/CustomButton.vue'
import Text from '~/components/design/Text.vue'
import ProfileToBrowseCard from '~/components/explore/ProfileToBrowseCard.vue'
import Modal from '~/components/global/Modal.vue'
import CircularArrow from '~/components/icons/CircularArrow.vue'
import Cross from '~/components/icons/Cross.vue'
import Heart from '~/components/icons/Heart.vue'
import Modify from '~/components/icons/Modify.vue'
import NoResults from '~/components/icons/NoResults.vue'
import InputValidationWrapper from '~/components/validation/InputValidationWrapper.vue'
import { useLikesService } from '~/composables/useLikesService'
import { useProfileService } from '~/composables/useProfileService'
import { useLayoutStore } from '~/stores/layoutStore'
import { useProfilesToBrowseStore } from '~/stores/profilesToBrowseStore'
import { useProfileStore } from '~/stores/profileStore'

definePageMeta({
  layout: 'default',
  middleware: ['profile-activation-guard', 'profile-completion-guard'],
})

const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('explore.pageTitle')
layoutStore.shouldDisplayHomeButton = true
layoutStore.shouldDisplaySettingsButton = true
layoutStore.shouldDisplayLanguagesSwitcher = false

const profileService = useProfileService()
const profileStore = useProfileStore()
const profilesToBrowseStore = useProfilesToBrowseStore()
const likesService = useLikesService()

// Initial fetch if needed
if (
  profilesToBrowseStore.profilesToBrowse.length === 0 ||
  profilesToBrowseStore.browseIndex >
    profilesToBrowseStore.profilesToBrowse.length
) {
  profileService.getProfilesToBrowse(
    profileStore.matcher,
    profileStore.latitude,
    profileStore.longitude,
  )
}

const profileToBrowse = computed(() => {
  if (profilesToBrowseStore.profilesToBrowse.length > 0) {
    return profilesToBrowseStore.profilesToBrowse[
      profilesToBrowseStore.browseIndex
    ]
  } else {
    return null
  }
})

const isRewindAvailable = computed(() => {
  const index =
    profilesToBrowseStore.browseIndex === 0
      ? 0
      : profilesToBrowseStore.browseIndex - 1
  return profilesToBrowseStore.rewindAvailabilities[index]
})

function rewindToPreviousProfile() {
  if (isRewindAvailable.value) {
    profilesToBrowseStore.rewindToPreviousProfile()
  }
}

function dislikeCurrentProfile() {
  likesService
    .likeProfile(profileToBrowse.value.profileId, false, null)
    .then((result) => {
      profilesToBrowseStore.pushRewindAvailability(true)
      goToNextProfile()
    })
}

const shouldDisplayInitialMessageModal = ref(false)

function openInitialMessageModal() {
  shouldDisplayInitialMessageModal.value = true
}

// Initial Message Form setting
const initialMessage = ref('')
const form = ref({
  initialMessage: false,
})
const initialMessageRef = ref(null)

function handleChangeField(name, value) {
  if (name === 'initialMessage') {
    initialMessage.value = value
  }
}

async function submitInitialMessageForm() {
  initialMessageRef.value.validate()
  const isValid = form.value.initialMessage

  if (isValid) {
    likeCurrentProfile()
  }
}

function closeInitialMessageModal() {
  shouldDisplayInitialMessageModal.value = false
  initialMessage.value = ''
  form.value.initialMessage = false
}

function likeCurrentProfile() {
  likesService
    .likeProfile(profileToBrowse.value.profileId, true, initialMessage.value)
    .then((result) => {
      if (result) {
        // Propose to see the new match
        shouldDisplayNewMatchModal.value = true
      } else {
        profilesToBrowseStore.pushRewindAvailability(result)
        goToNextProfile()
      }
    })
}

function goToNextProfile() {
  const isNext = profilesToBrowseStore.goToNextProfile()
  if (!isNext) {
    profilesToBrowseStore.resetBrowsing()
    profileService.getProfilesToBrowse(
      profileStore.matcher,
      profileStore.latitude,
      profileStore.longitude,
    )
  }
}

const localePath = useLocalePath()
function goToMatcherPage() {
  return navigateTo(localePath('/matcher'))
}

// New Match Management
const shouldDisplayNewMatchModal = ref(false)

function goToNewMatch() {
  shouldDisplayNewMatchModal.value = false
  profilesToBrowseStore.resetBrowsing()
  return navigateTo(localePath('/matches'))
}

function continueBrowsing() {
  shouldDisplayNewMatchModal.value = false
  profilesToBrowseStore.pushRewindAvailability(true)
  goToNextProfile()
}
</script>
