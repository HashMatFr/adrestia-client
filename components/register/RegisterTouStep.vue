<template>
  <div class="w-full flex flex-col gap-3 pb-40">
    <div class="w-full text-center flex flex-col gap-2">
      <Text :value="t('tou.title')" :upper="true"></Text>
      <Text :value="t('tou.warning')"></Text>
    </div>

    <div
      class="fixed bottom-0 left-0 w-full px-5 py-5 flex flex-row gap-5 bg-coal-800"
    >
      <CustomButton
        class="w-full"
        :label="t('actions.refuse')"
        :base="true"
        :outline="false"
        :category="'alert'"
        @click="navigateTo(localePath('/login'))"
      ></CustomButton>
      <CustomButton
        class="w-full"
        :label="t('actions.accept')"
        :base="true"
        :outline="false"
        :category="'success'"
        @click="nextRegisterStep"
      ></CustomButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomButton from '../design/CustomButton.vue'
import Text from '../design/Text.vue'

const emit = defineEmits(['next-step'])

const localePath = useLocalePath()
const { t } = useI18n()

function nextRegisterStep() {
  emit('next-step')
}
</script>
