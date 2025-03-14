<template>
  <div class="flex flex-col gap-7 text-primary pb-40">
    <ProfileItem :label="t('profile.infos.username')" :content="username">
      <template #itemIcon
        ><IdBadge :width="28" :height="28"></IdBadge
      ></template>
    </ProfileItem>

    <ProfileItem
      :label="t('profile.infos.education')"
      :content="education"
      :is-content-tag="true"
    >
      <template #itemIcon
        ><GraduationHat :width="28" :height="28"></GraduationHat
      ></template>
    </ProfileItem>

    <ProfileItem :label="t('profile.infos.city')" :content="city">
      <template #itemIcon
        ><Skyline :width="28" :height="28"></Skyline
      ></template>
    </ProfileItem>

    <ProfileItem :label="t('profile.infos.job')" :content="job">
      <template #itemIcon
        ><BusinessCase :width="28" :height="28"></BusinessCase
      ></template>
    </ProfileItem>

    <ProfileItem :label="t('profile.infos.bio')" :content="bio">
      <template #itemIcon
        ><Feather :width="28" :height="28"></Feather
      ></template>
    </ProfileItem>

    <div
      class="flex flex-row fixed left-0 w-full p-2 gap-2 bg-coal-800 bottom-20"
    >
      <CustomButton
        class="w-full"
        :label="t('actions.back')"
        :base="true"
        :outline="false"
        :borderless="false"
        @click="navigateTo(localePath('/home'))"
      >
        <template #iconStart> <ArrowLeft class="mr-1.5" /> </template
      ></CustomButton>
      <CustomButton
        :label="t('actions.modify')"
        class="w-full"
        :base="true"
        :outline="false"
        :borderless="false"
        @click="onModify()"
        ><template #iconStart> <Modify class="mr-1.5" /> </template
      ></CustomButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProfileStore } from '~/stores/profileStore'
import { computed } from 'vue'
import CustomButton from '../design/CustomButton.vue'
import Modify from '../icons/Modify.vue'
import Skyline from '../icons/Skyline.vue'
import GraduationHat from '../icons/GraduationHat.vue'
import IdBadge from '../icons/IdBadge.vue'
import BusinessCase from '../icons/BusinessCase.vue'
import Feather from '../icons/Feather.vue'
import ProfileItem from '../design/ProfileItem.vue'

const { t } = useI18n()
const profileStore = useProfileStore()
const localePath = useLocalePath()
const emit = defineEmits(['on-modify', 'on-next'])

const username = computed(() => {
  return profileStore.username
    ? profileStore.username
    : t('profile.infos.notCompleted')
})
const bio = computed(() => {
  return profileStore.bio ? profileStore.bio : t('profile.infos.notCompleted')
})
const job = computed(() => {
  return profileStore.job ? profileStore.job : t('profile.infos.notCompleted')
})
const city = computed(() => {
  return profileStore.city ? profileStore.city : t('profile.infos.notCompleted')
})
const education = computed(() => {
  return t('profile.enums.education.' + profileStore.education)
})

function onModify() {
  emit('on-modify')
}

function onNext() {
  emit('on-next')
}
</script>
