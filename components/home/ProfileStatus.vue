<template>
  <div class="w-full flex flex-col border border-coal-900 rounded">
    <div
      class="w-full flex flex-row gap-5 bg-coal-900 rounded-t p-3 items-center"
    >
      <Warning class="text-main-500"></Warning>
      <Text :value="t('home.profileStatus.label')"></Text>
    </div>
    <div class="w-full flex flex-col gap-3 p-3 text-center">
      <Text
        v-if="existingFilesReferencesLength < 2"
        :value="t('home.profileStatus.photoWarning')"
      ></Text>
      <Text
        v-if="!isDescriptionCompleted"
        :value="t('home.profileStatus.descriptionWarning')"
      ></Text>
    </div>
  </div>
</template>
<script setup lang="ts">
import Text from '../design/Text.vue'
import Warning from '../icons/Warning.vue'

defineProps({
  existingFilesReferencesLength: {
    type: Number,
    required: true,
  },
  isDescriptionCompleted: {
    type: Boolean,
    required: true,
  },
})

const { t } = useI18n()
</script>
