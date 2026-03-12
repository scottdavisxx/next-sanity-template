import { ALL_FIELDS_GROUP, defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/studio/schema-types
 */

export const page = defineType({
  name: 'page',
  title: 'Page',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      group: 'details',
      of: [
        { type: 'heroBanner' },
        { type: 'subnav' },
        { type: 'titleAndSubtitle' },
        { type: 'textWithLogo' },
        { type: 'imageWithText' },
        { type: 'twoColInfo' },
        { type: 'twoColInfoWithImage' },
        { type: 'twoColInfoWithCard' },
        { type: 'twoColBulletsWithCTAs' },
        { type: 'threeColToggle' },
        { type: 'threeColExpandingCards' },
        { type: 'threeColEventCards' },
        { type: 'threeColCtas' },
        { type: 'threeColWithIcons' },
        { type: 'threeColCircleImage' },
        { type: 'threeColCards' },
        { type: 'clubCards' },
        { type: 'statisticsTwoCol' },
        { type: 'fourColStatistics' },
        { type: 'oneColInfo' },
        { type: 'numberedList' },
        { type: 'leadership' },
        { type: 'introBlade' },
        { type: 'ctaWithMediaCard' },
        { type: 'ctaWithCard' },
        { type: 'twoCtasWithImage' },
        { type: 'tallTwoColTextWithCard' },
        { type: 'cardGrid' },
        { type: 'calendar' },
        { type: 'clubsView' },
        { type: 'featuredEvents' },
      ],
      options: {
        insertMenu: {
          // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/studio/array-type#efb1fe03459d
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName: string) =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      group: 'seo',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'robots',
      title: 'Robots Meta Tag',
      type: 'string',
      group: 'seo',
      description: 'Control search engine crawling and indexing (e.g., "index, follow", "noindex, nofollow")',
      initialValue: 'index, follow',
      options: {
        list: [
          { title: 'Index, Follow (Default)', value: 'index, follow' },
          { title: 'No Index, Follow', value: 'noindex, follow' },
          { title: 'Index, No Follow', value: 'index, nofollow' },
          { title: 'No Index, No Follow', value: 'noindex, nofollow' },
        ],
      },
    }),


  ],
})
