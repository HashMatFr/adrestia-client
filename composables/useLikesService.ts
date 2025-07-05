import { Like } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'
import { useLikesStore } from '~/stores/likesStore'

export const useLikesService = () => {
  const getReceivedLikesByProfileId = async (
    latitude: number,
    longitude: number,
  ) => {
    const url = 'likes/by-profile-id'
    const response: Like[] = await $adrestia(url, {
      method: 'GET',
      params: { latitude, longitude },
    })

    const likesStore = useLikesStore()

    if (response.length > 0) {
      likesStore.receivedLikes = response
    }
  }

  const likeProfile = async (
    likedProfileId: string,
    value: boolean,
    initialMessage: string,
  ) => {
    const url = 'likes/like-profile'
    const response: boolean = await $adrestia(url, {
      method: 'POST',
      params: { likedProfileId, value },
      body: { initialMessage },
    })
    return response
  }

  const deleteReceivedLike = async (id: string) => {
    const url = 'likes/delete-received-like/'
    const response: boolean = await $adrestia(url + id, {
      method: 'DELETE',
    })
    return response
  }

  return {
    getReceivedLikesByProfileId,
    likeProfile,
    deleteReceivedLike,
  }
}
