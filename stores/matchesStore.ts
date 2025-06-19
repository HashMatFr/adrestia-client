import { defineStore } from 'pinia'
import { Avatar, Match, ProfileToBrowse } from '~/constants/types'

export const useMatchesStore = defineStore('matches', {
  state: () => ({
    matches: <Match[]>[],
    avatars: <Avatar[]>[],
    profilesToBrowse: <ProfileToBrowse[]>[],
    messages: [],
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
    getAvatarDataByProfileId(profileId: string) {
      return this.avatars.find((a) => a.profileId === profileId)?.data
    },
  },
})
