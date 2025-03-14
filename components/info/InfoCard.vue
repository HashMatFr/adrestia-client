<template>
  <div class="flex w-full">
    <InfoDisplayCard
      v-if="!isUpdateMode"
      @on-modify="setIsUpdateMode(true)"
    ></InfoDisplayCard>
    <InfoUpdateCard
      v-else
      :city="city"
      :bio="bio"
      :username="username"
      :education="education"
      :job="job"
      @on-update="updateDetail"
      @on-cancel="setIsUpdateMode(false)"
      @update-field="updateField"
    ></InfoUpdateCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProfileService } from '~/composables/useProfileService'
import { Infos } from '~/constants/types'
import { useProfileStore } from '~/stores/profileStore'
import InfoDisplayCard from './InfoDisplayCard.vue'
import InfoUpdateCard from './InfoUpdateCard.vue'

const profileService = useProfileService()
const profileStore = useProfileStore()

const isUpdateMode = ref(false)

function setIsUpdateMode(bool) {
  isUpdateMode.value = bool
}

const city = ref('')
city.value = profileStore.city

const job = ref('')
job.value = profileStore.job

const education = ref('')
education.value = profileStore.education

const bio = ref('')
bio.value = profileStore.bio

const username = ref('')
username.value = profileStore.username

function updateField(values) {
  switch (values.name) {
    case 'city':
      city.value = values.value
      break
    case 'job':
      job.value = values.value
      break
    case 'bio':
      bio.value = values.value
      break
    case 'education':
      education.value = values.value
      break
    case 'username':
      username.value = values.value
      break
    default:
      break
  }
}

function updateDetail() {
  const newInfos: Infos = {
    city: city.value,
    bio: bio.value,
    job: job.value,
    education: education.value,
    username: username.value,
  }
  profileService.updateInfos(newInfos)
  setIsUpdateMode(false)
}
</script>
