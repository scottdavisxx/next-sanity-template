import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import {blockContentTextOnly} from './objects/blockContentTextOnly'
// Added by Scott, everything above is from the template
import {heroBanner} from './objects/heroBanner'
import {navigation} from './objects/navigation'
import {subnav} from './objects/subnav'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/studio/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  button,
  blockContent,
  blockContentTextOnly,
  infoSection,
  heroBanner,
  link,
  // Added by Scott
  navigation,
  subnav,
]
