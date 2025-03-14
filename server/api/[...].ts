import { createError } from 'h3'
import { joinURL } from 'ufo'
import { generateMessageFromReq } from '../../utils/requestLogger'

/**
 * Nitro server proxy to redirect requests to the Adrestia api server
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const path = event.path
  let target = ''

  if (path.includes('/api/adrestia/')) {
    const newPath = event.path.replace(/^\/api\/adrestia\//, '')
    target = joinURL(config.public.apiUrl, newPath)
  }

  if (path.includes('/api/authentication/')) {
    const newPath = event.path.replace(/^\/api\/authentication\//, '')
    target = joinURL(config.public.keycloakRemoteHost, newPath)
  }

  try {
    return proxyRequest(event, target, {
      onResponse: (event) => {
        // LOGGER
        console.log(
          generateMessageFromReq(
            event.req,
            target,
            event.res.statusCode,
            event.res.statusMessage,
          ),
        )
      },
    })
  } catch (error) {
    return createError({
      status: error.status,
      statusText: error.statusText,
    })
  }
})
