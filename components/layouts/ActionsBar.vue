<template>
  <div
    class="fixed flex bottom-0 left-0 right-0 h-20 bg-coal-950 text-main-50 items-center p-2 z-100"
  >
    <div class="w-full grid grid-cols-5 h-full gap-1">
      <nuxt-link
        :class="[
          'flex flex-col gap-2 p-2 items-center rounded',
          { 'bg-black': route.name.includes('home') },
        ]"
        :to="
          localePath({
            name: 'home',
          })
        "
      >
        <List :width="24" :height="24"></List>
        <Text font-size="s" :value="t('actionsBar.home')" class="flex"></Text>
      </nuxt-link>
      <nuxt-link
        :class="[
          'flex flex-col gap-2 p-2 items-center rounded',
          { 'bg-black': route.name.includes('matcher') },
        ]"
        :to="
          localePath({
            name: 'matcher',
          })
        "
      >
        <Criteria :height="24"></Criteria>
        <Text
          font-size="s"
          :value="t('actionsBar.matcher')"
          class="flex"
        ></Text>
      </nuxt-link>
      <nuxt-link
        :class="[
          'flex flex-col gap-2 p-2 items-center rounded',
          { 'bg-black': route.name.includes('explore') },
        ]"
        :to="
          localePath({
            name: 'explore',
          })
        "
      >
        <Compass :height="24"></Compass>
        <Text
          font-size="s"
          :value="t('actionsBar.explore')"
          class="flex"
        ></Text>
      </nuxt-link>
      <nuxt-link
        :class="[
          'flex flex-col gap-2 p-2 items-center rounded',
          { 'bg-black': route.name.includes('likes') },
        ]"
        :to="
          localePath({
            name: 'likes',
          })
        "
      >
        <div class="relative flex">
          <Heart :height="24"></Heart>
          <div
            class="absolute -top-2 -right-3 rounded-full bg-red px-1 items-center"
          >
            <Text :value="likesCounter" class="text-white"></Text>
          </div>
        </div>

        <Text :value="t('actionsBar.likes')" font-size="s" class="flex"></Text>
      </nuxt-link>
      <nuxt-link
        :class="[
          'relative flex flex-col gap-2 p-2 items-center rounded',
          { 'bg-black': route.name.includes('matches') },
        ]"
        :to="
          localePath({
            name: 'matches',
          })
        "
      >
        <div class="relative flex">
          <Message :height="24"></Message>
          <div
            class="absolute -top-2 -right-3 rounded-full bg-red px-1 items-center"
          >
            <Text :value="messagesCounter" class="text-white"></Text>
          </div>
        </div>
        <Text
          :value="t('actionsBar.messages')"
          font-size="s"
          class="flex"
        ></Text>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Text from '../design/Text.vue'
import Compass from '../icons/Compass.vue'
import Message from '../icons/Message.vue'
import { useProfileStore } from '~/stores/profileStore'
import Criteria from '../icons/Criteria.vue'
import Heart from '../icons/Heart.vue'
import List from '../icons/List.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const profileStore = useProfileStore()

const messagesCounter = computed(() => {
  const count = profileStore.messagesCount
  if (count > 99) {
    return '99+'
  } else {
    return count.toString()
  }
})

const likesCounter = computed(() => {
  const count = profileStore.likesCount
  if (count > 99) {
    return '99+'
  } else {
    return count.toString()
  }
})
</script>
