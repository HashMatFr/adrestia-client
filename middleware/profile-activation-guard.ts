import { useStateStore } from '~/stores/stateStore'

/**
 * The profile activation route guard, redirects the user to the home page if the profile is in deactivated (pause mode)
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const localePath = useLocalePath()
  const targetRoutes = ['/explore', '/matches', '/likes']

  if (targetRoutes.findIndex((route) => to.path.includes(route)) > -1) {
    const stateStore = useStateStore()
    if (!stateStore.activationState) {
      return navigateTo(localePath('/home'))
    }
  }
})
