<template>
  <div class="flex flex-col gap-2 w-full h-full pt-12 pb-20 text-primary">
    <div
      class="flex flex-row justify-between w-full px-5 py-3 mt-2 bg-coal-900 items-center"
      @click="openLogoutModal"
    >
      <Text :value="t('actions.logout')"></Text>
      <CircleArrow></CircleArrow>
    </div>

    <div
      class="flex flex-row justify-between w-full px-5 py-3 bg-coal-900 items-center"
      @click="goToStats"
    >
      <Text :value="t('stats.pageTitle')"></Text>
      <StatsGraph></StatsGraph>
    </div>

    <div
      class="flex flex-row justify-between w-full px-5 py-3 bg-coal-900 items-center"
      @click="goToProfileState"
    >
      <Text :value="t('state.pageTitle')"></Text>
      <Pause></Pause>
    </div>

    <div
      class="flex flex-row justify-between w-full px-5 py-3 bg-coal-900 items-center"
      @click="goToUpdatePassword"
    >
      <Text :value="t('updatePassword.pageTitle')"></Text>
      <Key></Key>
    </div>

    <!-- Logout Confirmation Modal -->
    <Modal v-if="shouldDisplayLogoutModal" @on-modal-close="closeLogoutModal">
      <template #modalHeader>
        <Text :value="t('settings.logoutLabel')"></Text>
      </template>
      <template #modalContent>
        <div class="flex flex-col gap-3 bg-coal-800 p-5 rounded-b">
          <Text :value="t('settings.logoutConfirmation')"></Text>
          <CustomButton
            class="w-full"
            :label="t('actions.logout')"
            :base="true"
            :outline="false"
            :borderless="false"
            :category="'success'"
            @click="logout"
            ><template #iconStart> <CircleArrow class="mr-2" /> </template
          ></CustomButton>
          <CustomButton
            class="w-full"
            :label="t('actions.cancel')"
            :base="true"
            :outline="false"
            :borderless="false"
            @click="closeLogoutModal"
            ><template #iconStart> <ArrowLeft class="mr-2" /> </template
          ></CustomButton>
        </div> </template
    ></Modal>
  </div>
</template>
<script setup lang="ts">
import Text from '~/components/design/Text.vue'
import { authService } from '~/authentication/authService'
import CircleArrow from '~/components/icons/CircleArrow.vue'
import { useLayoutStore } from '~/stores/layoutStore'
import StatsGraph from '~/components/icons/StatsGraph.vue'
import Pause from '~/components/icons/Pause.vue'
import CustomButton from '~/components/design/CustomButton.vue'
import Modal from '~/components/global/Modal.vue'
import { ref } from 'vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import Key from '~/components/icons/Key.vue'

definePageMeta({
  layout: 'default',
  middleware: [],
})

const { t } = useI18n()
const localePath = useLocalePath()
const layoutStore = useLayoutStore()
layoutStore.pageTitle = t('settings.pageTitle')
const shouldDisplayLogoutModal = ref(false)

function openLogoutModal() {
  shouldDisplayLogoutModal.value = true
}
function closeLogoutModal() {
  shouldDisplayLogoutModal.value = false
}
function logout() {
  authService.logout()
  return navigateTo(localePath('/login'))
}

function goToStats() {
  return navigateTo(localePath('/settings/stats'))
}

function goToProfileState() {
  return navigateTo(localePath('/settings/state'))
}

function goToUpdatePassword() {
  return navigateTo(localePath('/settings/update-password'))
}
</script>
