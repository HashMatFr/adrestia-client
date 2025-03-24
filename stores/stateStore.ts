export const useStateStore = defineStore('state', {
  state: () => ({
    profileStateId: '',
    activationState: false,
    profileCanBeReactivated: false,
    availableReactivationDate: '',
    pauseExpiryDate: '',
    subscriptionState: false,
    subscriptionExpiryDate: '',
    uiTheme: '',
    hasEmailBeenVerified: false,
    respectMinimumPhotosLimit: false,
  }),
  getters: {},
  actions: {},
})
