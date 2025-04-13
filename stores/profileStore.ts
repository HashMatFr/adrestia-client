export const useProfileStore = defineStore('profile', {
  state: () => ({
    profileId: '',
    username: '',
    email: '',
    locale: 'FR',
    password: '',
    bio: '',
    enabled: true,
    likesCount: 0,
    messagesCount: 0,
    lastActivity: '',
    detail: {
      detailId: '',
      age: 18,
      size: 175,
      temper: 'NOT_AVAILABLE',
      relationshipGoal: 'NOT_AVAILABLE',
      childrenSituation: 'NOT_AVAILABLE',
      alcoholConsumption: 'NOT_AVAILABLE',
      smokingSituation: 'NOT_AVAILABLE',
      ethnicity: 'NOT_AVAILABLE',
      politicalView: 'NOT_AVAILABLE',
      fitness: 'NOT_AVAILABLE',
      religion: 'NOT_AVAILABLE',
      sex: 'NOT_AVAILABLE',
      orientation: 'NOT_AVAILABLE',
    },
    matcher: {
      matcherId: '',
      minAge: 18,
      maxAge: 35,
      minSize: 150,
      maxSize: 190,
      temper: 'NOT_AVAILABLE,INTROVERT,EXTROVERT,MIDDLE',
      relationshipGoal:
        'NOT_AVAILABLE,NOT_SERIOUS,SHORT_TERM,LONG_TERM,MARRIAGE,FRIENDSHIP',
      childrenSituation:
        'NOT_AVAILABLE,ZERO_DO_NOT_WANT,ZERO_WANT,HAVE_WANT_MORE,HAVE_DO_NOT_WANT_MORE',
      alcoholConsumption: 'NOT_AVAILABLE,NEVER,SOMETIMES,REGULARLY',
      smokingSituation: 'NOT_AVAILABLE,NEVER,SOMETIMES,REGULARLY',
      ethnicity:
        'NOT_AVAILABLE,OCEANIAN,ASIAN,EUROPEAN,MIDDLE_EASTERN,AFRICAN,LATIN',
      politicalView:
        'NOT_AVAILABLE,LEFT,MODERATE,RIGHT,LIBERTARIAN,APOLITICAL,OTHER',
      fitness: 'NOT_AVAILABLE,SEDENTARY,ATHLETE,ACTIVE',
      religion:
        'NOT_AVAILABLE,CHRISTIAN,MUSLIM,JEWISH,HINDU,SPIRITUAL,ATHEIST,AGNOSTIC,OTHER',
      sexInterestedIn: 'M,F',
      orientation: 'NOT_AVAILABLE,HETEROSEXUAL,HOMOSEXUAL,BISEXUAL',
      distance: 20,
    },
    latitude: 48.867,
    longitude: 2.333,
    city: '',
    job: '',
    education: 'NOT_AVAILABLE',
    hasSubscription: false,
  }),
  getters: {
    getUserLocale() {
      return this.locale.toLowerCase()
    },
  },
  actions: {
    setMatcher(payload) {
      this.matcher.matcherId = payload.matcherId
        ? payload.matcherId
        : this.matcher.matcherId
      this.matcher.minAge = payload.minAge
        ? payload.minAge
        : this.matcher.minAge
      this.matcher.maxAge = payload.maxAge
        ? payload.maxAge
        : this.matcher.maxAge
      this.matcher.minSize = payload.minSize
        ? payload.minSize
        : this.matcher.minSize
      this.matcher.maxSize = payload.maxSize
        ? payload.maxSize
        : this.matcher.maxSize
      this.matcher.temper = payload.temper
        ? payload.temper
        : this.matcher.temper
      this.matcher.relationshipGoal = payload.relationshipGoal
        ? payload.relationshipGoal
        : this.matcher.relationshipGoal
      this.matcher.childrenSituation = payload.childrenSituation
        ? payload.childrenSituation
        : this.matcher.childrenSituation
      this.matcher.alcoholConsumption = payload.alcoholConsumption
        ? payload.alcoholConsumption
        : this.matcher.alcoholConsumption
      this.matcher.smokingSituation = payload.smokingSituation
        ? payload.smokingSituation
        : this.matcher.smokingSituation
      this.matcher.ethnicity = payload.ethnicity
        ? payload.ethnicity
        : this.matcher.ethnicity
      this.matcher.politicalView = payload.politicalView
        ? payload.politicalView
        : this.matcher.politicalView
      this.matcher.fitness = payload.fitness
        ? payload.fitness
        : this.matcher.fitness
      this.matcher.religion = payload.religion
        ? payload.religion
        : this.matcher.religion
      this.matcher.sexInterestedIn = payload.sexInterestedIn
        ? payload.sexInterestedIn
        : this.matcher.sexInterestedIn
      this.matcher.orientation = payload.orientation
        ? payload.orientation
        : this.matcher.orientation
      this.matcher.distance = payload.distance
        ? payload.distance
        : this.matcher.distance
    },
    setDetail(payload) {
      this.detail.detailId = payload.detailId
        ? payload.detailId
        : this.detail.detailId
      this.detail.age = payload.age ? payload.age : this.detail.minAge
      this.detail.size = payload.size ? payload.size : this.detail.size
      this.detail.temper = payload.temper ? payload.temper : this.detail.temper
      this.detail.relationshipGoal = payload.relationshipGoal
        ? payload.relationshipGoal
        : this.detail.relationshipGoal
      this.detail.childrenSituation = payload.childrenSituation
        ? payload.childrenSituation
        : this.detail.childrenSituation
      this.detail.alcoholConsumption = payload.alcoholConsumption
        ? payload.alcoholConsumption
        : this.detail.alcoholConsumption
      this.detail.smokingSituation = payload.smokingSituation
        ? payload.smokingSituation
        : this.detail.smokingSituation
      this.detail.ethnicity = payload.ethnicity
        ? payload.ethnicity
        : this.detail.ethnicity
      this.detail.politicalView = payload.politicalView
        ? payload.politicalView
        : this.detail.politicalView
      this.detail.fitness = payload.fitness
        ? payload.fitness
        : this.detail.fitness
      this.detail.religion = payload.religion
        ? payload.religion
        : this.detail.religion
      this.detail.sex = payload.sex ? payload.sex : this.detail.sex
      this.detail.orientation = payload.orientation
        ? payload.orientation
        : this.detail.orientation
      this.detail.city = payload.city ? payload.city : this.detail.city
    },
    setCoordinates(payload) {
      this.detail.latitude = payload.latitude
        ? payload.latitude
        : this.detail.latitude
      this.detail.longitude = payload.longitude
        ? payload.longitude
        : this.detail.longitude
    },
    setInfos(payload) {
      this.city = payload.city ? payload.city : this.city
      this.job = payload.job ? payload.job : this.job
      this.education = payload.education ? payload.education : this.education
      this.bio = payload.bio ? payload.bio : this.bio
      this.username = payload.username ? payload.username : this.username
    },
  },
})
