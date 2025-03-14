import { authService } from '~/authentication/authService'

/**
 * The global authentication route guard, redirects the user to the login page if needed
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const localePath = useLocalePath()
  const publicRoutes = ['/register', '/login', '/settings']

  if (
    publicRoutes.findIndex((route) => to.path.includes(route)) === -1 &&
    !authService.getToken()
  ) {
    authService.trySilentLogin()
    if (!authService.getToken()) {
      return navigateTo(localePath('/login'))
    }
  }
})
