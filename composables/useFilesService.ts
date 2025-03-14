import { FileReference } from '~/constants/types'
import { $adrestia } from './adrestiaFetch'
import { usePhotosStore } from '~/stores/photosStore'
import { useProfilesToBrowseStore } from '~/stores/profilesToBrowseStore'
import { useLikesStore } from '~/stores/likesStore'
import { useMatchesStore } from '~/stores/matchesStore'

export const useFilesService = () => {
  const getFilesReferences = async () => {
    const url = 'files/get-files-references'

    const response: FileReference[] = await $adrestia(url, {
      method: 'GET',
    })

    if (response) {
      const photosStore = usePhotosStore()
      photosStore.resetReferences()
      response.forEach(
        (ref, index) => (photosStore.filesReferences[index] = ref),
      )
    }
  }

  const reindexFilesReferences = async () => {
    const url = 'files/reindex-files-references'

    const response: FileReference[] = await $adrestia(url, {
      method: 'POST',
    })

    if (response) {
      const photosStore = usePhotosStore()
      photosStore.resetReferences()
      response.forEach(
        (ref, index) => (photosStore.filesReferences[index] = ref),
      )
    }
  }

  const changeFilesReferencesOrder = async (
    refIdFrom: string,
    refIdTo: string,
  ) => {
    const url = 'files/change-files-references-order'

    const response: FileReference[] = await $adrestia(url, {
      method: 'POST',
      params: {
        refIdFrom,
        refIdTo,
      },
    })

    if (response) {
      const photosStore = usePhotosStore()
      photosStore.resetReferences()
      response.forEach(
        (ref, index) => (photosStore.filesReferences[index] = ref),
      )
      photosStore.focusedCard = -1
    }
  }

  const addFile = async (formData: FormData, fileIndex: number) => {
    const url = 'files/add-file'
    const response: FileReference = await $adrestia(url, {
      method: 'PUT',
      body: formData,
    })

    if (response.fileReferenceId) {
      const photosStore = usePhotosStore()
      photosStore.updateReference(response, fileIndex)
      return response
    } else {
      return null
    }
  }

  const downloadFile = async (
    profileId: string,
    filename: string,
    toBrowse: boolean,
  ) => {
    const url = 'files/download-file'
    const response: Blob = await $adrestia(url, {
      method: 'GET',
      params: {
        profileId,
        filename,
      },
    })

    blobToBase64(response).then((res) => {
      const photosStore = usePhotosStore()
      photosStore.photos[filename].dataUrl = res
    })
  }

  const downloadPhotoToBrowse = async (profileId: string, filename: string) => {
    const url = 'files/download-file'
    const response: Blob = await $adrestia(url, {
      method: 'GET',
      params: {
        profileId,
        filename,
      },
    })

    blobToBase64(response).then((res) => {
      const profilesToBrowseStore = useProfilesToBrowseStore()
      profilesToBrowseStore.photos[filename].dataUrl = res
    })
  }

  const downloadAvatar = async (
    profileId: string,
    filename: string,
    storeName: string,
  ) => {
    const url = 'files/download-file'
    const response: Blob = await $adrestia(url, {
      method: 'GET',
      params: {
        profileId,
        filename,
      },
    })

    blobToBase64(response).then((res) => {
      if (storeName === 'likesStore') {
        const likesStore = useLikesStore()
        const newAvatar = { data: res, profileId: profileId }
        likesStore.addAvatar(newAvatar)
      } else {
        const matchesStore = useMatchesStore()
        const newAvatar = { data: res, profileId: profileId }
        matchesStore.addAvatar(newAvatar)
      }
    })
  }

  /** Has to be used with a callback */
  const blobToBase64 = (blob: Blob) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result)
      }
    })
  }

  const updateFile = async (formData: FormData, index: number) => {
    const url = 'files/update-file'
    const response: FileReference = await $adrestia(url, {
      method: 'PUT',
      body: formData,
    })

    if (response.fileReferenceId) {
      const photosStore = usePhotosStore()
      photosStore.updateReference(response, index)
      return response
    } else {
      return null
    }
  }

  const deleteFile = async (fileReferenceId: string) => {
    const photosStore = usePhotosStore()
    const url = 'files/delete-file/'
    await $adrestia(url + fileReferenceId, {
      method: 'DELETE',
    }).then(() => {
      photosStore.deletePhotoDataByReferenceId(fileReferenceId)
      reindexFilesReferences()
    })
    photosStore.deleteReference(fileReferenceId)
  }

  return {
    getFilesReferences,
    reindexFilesReferences,
    changeFilesReferencesOrder,
    addFile,
    downloadFile,
    downloadPhotoToBrowse,
    updateFile,
    deleteFile,
    downloadAvatar,
  }
}
