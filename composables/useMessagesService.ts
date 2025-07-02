import { Message } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'
import { useActiveMatchStore } from '~/stores/activeMatchStore'

export const useMessagesService = () => {
  const updateMessagesByMatchId = async (matchId: string) => {
    try {
      const url = 'messages/by-match-id'
      const response: Message[] = await $adrestia(url, {
        method: 'POST',
        params: { matchId },
      })

      const activeMatchStore = useActiveMatchStore()

      if (response.length > 0) {
        activeMatchStore.messages = response
      }
    } catch (error) {
      return error
    }
  }

  const addMessage = async (matchId: string, message: Message) => {
    const url = 'messages'
    const activeMatchStore = useActiveMatchStore()
    $adrestia(url, {
      method: 'POST',
      body: message,
      params: {
        matchId,
      },
    })
      .then((result: Message) => {
        activeMatchStore.addMessage(result)
      })
      .catch((error) => {
        console.log(error)
        const { t } = useI18n()
        activeMatchStore.errorMessage = t('message.errors.add')
      })
  }

  const updateMessageContent = async (message: Message) => {
    const url = 'messages'
    const activeMatchStore = useActiveMatchStore()
    $adrestia(url, {
      method: 'PUT',
      body: message,
    })
      .then((result: Message) => {
        activeMatchStore.updateMessage(result)
      })
      .catch((error) => {
        console.log(error)
        const { t } = useI18n()
        activeMatchStore.errorMessage = t('message.errors.update')
      })
  }

  const logicallyDeleteMessage = async (id: string) => {
    const url = 'messages/logically-delete-message/'
    const activeMatchStore = useActiveMatchStore()
    $adrestia(url + id, {
      method: 'DELETE',
    })
      .then((result: Message) => {
        activeMatchStore.updateMessage(result)
      })
      .catch((error) => {
        console.log(error)
        const { t } = useI18n()
        activeMatchStore.errorMessage = t('message.errors.delete')
      })
  }

  return {
    updateMessagesByMatchId,
    addMessage,
    updateMessageContent,
    logicallyDeleteMessage,
  }
}
