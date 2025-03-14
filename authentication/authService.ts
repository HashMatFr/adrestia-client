import { Capacitor } from '@capacitor/core'
import { TokensResponse } from '~/constants/types'
import { useAuthStore } from '~/stores/authStore'
import { useLayoutStore } from '~/stores/layoutStore'
import { useProfileStore } from '~/stores/profileStore'

class AuthService {
  /**
   * Uses the direct grants flow to generate valid access and refresh tokens using user's credentials
   * @param username here, the user's email
   * @param password the user's password
   */
  async login(username: string, password: string) {
    const config = useRuntimeConfig()
    const url =
      '/api/authentication/auth/realms/' +
      config.public.keycloakRealm +
      '/protocol/openid-connect/token'

    const layoutStore = useLayoutStore()
    layoutStore.isLoading = true

    const clientId = config.public.keycloakClientId

    const searchParamsData = new URLSearchParams()
    searchParamsData.append('client_id', clientId)
    searchParamsData.append('grant_type', 'password')
    searchParamsData.append('username', username)
    searchParamsData.append('password', password)

    try {
      const response: TokensResponse = await $fetch(url, {
        method: 'POST',
        body: searchParamsData,
      })

      if (response?.access_token && response?.refresh_token) {
        this.manageTokenResponse(response)
        this.saveLoginDataOnDevice(response)
      }
      layoutStore.isLoading = false
    } catch (error) {
      layoutStore.isLoading = false
      layoutStore.error = error
    }
  }

  /**
   * Fetch the optional login data from the user mobile, and return the status
   */
  trySilentLogin() {
    //TODO get savedUserLoginData from mobile
    const savedUserLoginData: TokensResponse = {
      access_token: '',
      refresh_token: '',
      expires_in: 0,
      refresh_expires_in: 0,
      token_type: '',
      session_state: '',
      scope: '',
      'not-before-policy': 0,
    }

    if (Capacitor.getPlatform() === 'web') {
      savedUserLoginData.access_token = this.getCookieValue(
        'adrestiaAccessToken',
      )
      savedUserLoginData.refresh_token = this.getCookieValue(
        'adrestiaRefreshToken',
      )
      savedUserLoginData.expires_in = Number.parseInt(
        this.getCookieValue('adrestiaAccessExpiration'),
      )
      savedUserLoginData.refresh_expires_in = Number.parseInt(
        this.getCookieValue('adrestiaRefreshExpiration'),
      )
    }

    if (savedUserLoginData.access_token) {
      const expirationDate = new Date(
        Date.now() + savedUserLoginData.expires_in * 1000,
      )
      const refreshExpirationDate = new Date(
        Date.now() + savedUserLoginData.refresh_expires_in * 1000,
      )

      if (expirationDate < new Date()) {
        if (refreshExpirationDate < new Date()) {
          this.logout()
        } else {
          this.refreshAccessToken(savedUserLoginData.refresh_token)
        }
      } else {
        this.manageTokenResponse(savedUserLoginData)
      }
    }
  }

  /**
   * To check if the user is authenticated
   * @returns the access_token or empty string
   */
  getToken(): string {
    const authStore = useAuthStore()
    return authStore.userLoginData.access_token
  }

  /**
   * Uses the not yet expired refresh_token to generate a new valid access token and saves the response
   * @param refreshToken
   */
  async refreshAccessToken(refreshToken: string) {
    const config = useRuntimeConfig()
    const url =
      config.public.keycloakRemoteHost +
      '/auth/realms/' +
      config.public.keycloakRealm +
      '/protocol/openid-connect/token'

    const layoutStore = useLayoutStore()
    layoutStore.isLoading = true

    const clientId = config.public.keycloakClientId

    const searchParamsData = new URLSearchParams()
    searchParamsData.append('client_id', clientId)
    searchParamsData.append('grant_type', 'refresh_token')
    searchParamsData.append('refresh_token', refreshToken)

    try {
      const response: TokensResponse = await $fetch(url, {
        method: 'POST',
        body: searchParamsData,
      })

      if (response?.access_token && response?.refresh_token) {
        this.manageTokenResponse(response)
        this.saveLoginDataOnDevice(response)
      }
      layoutStore.isLoading = false
    } catch (error) {
      layoutStore.isLoading = false
      layoutStore.error = error
    }
  }

  manageTokenResponse(response: TokensResponse) {
    let userLoginData = {
      access_token: '',
      access_expiration_date: new Date().toISOString(),
      refresh_expiration_date: new Date().toISOString(),
      refresh_token: '',
      token_type: '',
      session_state: '',
      scope: '',
    }
    userLoginData.access_token = response.access_token
    userLoginData.refresh_token = response.refresh_token
    userLoginData.token_type = response.token_type
    userLoginData.session_state = response.session_state
    userLoginData.scope = response.scope
    userLoginData.access_expiration_date = new Date(
      Date.now() + response.expires_in * 1000,
    ).toISOString()
    userLoginData.refresh_expiration_date = new Date(
      Date.now() + response.refresh_expires_in * 1000,
    ).toISOString()

    const authStore = useAuthStore()
    authStore.setUserLoginData(userLoginData)
  }

  logout() {
    const authStore = useAuthStore()
    authStore.$reset()
    const profileStore = useProfileStore()
    profileStore.$reset()
    this.deleteLoginDataFromDevice()
  }

  saveLoginDataOnDevice(response: TokensResponse) {
    if (Capacitor.getPlatform() === 'web') {
      document.cookie = 'adrestiaAccessToken=' + response.access_token
      document.cookie = 'adrestiaAccessExpiration=' + response.expires_in
      document.cookie = 'adrestiaRefreshToken=' + response.refresh_token
      document.cookie =
        'adrestiaRefreshExpiration=' + response.refresh_expires_in
    }
  }

  deleteLoginDataFromDevice() {
    if (Capacitor.getPlatform() === 'web') {
      this.deleteCookies()
    }
  }

  getCookieValue(name) {
    const regex = new RegExp(`(^| )${name}=([^;]+)`)
    const match = document.cookie.match(regex)
    if (match) {
      return match[2]
    }
  }

  deleteCookies() {
    document.cookie =
      'adrestiaAccessToken=invalid;expires=Tue, 22 Aug 2023 12:00:00 UTC;'
    document.cookie =
      'adrestiaAccessExpiration=invalid;expires=Tue, 22 Aug 2023 12:00:00 UTC;'
    document.cookie =
      'adrestiaRefreshToken=invalid;expires=Tue, 22 Aug 2023 12:00:00 UTC;'
    document.cookie =
      'adrestiaRefreshExpiration=invalid;expires=Tue, 22 Aug 2023 12:00:00 UTC;'
  }
}

export const authService = new AuthService()
