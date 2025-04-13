export type RegisterProfile = {
  username: string
  email: string
  password: string
  locale: string
}

export type Coordinates = {
  latitude: number
  longitude: number
}

export type Detail = {
  detailId: string
  age: number
  size: number
  temper: string
  relationshipGoal: string
  childrenSituation: string
  alcoholConsumption: string
  smokingSituation: string
  ethnicity: string
  politicalView: string
  fitness: string
  religion: string
  sex: string
  orientation: string
}

export type Infos = {
  city: string
  education: string
  job: string
  bio: string
  username: string
}

export type TabConfig = {
  title: string
}

export type Matcher = {
  matcherId: string
  minAge: number
  maxAge: number
  minSize: number
  maxSize: number
  temper: string
  orientation: string
  relationshipGoal: string
  childrenSituation: string
  alcoholConsumption: string
  smokingSituation: string
  ethnicity: string
  politicalView: string
  fitness: string
  religion: string
  sexInterestedIn: string
  distance: number
}

export type Profile = {
  profileId: string
  username: string
  locale: string
  bio: string
  enabled: boolean
  likesCount: number
  messagesCount: number
  lastActivity: string
  detailDto: Detail
  matcherDto: Matcher
  latitude: number
  longitude: number
  city: string
  job: string
  education: string
}

export type Block = {
  blockId: string
  blockingProfileId: string
  blockedProfileId: string
  createdAt: string
}

export type Message = {
  messageId: string
  matchId: string
  authorProfileId: string
  interlocutorProfileId: string
  content: string
  hasBeenRead: boolean
  createdAt: string
}

export type Match = {
  matchId: string
  firstProfileId: string
  secondProfileId: string
  firstProfileUsername: string
  secondProfileUsername: string
  createdAt: string
  messages: Message[]
}

export type FileReference = {
  fileReferenceId: string
  profileId: string
  filename: string
  size: number
  fileIndex: number
  mediaType: string
}

export type FileToBrowse = {
  filename: string
}

export type ProfileToBrowse = {
  profileId: string
  detailDto: Detail
  username: string
  distanceFromUser: number
  bio: string
  city: string
  lastActivity: string
  fileToBrowseDtos: FileToBrowse[]
}

export type Like = {
  likeId: string
  giverProfileToBrowseDto: ProfileToBrowse
  receiverProfileId: string
  value: boolean
  createdAt: string
}

export type Avatar = {
  data: string
  profileId: string
}

export type Notification = {
  notificationId: string
  profileId: string
  content: string
  hasBeenRead: boolean
  createdAt: string
}

export type SelectOption = {
  value: string
  text: string
}

export type TokensResponse = {
  access_token: string
  expires_in: number
  refresh_expires_in: number
  refresh_token: string
  token_type: string
  'not-before-policy': number
  session_state: string
  scope: string
}

export type UserLoginData = {
  access_token: string
  access_expiration_date: string
  refresh_expiration_date: string
  refresh_token: string
  token_type: string
  session_state: string
  scope: string
}

export type Stats = {
  givenLikesLastPeriodCount: number
  givenDislikesLastPeriodCount: number
  receivedLikesLastPeriodCount: number
  receivedDislikesLastPeriodCount: number
  joiningDate: string
}

export type ProfileState = {
  activationState: boolean
  profileCanBeReactivated: boolean
  availableReactivationDate: string
  pauseExpiryDate: string
  subscriptionState: boolean
  subscriptionExpiryDate: string
  hasEmailBeenVerified: boolean
  respectsMinimumPhotosLimit: boolean
  uiTheme: string
}

export type ResetPassword = {
  email: string
  firstSecretQuestion: string
  firstSecretAnswer: string
  secondSecretQuestion: string
  secondSecretAnswer: string
}
