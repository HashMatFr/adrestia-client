<template>
  <div class="w-full flex flex-col gap-7 h-full">
    <div class="w-full flex flex-col gap-2">
      <Check :width="92" :height="92"></Check>
      <Text :value="t('resetPassword.result1')" />
      <Text :value="t('resetPassword.result2')" />
      <Text :value="t('resetPassword.result2')" />
    </div>

    <CustomButton
      :label="t('actions.login')"
      :base="true"
      :outline="false"
      class="w-fit"
      :category="'success'"
      @click="backToLogin"
    ></CustomButton>
  </div>
</template>
<script setup lang="ts">
import Check from '../icons/Check.vue'
import Text from '../design/Text.vue'
import CustomButton from '../design/CustomButton.vue'

const { t } = useI18n()
const localePath = useLocalePath()

async function backToLogin() {
  return navigateTo(localePath('/login'))
}
</script>
