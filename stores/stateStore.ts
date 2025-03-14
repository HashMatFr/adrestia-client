export const useStateStore = defineStore('state', {
  state: () => ({
    activationState: false,
    profileCanBeReactivated: false,
    availableReactivationDate: '',
    pauseExpiryDate: '',
    subscriptionState: false,
    subscriptionExpiryDate: '',
    uiTheme: '',
  }),
  getters: {},
  actions: {},
})
