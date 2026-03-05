import {defineField, defineType} from 'sanity'
import {title, blurb, imageAndAltText, cta} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const ctaWithCard = defineType({
  name: 'ctaWithCard',
  title: 'CTA with Card',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    title,
    blurb,
    imageAndAltText,
    cta,
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      description: 'Decorative background image (optional)',
    }),
    defineField({
      name: 'icon',
      title: 'Show Logo',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title', media: 'imageAndAltText.image'},
    prepare({title, media}) {
      return {
        title: 'CTA with Card',
        subtitle: title || 'No title set',
        media,
      }
    },
  },
})
