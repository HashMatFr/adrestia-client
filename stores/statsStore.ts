export const useStatsStore = defineStore('stats', {
  state: () => ({
    givenLikesLastPeriodCount: 0,
    givenDislikesLastPeriodCount: 0,
    receivedLikesLastPeriodCount: 0,
    receivedDislikesLastPeriodCount: 0,
    joiningDate: '',
    period: 365,
  }),
  getters: {},
  actions: {},
})
