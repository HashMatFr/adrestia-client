import { defineStore } from 'pinia'
import { Match, Message } from '~/constants/types'

export const useActiveMatchStore = defineStore('activeMatch', {
  state: () => ({
    focusedMatch: <Match>null,
    messages: <Message[]>[],
    focusedMessage: <Message>null,
  }),
  getters: {},
  actions: {
    addMessage(message) {
      this.messages.push(message)
    },
  },
})
