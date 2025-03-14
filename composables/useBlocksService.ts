import { $adrestia } from './adrestiaFetch'

export const useBlocksService = () => {
  const blockProfile = async (profileIdToBlock: string) => {
    try {
      const url = 'blocks/block-profile'
      const response: string = await $adrestia(url, {
        method: 'POST',
        params: {
          profileIdToBlock,
        },
      })
      return response
    } catch (error) {
      return error
    }
  }

  return {
    blockProfile,
  }
}
