import { defineStore } from 'pinia'
import { UserLoginData } from '~/constants/types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userLoginData: {
      access_token: '',
      access_expiration_date: new Date().toISOString(),
      refresh_expiration_date: new Date().toISOString(),
      refresh_token: '',
      token_type: '',
      session_state: '',
      scope: '',
    },
    userInfo: {
      sub: '',
      email_verified: true,
      username: '',
      email: '',
    },
  }),
  getters: {
    getId: (state) => state.userInfo.sub,
    getUsername: (state) => state.userInfo.username,
    getEmail: (state) => state.userInfo.email,
  },
  actions: {
    setUserInfo(userInfo) {
      const dummy = Object.assign(this.userInfo, userInfo)
      this.userInfo = dummy
    },
    setPassword(payload) {
      this.password = payload
    },
    setUsername(payload) {
      this.userInfo.username = payload
    },
    setEmail(payload) {
      this.userInfo.email = payload
    },
    setUserLoginData(payload: UserLoginData) {
      this.userLoginData.access_token = payload.access_token
      this.userLoginData.refresh_token = payload.refresh_token
      this.userLoginData.refresh_expiration_date =
        payload.refresh_expiration_date
      this.userLoginData.access_expiration_date = payload.access_expiration_date
      this.userLoginData.scope = payload.scope
      this.userLoginData.session_state = payload.session_state
      this.userLoginData.token_type = payload.token_type
    },
  },
})
