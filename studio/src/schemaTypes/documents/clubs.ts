import { ALL_FIELDS_GROUP, defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'
import { schemeFilter,branchFilter,ArrayHierarchyInput , ReferenceHierarchyInput } from 'sanity-plugin-taxonomy-manager'
import {imageAndAltText} from '../sharedFields'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/studio/schema-types
 */

export const club = defineType({
  name: 'club',
  title: 'Club',
  type: 'document',
  groups: [
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      ...ALL_FIELDS_GROUP,
      hidden: true,
    },
  ],
  fieldsets: [
    {
      name: 'categories',
      title: 'Categories',
      options: { collapsible: true, collapsed: false }
    }
  ],
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
      group: 'details',
    }),
    {
      ...imageAndAltText,
      group: 'details',
    },
    defineField({
      name: 'clubType',
      title: 'Club Type',
      type: 'array',
      group: 'details',
      fieldset: 'categories',
      of: [
        {
            type: 'reference',
            to: {type: 'skosConcept'},
            options: {
                filter: schemeFilter({schemeId: 'DQhM7Q'}),
                disableNew: true,
            }
        }
      ],
      components: {field: ArrayHierarchyInput},
    }),
    defineField({
      name: 'enrichmentType',
      title: 'Enrichment Type',
      type: 'array',
      group: 'details',
      fieldset: 'categories',
      of: [
        {
            type: 'reference',
            to: {type: 'skosConcept'},
            options: {
                filter: schemeFilter({schemeId: 'tntDws'}),
                disableNew: true,
            }
        }
      ],
      components: {field: ArrayHierarchyInput},
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   group: 'details',
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'metaTitle',
    //   title: 'Meta Title',
    //   type: 'string',
    //   group: 'seo',
    // }),
    // defineField({
    //   name: 'metaDescription',
    //   title: 'Meta Description',
    //   type: 'string',
    //   group: 'seo',
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: 'ogImage',
    //   title: 'OG Image',
    //   type: 'image',
    //   group: 'seo',
    // }),
    // defineField({
    //   name: 'ogDescription',
    //   title: 'OG Description',
    //   type: 'string',
    //   group: 'seo',
    // }),
    // defineField({
    //   name: 'robots',
    //   title: 'Robots Meta Tag',
    //   type: 'string',
    //   group: 'seo',
    //   description: 'Control search engine crawling and indexing (e.g., "index, follow", "noindex, nofollow")',
    //   initialValue: 'index, follow',
    //   options: {
    //     list: [
    //       { title: 'Index, Follow (Default)', value: 'index, follow' },
    //       { title: 'No Index, Follow', value: 'noindex, follow' },
    //       { title: 'Index, No Follow', value: 'index, nofollow' },
    //       { title: 'No Index, No Follow', value: 'noindex, nofollow' },
    //     ],
    //   },
    // }),


  ],
})
