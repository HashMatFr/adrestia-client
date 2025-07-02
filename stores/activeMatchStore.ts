import { defineStore } from 'pinia'
import { Match, Message } from '~/constants/types'

export const useActiveMatchStore = defineStore('activeMatch', {
  state: () => ({
    focusedMatch: <Match>null,
    messages: <Message[]>[],
    focusedMessage: <Message>null,
    errorMessage: '',
  }),
  getters: {},
  actions: {
    addMessage(message: Message) {
      if (
        this.messages.findIndex(
          (m: Message) => m.messageId === message.messageId,
        ) > -1
      ) {
        this.messages.push(message)
      }
    },
    updateMessage(message: Message) {
      const index = this.messages.findIndex(
        (m: Message) => m.messageId === message.messageId,
      )
      if (index > -1) {
        this.messages.splice(index, 1, message)
      }
    },
  },
})
