<template>
  <div class="flex flex-row gap-5 items-center w-full">
    <slot name="itemIcon"></slot>
    <div class="flex flex-col gap-2 pl-5 border-l border-primary">
      <HtmlText :value="label" />
      <div v-if="content" class="flex">
        <Text
          v-if="typeof content === 'string'"
          :value="content"
          :class="[
            'flex text-main-500 text-center',
            {
              'border-2 border-main-500 rounded-full py-1 px-2 w-fit':
                isContentTag,
            },
          ]"
        />
        <div v-else class="flex flex-wrap gap-2 items-center">
          <Text
            v-for="item in content"
            :value="item"
            :class="[
              'flex text-main-500 text-center',
              {
                'border-2 border-main-500 rounded-full py-1 px-2 w-fit':
                  isContentTag,
              },
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HtmlText from './HtmlText.vue'
import Text from './Text.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  content: {
    type: [String, Array<string>],
    required: false,
  },
  isContentTag: {
    type: Boolean,
    default: false,
  },
})
</script>
