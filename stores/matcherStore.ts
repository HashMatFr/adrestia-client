export const useMatcherStore = defineStore('matcher', {
  state: () => ({
    newMatcher: {
      matcherId: '',
      sexInterestedIn: [],
      minAge: 18,
      maxAge: 100,
      minSize: 100,
      maxSize: 250,
      distance: 15,
      relationshipGoal: [],
      childrenSituation: [],
      ethnicity: [],
      politicalView: [],
      religion: [],
      smokingSituation: [],
      alcoholConsumption: [],
      fitness: [],
      temper: [],
    },
  }),
  getters: {},
  actions: {},
})
