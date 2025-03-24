import { $adrestia } from './adrestiaFetch'
import { useAuthStore } from '../stores/authStore'
import { useProfileStore } from '../stores/profileStore'
import {
  Detail,
  Infos,
  Matcher,
  Profile,
  ProfileToBrowse,
  RegisterProfile,
} from '~/constants/types'
import { useProfilesToBrowseStore } from '~/stores/profilesToBrowseStore'

export const useProfileService = () => {
  const config = useRuntimeConfig()

  const getUserInfo = async (accessToken) => {
    const url = `${config.public.keycloakRemoteHost}/auth/realms/${config.public.keycloakRealm}/gichkey/revocation-user-info`
    const response = await $fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })

    const authStore = useAuthStore()
    authStore.setUserInfo(response)
  }

  const getUserProfile = async () => {
    const url = 'profiles/get-user-profile'
    const response: Profile = await $adrestia(url, {
      method: 'GET',
    })

    const profileStore = useProfileStore()

    if (Object.keys(response).length > 0) {
      profileStore.profileId = response.profileId
      profileStore.username = response.username
      profileStore.bio = response.bio
      profileStore.enabled = response.enabled
      profileStore.likesCount = response.likesCount
      profileStore.messagesCount = response.messagesCount
      profileStore.lastActivity = response.lastActivity
      profileStore.latitude = response.latitude
      profileStore.longitude = response.longitude
      profileStore.city = response.city
      profileStore.locale = response.locale
      profileStore.job = response.job
      profileStore.education = response.education
        ? response.education
        : 'NOT_AVAILABLE'
      profileStore.setMatcher(response.matcherDto)
      profileStore.setDetail(response.detailDto)
    }
  }

  const verifyEmail = (email: string) => {
    return $adrestia('profiles/verify-email', {
      method: 'POST',
      params: {
        emailToVerify: email,
      },
    })
  }

  const registerProfile = async (registerProfile: RegisterProfile) => {
    const url = 'profiles/register-profile'
    const response: Profile = await $adrestia(url, {
      method: 'POST',
      body: registerProfile,
    })

    const profileStore = useProfileStore()

    if (Object.keys(response).length > 0) {
      profileStore.username = response.username
      profileStore.bio = response.bio
      profileStore.enabled = response.enabled
      profileStore.likesCount = response.likesCount
      profileStore.messagesCount = response.messagesCount
      profileStore.lastActivity = response.lastActivity
      profileStore.latitude = response.latitude
      profileStore.longitude = response.longitude
      profileStore.city = response.city
      profileStore.job = response.job
      profileStore.education = response.education
        ? response.education
        : 'NOT_AVAILABLE'
      profileStore.locale = response.locale
      profileStore.setMatcher(response.matcherDto)
      profileStore.setDetail(response.detailDto)
    }
  }

  const updateProfileCoordinates = async (
    latitude: number,
    longitude: number,
  ) => {
    const url = 'profiles/update-coordinates'
    await $adrestia(url, {
      method: 'PUT',
      params: { latitude, longitude },
    })

    const profileStore = useProfileStore()
    profileStore.setCoordinates({ latitude, longitude })
  }

  const updateProfileLocale = async (code: string) => {
    const url = 'profiles/update-locale'
    await $adrestia(url, {
      method: 'PUT',
      params: { code },
    })

    const profileStore = useProfileStore()
    profileStore.locale = code
  }

  const updateDetail = async (detail: Detail) => {
    const url = 'details/update-detail'
    const response: Detail = await $adrestia(url, {
      method: 'PUT',
      body: detail,
    })

    if (Object.keys(response).length > 0) {
      const profileStore = useProfileStore()
      profileStore.setDetail(response)
    }
  }

  const updateInfos = async (infos: Infos) => {
    const url = 'profiles/update-infos'
    const response: Infos = await $adrestia(url, {
      method: 'PUT',
      body: infos,
    })

    if (Object.keys(response).length > 0) {
      const profileStore = useProfileStore()
      profileStore.setInfos(response)
    }
  }

  const updateMatcher = async (matcher: Matcher) => {
    const url = 'matchers/update-matcher'
    const response = await $adrestia(url, {
      method: 'PUT',
      body: matcher,
    })

    if (Object.keys(response).length > 0) {
      const profileStore = useProfileStore()
      profileStore.setMatcher(response)
    }
  }

  const getProfilesToBrowse = async (
    matcher: Matcher,
    latitude: number,
    longitude: number,
  ) => {
    const url = 'profiles/get-profiles-to-browse'
    const response: ProfileToBrowse[] = await $adrestia(url, {
      method: 'POST',
      params: { latitude, longitude },
      body: matcher,
    })

    if (response.length > 0) {
      const profilesToBrowseStore = useProfilesToBrowseStore()
      profilesToBrowseStore.profilesToBrowse = response
    }
  }

  const updatePassword = (
    newPassword: string,
    passwordConfirmation: string,
  ) => {
    const url = 'profiles/update-password'
    return $adrestia(url, {
      method: 'PUT',
      body: { newPassword, passwordConfirmation },
    })
  }

  return {
    getUserInfo,
    getUserProfile,
    verifyEmail,
    registerProfile,
    updateProfileCoordinates,
    updateDetail,
    updateMatcher,
    getProfilesToBrowse,
    updateProfileLocale,
    updateInfos,
    updatePassword,
  }
}
