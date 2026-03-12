import {CogIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'assist.instruction.context']

// Custom order for main document types in the desk structure
const ORDERED_DOC_TYPES = [
  'page',
  'event',
  'club',
  'person',
  // Types provided by the taxonomy manager plugin
  'skosConcept',
  'skosConceptScheme',
]

export const structure: StructureResolver = (S: StructureBuilder) => {
  // Start from all document type items except the disabled ones
  const allDocTypeItems = S.documentTypeListItems()
    .filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId()))
    .map((listItem) => listItem.title(pluralize(listItem.getTitle() as string)))

  // Pick out the ones we want in a specific order
  const orderedItems = ORDERED_DOC_TYPES.map((typeId) =>
    allDocTypeItems.find((listItem) => listItem.getId() === typeId),
  ).filter(Boolean)

  // Any remaining document types will follow after the ordered ones
  const remainingItems = allDocTypeItems.filter(
    (listItem) => !ORDERED_DOC_TYPES.includes(listItem.getId() as string),
  )

  return S.list()
    .title('Website Content')
    .items([
      // Site Settings first
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
      // Then the main document types in the requested order
      ...orderedItems,
      // Then any other document types
      ...remainingItems,
    ])
}
