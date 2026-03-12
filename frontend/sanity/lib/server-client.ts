import 'server-only'
import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, studioUrl} from '@/sanity/lib/api'
import {token} from '@/sanity/lib/token'

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Server-side should not use CDN for fresh data
  token,
  stega: {studioUrl},
})
