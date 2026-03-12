import {defineField, defineType} from 'sanity'
import {subtitle, imageAndAltText, removePaddingTop, cta} from '../sharedFields'
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
    subtitle,
    defineField({
      name: 'darkOverlay',
      title: 'Dark Overlay',
      type: 'boolean',
      initialValue: false,
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
    select: {
      heading: 'heading',
      media: 'cards.0.imageAndAltText.image',
    },
    prepare({heading, media}) {
      return {
        title: heading || 'Card Grid',
        subtitle: 'Card Grid',
        media,
      }
    },
  },
})
