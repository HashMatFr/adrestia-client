import { FileReference } from '~/constants/types'

export const usePhotosStore = defineStore('photos', {
  state: () => ({
    focusedCard: -1,
    filesReferences: [{}, {}, {}, {}, {}, {}],
    // photos: [{}, {}, {}, {}, {}, {}],
    photos: {
      photoA: {},
      photoB: {},
      photoC: {},
      photoD: {},
      photoE: {},
      photoF: {},
    },
  }),
  getters: {},
  actions: {
    updateReference(reference: FileReference, index: number) {
      this.filesReferences[index] = reference
    },
    deleteReference(id: string) {
      const indexToDelete = this.filesReferences.findIndex(
        (ref) => ref.fileReferenceId === id,
      )
      this.filesReferences.splice(indexToDelete, 1)
      this.filesReferences.push({})
    },
    deletePhotoDataByReferenceId(id: string) {
      const index = this.filesReferences.findIndex(
        (ref) => ref.fileReferenceId === id,
      )
      this.photos[this.filesReferences[index].filename].dataUrl = ''
    },
    resetReferences() {
      this.filesReferences = [{}, {}, {}, {}, {}, {}]
    },
  },
})
