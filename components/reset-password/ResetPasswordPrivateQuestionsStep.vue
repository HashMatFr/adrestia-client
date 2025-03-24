<template>
  <div class="w-full flex h-full">
    <form
      @submit.prevent="submitAnswers"
      class="w-full flex flex-col justify-between h-full"
    >
      <div class="flex flex-col w-full gap-5">
        <div class="flex flex-col gap-2 w-full">
          <Text :value="firstQuestion" />
          <InputValidationWrapper
            id="firstAnswer"
            ref="firstAnswerRef"
            name="firstAnswer"
            :on-change="handleChangeField"
            :rules="'required'"
            :value="firstAnswer"
            @is-field-valid="(event) => (form.firstAnswer = event)"
          />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <Text :value="secondQuestion" />
          <InputValidationWrapper
            id="secondAnswer"
            ref="secondAnswerRef"
            name="secondAnswer"
            :on-change="handleChangeField"
            :rules="'required'"
            :value="secondAnswer"
            @is-field-valid="(event) => (form.secondAnswer = event)"
          />
        </div>
      </div>

      <CustomButton
        :label="t('actions.validate')"
        :base="true"
        :outline="false"
        :borderless="false"
        :category="'success'"
        class="w-full"
        type="submit"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Text from '../design/Text.vue'
import InputValidationWrapper from '../validation/InputValidationWrapper.vue'
import CustomButton from '../design/CustomButton.vue'

const emit = defineEmits(['submit-answers'])
defineProps({
  firstQuestion: {
    type: String,
    required: true,
  },
  secondQuestion: {
    type: String,
    required: true,
  },
})
const { t } = useI18n()

// Form setting
const form = ref({
  firstAnswer: false,
  secondAnswer: false,
})
const firstAnswerRef = ref(null)
const firstAnswer = ref('')
const secondAnswerRef = ref(null)
const secondAnswer = ref('')

function handleChangeField(name, value) {
  if (name === 'firstAnswer') {
    firstAnswer.value = value
  } else if (name === 'secondAnswer') {
    secondAnswer.value = value
  }
}

function submitAnswers() {
  firstAnswerRef.value.validate()
  secondAnswerRef.value.validate()
  const isValid = form.value.firstAnswer && form.value.secondAnswer

  if (isValid) {
    emit('submit-answers', {
      firstAnswer: firstAnswer.value,
      secondAnswer: secondAnswer.value,
    })
  }
}
</script>
