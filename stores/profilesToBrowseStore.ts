import { ProfileToBrowse } from '~/constants/types'

export const useProfilesToBrowseStore = defineStore('profilesToBrowse', {
  state: () => ({
    profilesToBrowse: <ProfileToBrowse[]>[],
    browseIndex: 0,
    rewindAvailabilities: <boolean[]>[false],
    photos: {
      photoA: {},
      photoB: {},
      photoC: {},
      photoD: {},
      photoE: {},
      photoF: {},
    },
  }),
  getters: {},
  actions: {
    goToNextProfile(): boolean {
      // function swapPhotosToBrowse(from: number, to: number) {
      //   this.photos.splice(to, 0, this.photos.splice(from, 1)[0])
      // }

      if (this.profilesToBrowse.length > this.browseIndex + 1) {
        this.browseIndex++
        return true
      } else {
        return false
      }
    },
    rewindToPreviousProfile() {
      if (
        this.browseIndex > 0 &&
        this.rewindAvailabilities[this.browseIndex - 1]
      ) {
        this.rewindAvailabilities.pop()
        this.browseIndex--
      }
    },
    resetBrowsing() {
      this.profilesToBrowse = []
      this.browseIndex = 0
      this.rewindAvailabilities = [false]
      this.photos = {
        photoA: {},
        photoB: {},
        photoC: {},
        photoD: {},
        photoE: {},
        photoF: {},
      }
    },
    pushRewindAvailability(availability: boolean) {
      this.rewindAvailabilities.push(availability)
    },
  },
})
