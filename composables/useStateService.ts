import { useStateStore } from '~/stores/stateStore'
import { $adrestia } from './adrestiaFetch'
import { ProfileState } from '~/constants/types'

export const useStateService = () => {
  const getProfileState = async () => {
    const url = 'profile-state'
    const response: ProfileState = await $adrestia(url, {
      method: 'GET',
    })
    if (Object.keys(response).length > 0) {
      const stateStore = useStateStore()
      stateStore.profileStateId = response.profileStateId
      stateStore.activationState = response.activationState
      stateStore.profileCanBeReactivated = response.profileCanBeReactivated
      stateStore.availableReactivationDate = response.availableReactivationDate
      stateStore.pauseExpiryDate = response.pauseExpiryDate
      stateStore.subscriptionState = response.subscriptionState
      stateStore.subscriptionExpiryDate = response.subscriptionExpiryDate
      stateStore.hasEmailBeenVerified = response.hasEmailBeenVerified
      stateStore.respectsMinimumPhotosLimit =
        response.respectsMinimumPhotosLimit
      stateStore.uiTheme = response.uiTheme
    }
  }

  const deactivateProfile = async (stateId: string, period: number) => {
    const url = 'profile-state/deactivate-profile/' + stateId
    const response = await $adrestia(url, {
      method: 'POST',
      params: { periodInDays: period },
    })
    return response
  }

  const reactivateProfile = async (stateId: string) => {
    const url = 'profile-state/reactivate-profile/' + stateId
    const response = await $adrestia(url, {
      method: 'POST',
    })
    return response
  }

  const updateMinimumPhotosLimitStatus = (
    profileStateId: string,
    status: boolean,
  ) => {
    return $adrestia('profile-state/update-minimum-photos-limit-status', {
      method: 'POST',
      params: {
        profileStateId,
        status,
      },
    })
  }

  const validateEmailWithCode = (
    profileStateId: string,
    validationCode: number,
  ) => {
    const url = 'profile-state/validate-email-with-code'
    return $adrestia(url, {
      method: 'POST',
      params: { profileStateId, validationCode },
    })
  }

  const resendValidationCode = () => {
    const url = 'profile-state/resend-validation-code-email'
    return $adrestia(url, {
      method: 'POST',
    })
  }

  return {
    getProfileState,
    deactivateProfile,
    reactivateProfile,
    updateMinimumPhotosLimitStatus,
    validateEmailWithCode,
    resendValidationCode,
  }
}
