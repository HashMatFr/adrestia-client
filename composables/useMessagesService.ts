import { Message } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'
import { useMessagesStore } from '~/stores/messagesStore'

export const useMessagesService = () => {
  const getMessagesByMatchId = async (matchId: string) => {
    try {
      const url = 'messages/get-messages-by-match-id'
      const response: Message[] = await $adrestia(url, {
        method: 'GET',
        params: { matchId },
      })

      const messagesStore = useMessagesStore()

      if (response.length > 0) {
        messagesStore.messagesByMatch = response
      }
    } catch (error) {
      return error
    }
  }

  const addMessage = async (matchId: string, message: Message) => {
    try {
      const url = 'messages/add-message'
      const response: Message = await $adrestia(url, {
        method: 'POST',
        body: message,
        params: {
          matchId,
        },
      })
      return response
    } catch (error) {
      return error
    }
  }

  const updateMessageContent = async (message: Message) => {
    try {
      const url = 'messages/update-message-content'
      const response: Message = await $adrestia(url, {
        method: 'PUT',
        body: message,
      })
      return response
    } catch (error) {
      return error
    }
  }

  const deleteMessage = async (id: string) => {
    try {
      const url = 'messages/delete-message/'
      const response: string = await $adrestia(url + id, {
        method: 'DELETE',
      })
      return response
    } catch (error) {
      return error
    }
  }

  return {
    getMessagesByMatchId,
    addMessage,
    updateMessageContent,
    deleteMessage,
  }
}
