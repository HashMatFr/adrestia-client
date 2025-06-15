import { Property } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'
import { usePropertiesStore } from '~/stores/propertiesStore'

export const usePropertiesService = () => {
  const getClientProperties = async () => {
    const url = 'properties/type/client'
    const response: Property[] = await $adrestia(url, {
      method: 'GET',
    })

    const propertiesStore = usePropertiesStore()
    if (response.length > 0) {
      propertiesStore.properties = response
    }
  }

  return {
    getClientProperties,
  }
}
