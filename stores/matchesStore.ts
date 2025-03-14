import { Avatar, Match } from '~/constants/types'

export const useMatchesStore = defineStore('matches', {
  state: () => ({
    matches: <Match[]>[],
    avatars: <Avatar[]>[],
  }),
  getters: {},
  actions: {
    addAvatar(payload: Avatar) {
      if (
        this.avatars.findIndex((a) => a.profileId === payload.profileId) === -1
      ) {
        this.avatars.push(payload)
      }
    },
    hasAvatarBeenDownlowded(profileId: string) {
      return (
        this.avatars.findIndex((a) => a.profileId === profileId && a.data) > -1
      )
    },
    getAvatarDataByProfileId(profileId: string) {
      return this.avatars.find((a) => a.profileId === profileId)?.data
    },
  },
})
