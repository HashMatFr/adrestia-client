export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isLoading: false,
    shouldDisplayHomeButton: false,
    shouldDisplaySettingsButton: false,
    shouldDisplayLanguagesSwitcher: false,
    error: null,
    openedSelectFieldId: '',
    pageTitle: '',
    isRegisterFlow: false,
    fetchError: null,
    warningMessage: '',
  }),
  getters: {
    getError() {
      if (this.error !== null && this.error instanceof Error) {
        return this.error.message
      } else {
        return this.error
      }
    },
  },
  actions: {},
})
