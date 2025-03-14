import { ResetPassword } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'

export const useResetPasswordsService = () => {
  const createResetPassword = (toCreate: ResetPassword) => {
    const url = 'reset-passwords/create'
    return $adrestia(url, {
      method: 'POST',
      body: { resetPasswordDto: toCreate },
    })
  }

  const getResetPasswordToComplete = async (email: string) => {
    const url = 'reset-passwords/to-complete'
    const response: ResetPassword = await $adrestia(url, {
      method: 'GET',
      params: { email },
    })
    return response
  }

  const resetPassword = (resetTry: ResetPassword) => {
    const url = 'reset-passwords/reset'
    return $adrestia(url, {
      method: 'POST',
      body: { resetPasswordDto: resetTry },
    })
  }

  return {
    createResetPassword,
    resetPassword,
    getResetPasswordToComplete,
  }
}
