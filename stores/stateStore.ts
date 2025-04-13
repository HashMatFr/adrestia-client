export const useStateStore = defineStore('state', {
  state: () => ({
    profileStateId: '',
    activationState: true,
    profileCanBeReactivated: false,
    availableReactivationDate: '',
    pauseExpiryDate: '',
    subscriptionState: false,
    subscriptionExpiryDate: '',
    uiTheme: '',
    hasEmailBeenVerified: false,
    respectsMinimumPhotosLimit: false,
  }),
  getters: {},
  actions: {},
})
