import { defineStore } from 'pinia'
import { Property } from '~/constants/types'

export const usePropertiesStore = defineStore('properties', {
  state: () => ({
    properties: <Property[]>[],
  }),
  getters: {},
  actions: {
    getPropertyValueByKey(key: string) {
      return this.properties.find((p: Property) => p.key === key)?.value
    },
  },
})
