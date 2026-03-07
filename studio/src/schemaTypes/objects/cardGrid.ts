import {defineField, defineType} from 'sanity'
import {imageAndAltText, removePaddingTop, cta} from '../sharedFields'
import {ComponentIcon} from '@sanity/icons'

export const cardGrid = defineType({
  name: 'cardGrid',
  title: 'Card Grid',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            imageAndAltText,
            cta,
            defineField({
              name: 'fullWidth',
              title: 'Full Width',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
    removePaddingTop,
  ],
  preview: {
    select: {heading: 'heading'},
    prepare({heading}) {
      return {
        title: 'Card Grid',
        subtitle: heading || 'No heading set',
      }
    },
  },
})
