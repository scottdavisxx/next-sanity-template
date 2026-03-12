import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'
import {cta, title} from '../sharedFields'

export const introBlade = defineType({
  name: 'introBlade',
  title: 'Intro Blade',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'singleTitle',
      title: 'Single Title',
      type: 'string',
    }),
    defineField({
      name: 'titles',
      title: 'Titles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [cta],
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      description: 'Decorative background',
    }),
  ],
  preview: {
    select: {
      titles: 'titles',
      media: 'bgImage',
    },
    prepare({titles, media}) {
      const first = titles?.[0]?.title
      return {
        title: first || 'Intro Blade',
        subtitle: 'Intro Blade',
        media,
      }
    },
  },
})
