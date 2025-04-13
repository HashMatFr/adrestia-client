<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col gap-2 w-full">
      <Check></Check>
      <Text :value="t('resetPassword.result1')" />
      <Text :value="t('resetPassword.result2')" />
      <Text :value="t('resetPassword.result2')" />
    </div>

    <CustomButton
      :label="t('actions.login')"
      :base="true"
      :outline="false"
      :borderless="false"
      class="w-fit"
      :category="'success'"
      @click="backToLogin"
    ></CustomButton>
  </div>
</template>
<script setup lang="ts">
import Check from '../icons/Check.vue'
import Text from '../design/Text.vue'

const { t } = useI18n()

async function backToLogin() {
  return navigateTo(localePath('/login'))
}
</script>
