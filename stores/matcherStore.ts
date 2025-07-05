export const useMatcherStore = defineStore('matcher', {
  state: () => ({
    newMatcher: {
      matcherId: '',
      minAge: 18,
      maxAge: 100,
      distance: 15,
      relationshipGoal: [],
      childrenSituation: [],
      ethnicity: [],
      politicalView: [],
      religion: [],
      smokingSituation: [],
      alcoholConsumption: [],
      fitness: [],
    },
  }),
  getters: {},
  actions: {},
})
