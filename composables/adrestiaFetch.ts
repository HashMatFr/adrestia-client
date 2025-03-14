import { authService } from '~/authentication/authService'
import { useLayoutStore } from '~/stores/layoutStore'

/**
 * Wrapper for the alias $fetch, to globally use in the app (i.e manual GETs and POST, PATCH, etc.)
 * @param request
 * @param opts
 * @returns the new alias $adrestia, configured with the monguichet api base url and necessary headers
 */
export const $adrestia: typeof $fetch = (request, opts?) => {
  return $fetch(request, {
    ...opts,
    baseURL: '/api/adrestia/',
    headers: {
      Authorization: authService.getToken()
        ? 'Bearer ' + authService.getToken()
        : 'nonAuthenticated',
      ...opts.headers,
    },
    credentials: 'include',
    onResponseError({ response }) {
      console.log(response)
      if (response.status === 401) {
        authService.logout()
        const localePath = useLocalePath()
        return navigateTo(localePath('/login'))
      } else {
        const layoutStore = useLayoutStore()
        layoutStore.fetchError = response
      }
    },
    retry: 0,
  })
}
