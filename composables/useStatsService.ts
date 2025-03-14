import { Stats } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'
import { useStatsStore } from '~/stores/statsStore'

export const useStatsService = () => {
  const getProfileStats = async (period: number) => {
    const url = 'stats/get-profile-stats'
    const response: Stats = await $adrestia(url, {
      method: 'GET',
      params: { lastPeriodInDays: period },
    })

    const statsStore = useStatsStore()

    if (Object.keys(response).length > 0) {
      statsStore.givenLikesLastPeriodCount = response.givenLikesLastPeriodCount
      statsStore.givenDislikesLastPeriodCount =
        response.givenDislikesLastPeriodCount
      statsStore.receivedLikesLastPeriodCount =
        response.receivedLikesLastPeriodCount
      statsStore.receivedDislikesLastPeriodCount =
        response.receivedDislikesLastPeriodCount
      statsStore.joiningDate = response.joiningDate
    }
  }

  return {
    getProfileStats,
  }
}
