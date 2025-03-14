import { usePhotosStore } from '~/stores/photosStore'
import { useProfileStore } from '~/stores/profileStore'

/**
 * The profile's completion route guard, redirects the user to the profile page to update his profile if needed
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const localePath = useLocalePath()
  const profileStore = useProfileStore()
  const photosStore = usePhotosStore()

  if (
    profileStore.detail.sex === 'NOT_AVAILABLE' ||
    photosStore.filesReferences.filter((ref) => ref.fileReferenceId).length < 2
  ) {
    return navigateTo(localePath('/home'))
  }
})
