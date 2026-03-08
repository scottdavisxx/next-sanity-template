import {defineField, defineType} from 'sanity'
import {title, subtitle, cta, blurb} from '../sharedFields'
import {ComponentIcon} from '@sanity/icons'

export const threeColExpandingCards = defineType({
  name: 'threeColExpandingCards',
  title: 'Three Column Expanding Cards',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    subtitle,
    defineField({
      name: 'footnote',
      title: 'Footnote',
      type: 'string',
    }),
    defineField({
      name: 'arrowLabel',
      title: 'Arrow Label',
      type: 'string',
    }),
    defineField({
      name: 'sectionBgImage',
      title: 'Section Background Image',
      type: 'image',
      description: 'Decorative background (optional)',
    }),
    defineField({
      name: 'items',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'expanded',
              title: 'Expanded State',
              type: 'object',
              fields: [
                blurb,
                defineField({
                  name: 'bgImage',
                  title: 'Background Image',
                  type: 'image',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Image',
                  type: 'image',
                  description: 'Optional icon/illustration',
                }),
                cta,
              ],
            }),
            defineField({
              name: 'collapsed',
              title: 'Collapsed State',
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Name', type: 'string'}),
                defineField({
                  name: 'bgImage',
                  title: 'Background Image',
                  type: 'image',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Image',
                  type: 'image',
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {heading: 'heading'},
    prepare({heading}) {
      return {
        title: 'Three Column Expanding Cards',
        subtitle: heading || 'No heading set',
      }
    },
  },
})
