import { Match } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'
import { useMatchesStore } from '~/stores/matchesStore'

export const useMatchesService = () => {
  const getMatchesByProfileId = async () => {
    try {
      const url = 'matches/get-matches-by-profile-id'
      const response: Match[] = await $adrestia(url, {
        method: 'GET',
      })

      const matchesStore = useMatchesStore()

      if (response.length > 0) {
        matchesStore.matches = response
      }
    } catch (error) {
      return error
    }
  }

  const deleteMatch = async (id: string) => {
    try {
      const url = 'matches/delete-match/'
      const response: string = await $adrestia(url + id, {
        method: 'DELETE',
      })
      return response
    } catch (error) {
      return error
    }
  }

  return {
    getMatchesByProfileId,
    deleteMatch,
  }
}
