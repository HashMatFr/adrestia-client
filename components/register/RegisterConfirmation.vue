<template>
  <div
    class="flex flex-col gap-8 w-full items-center h-full justify-center text-primary"
  >
    <Text
      :value="t('register.confirmation.title')"
      font-size="xl"
      font-weight="semibold"
    />
    <div class="flex flex-col gap-5 text-center">
      <Text
        :value="t('register.confirmation.description1')"
        class="text-secondary"
      />
      <Text
        :value="t('register.confirmation.description2')"
        class="text-secondary"
      />
      <Text
        :value="t('register.confirmation.description3')"
        class="text-secondary"
      />
    </div>
    <CustomButton
      :label="t('actions.login')"
      class="w-full text-black"
      :base="true"
      :outline="true"
      :borderless="false"
      @click="navigateTo(localePath('/login'))"
    />
  </div>
</template>
<script setup lang="ts">
import CustomButton from '../design/CustomButton.vue'
import Text from '../design/Text.vue'

const { t } = useI18n()
const localePath = useLocalePath()
</script>
