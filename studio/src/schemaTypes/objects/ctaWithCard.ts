import {defineField, defineType} from 'sanity'
import {title, blurb, imageAndAltText, cta, textColor} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const ctaWithCard = defineType({
  name: 'ctaWithCard',
  title: 'CTA with Card',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    title,
    defineField({
      name: 'emphasizedText',
      title: 'Emphasized Text',
      type: 'string',
      description:
        'Text from the title to highlight in dark blue (e.g. "1961"). Leave empty for no emphasis.',
    }),
    textColor,
    blurb,
    imageAndAltText,
    defineField({
      name: 'overlapImage',
      title: 'Overlap Image',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctas',
      title: 'CTA',
      type: 'array',
      of: [cta],
    }),
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
