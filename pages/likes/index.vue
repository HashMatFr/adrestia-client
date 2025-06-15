<template>
  <div class="flex w-full h-full pt-12 text-primary">
    <div v-if="areLikesLoading">Loader ...</div>
    <div
      v-else-if="!areLikesLoading && likesStore.receivedLikes.length > 0"
      class="flex w-full h-full"
    >
      <!-- Likes list displays -->
      <div
        v-if="!profileToBrowse.profileId"
        class="flex w-full h-full p-3 flex-col gap-3"
      >
        <LikeCard
          v-for="(like, index) in likesStore.receivedLikes"
          :profile-to-browse="like.giverProfileToBrowseDto"
          :createdAt="like.createdAt"
          :can-be-displayed="
            profileStore.hasSubscription ||
            (!profileStore.hasSubscription && index < 1)
          "
          @display-liking-profile="
            displayLikingProfile(like.giverProfileToBrowseDto)
          "
        ></LikeCard>
      </div>

      <!-- Focused Profile To Browse -->
      <div v-else class="flex w-full h-full">
        <ProfileToBrowseCard
          :profile-to-browse="profileToBrowse"
        ></ProfileToBrowseCard>
        <div class="w-full fixed bottom-20 p-2 bg-coal-800 flex flex-row gap-2">
          <CustomButton
            :base="true"
            :outline="false"
            class="w-full"
            @click="likesStore.focusedGiverProfileToBrowse = {}"
            ><template #iconStart> <ArrowLeft class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            :base="true"
            :outline="false"
            :category="'alert'"
            class="w-full"
            @click="doNotMatchProfile"
            ><template #iconStart> <Cross class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            :base="true"
            :outline="false"
            :category="'success'"
            class="w-full"
            @click="matchProfile"
            ><template #iconStart> <Heart class="mr-2" /> </template
          ></CustomButton>
        </div>

        <!-- New Match modal -->
        <Modal
          v-if="shouldDisplayNewMatchModal"
          @on-modal-close="continueToManageLikes"
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
                :category="'alert'"
                @click="goToNewMatch"
                ><template #iconStart> <GarbageCan class="mr-2" /> </template
              ></CustomButton>
              <CustomButton
                class="w-full"
                :label="t('actions.continueBrowsing')"
                :base="true"
                :outline="false"
                @click="continueToManageLikes"
                ><template #iconStart> <ArrowLeft class="mr-2" /> </template
              ></CustomButton>
            </div> </template
        ></Modal>
      </div>
    </div>
    <div
      v-else
      class="flex w-full h-full items-center justify-center py-5 px-10"
    >
      <div
        class="flex w-full flex-col gap-7 text-center bg-coal-900 p-2 rounded"
      >
        <NoResults :width="92" :height="88" class="mx-auto mt-5"></NoResults>
        <Text :value="t('likes.noResults1')"></Text>
        <Text :value="t('likes.noResults2')"></Text>
        <CustomButton
          :base="true"
          :outline="false"
          :label="t('actions.managePhotos')"
          @click="goToPhotosPage"
          ><template #iconStart> <Modify class="mr-2" /> </template
        ></CustomButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import CustomButton from '~/components/design/CustomButton.vue'
import ProfileToBrowseCard from '~/components/explore/ProfileToBrowseCard.vue'
import Modal from '~/components/global/Modal.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import Cross from '~/components/icons/Cross.vue'
import Heart from '~/components/icons/Heart.vue'
import LikeCard from '~/components/likes/LikeCard.vue'
import { useLikesService } from '~/composables/useLikesService'
import { ProfileToBrowse } from '~/constants/types'
import { useLikesStore } from '~/stores/likesStore'
import { useProfileStore } from '~/stores/profileStore'

definePageMeta({
  layout: 'default',
  middleware: ['profile-activation-guard'],
})
const { t } = useI18n()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('likes.pageTitle')
layoutStore.shouldDisplayHomeButton = true
layoutStore.shouldDisplaySettingsButton = true
layoutStore.shouldDisplayLanguagesSwitcher = false

const areLikesLoading = ref(true)
const likesService = useLikesService()
const likesStore = useLikesStore()
const profileStore = useProfileStore()

// Initial likes fetch
getReceivedLikes()

function getReceivedLikes() {
  likesService
    .getReceivedLikesByProfileId(profileStore.latitude, profileStore.longitude)
    .then(() => {
      areLikesLoading.value = false
    })
}

const profileToBrowse = computed(() => {
  return likesStore.focusedGiverProfileToBrowse
})

function displayLikingProfile(profileToBrowse: ProfileToBrowse) {
  likesStore.focusedGiverProfileToBrowse = profileToBrowse
}

function doNotMatchProfile() {
  likesService
    .likeProfile(profileToBrowse.value.profileId, false)
    .then((result) => {
      getReceivedLikes()
    })
}

function matchProfile() {
  likesService
    .likeProfile(profileToBrowse.value.profileId, true)
    .then((result) => {
      if (result) {
        // Propose to see the new match
        shouldDisplayNewMatchModal.value = true
      }
    })
}

// New Match Management
const localePath = useLocalePath()
const shouldDisplayNewMatchModal = ref(false)

function goToNewMatch() {
  shouldDisplayNewMatchModal.value = false
  likesStore.focusedGiverProfileToBrowse = {}
  return navigateTo(localePath('/matches'))
}

function continueToManageLikes() {
  shouldDisplayNewMatchModal.value = false
  likesStore.focusedGiverProfileToBrowse = {}
  getReceivedLikes()
}

function goToPhotosPage() {
  return navigateTo(localePath('/photos'))
}
</script>
