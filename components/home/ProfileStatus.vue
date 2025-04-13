<template>
  <div class="w-full flex flex-col text-center gap-3">
    <div
      v-if="!stateStore.hasEmailBeenVerified"
      class="flex flex-row justify-between w-full bg-coal-900 p-3 rounded items-center"
    >
      <HtmlText
        class="pr-3"
        :value="t('home.profileStatus.emailValidationWarning')"
      ></HtmlText>
      <CustomButton
        class="h-min"
        :label="''"
        :base="true"
        :outline="false"
        :borderless="false"
        :size="'small'"
        @click="goToValidateEmail()"
      >
        <template #iconEnd>
          <ArrowLeft :height="18" class="rotate-180" /> </template
      ></CustomButton>
    </div>

    <div
      v-if="!stateStore.respectsMinimumPhotosLimit"
      class="flex flex-row justify-between w-full bg-coal-900 p-3 rounded items-center"
    >
      <HtmlText
        class="pr-3"
        :value="t('home.profileStatus.photosWarning')"
      ></HtmlText>
      <CustomButton
        class="h-min"
        :label="''"
        :base="true"
        :outline="false"
        :borderless="false"
        :size="'small'"
        @click="goToPhotos()"
      >
        <template #iconEnd> <Photo :height="18" /> </template
      ></CustomButton>
    </div>

    <div
      v-if="!stateStore.activationState"
      class="flex flex-row justify-between w-full bg-coal-900 p-3 rounded items-center"
    >
      <Text
        class="pr-3"
        :value="t('home.profileStatus.activationWarning')"
      ></Text>
      <CustomButton
        class="h-min"
        :label="''"
        :base="true"
        :outline="false"
        :borderless="false"
        :size="'small'"
        @click="goToSettingsState()"
      >
        <template #iconEnd>
          <ArrowLeft :height="18" class="rotate-180" /> </template
      ></CustomButton>
    </div>

    <div
      v-if="!isDescriptionCompleted"
      class="flex flex-row justify-between w-full bg-coal-900 p-3 rounded items-center"
    >
      <HtmlText
        class="pr-3"
        :value="t('home.profileStatus.descriptionWarning')"
      ></HtmlText>
      <CustomButton
        class="h-min"
        :label="''"
        :base="true"
        :outline="false"
        :borderless="false"
        :size="'small'"
        @click="goToProfileDescription()"
      >
        <template #iconEnd>
          <ArrowLeft :height="18" class="rotate-180" /> </template
      ></CustomButton>
    </div>

    <div
      v-if="
        isDescriptionCompleted &&
        stateStore.activationState &&
        stateStore.respectsMinimumPhotosLimit &&
        stateStore.hasEmailBeenVerified
      "
      class="flex flex-row justify-between w-full bg-coal-900 p-3 rounded items-center"
    >
      <Text class="pr-3" :value="t('home.profileStatus.noWarnings')"></Text>
      <Check :height="18" class="text-success"></Check>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStateStore } from '~/stores/stateStore'
import Text from '../design/Text.vue'
import { computed } from 'vue'
import { useProfileStore } from '~/stores/profileStore'
import CustomButton from '../design/CustomButton.vue'
import ArrowLeft from '../icons/ArrowLeft.vue'
import Check from '../icons/Check.vue'
import Photo from '../icons/Photo.vue'
import HtmlText from '../design/HtmlText.vue'

const { t } = useI18n()
const stateStore = useStateStore()
const profileStore = useProfileStore()

const isDescriptionCompleted = computed(() => {
  return profileStore.detail.sex !== 'NOT_AVAILABLE'
})

const localePath = useLocalePath()
function goToValidateEmail() {
  return navigateTo(localePath('/validate-email'))
}

function goToPhotos() {
  return navigateTo(localePath('/photos'))
}

function goToSettingsState() {
  return navigateTo(localePath('/settings/state'))
}

function goToProfileDescription() {
  return navigateTo(localePath('/profile'))
}
</script>
