import {bgColor} from './../sharedFields'
import {defineField, defineType} from 'sanity'
import {
  title,
  blurb,
  imageAndAltText,
  cta,
  textColor,
  emphasizedText,
  bgColor,
  imageWidth,
  imageHeight,
} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const ctaWithCard = defineType({
  name: 'ctaWithCard',
  title: 'CTA with Card',
  type: 'object',
  fieldsets: [
    {
      name: 'imageOptions',
      title: 'Image Options',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'sectionOptions',
      title: 'Section Options',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  icon: DocumentIcon,
  fields: [
    title,
    defineField({
      ...emphasizedText,
      fieldset: 'sectionOptions',
    }),
    defineField({
      ...textColor,
      fieldset: 'sectionOptions',
    }),
    defineField({
      ...bgColor,
      fieldset: 'sectionOptions',
    }),
    blurb,
    imageAndAltText,
    defineField({
      ...imageWidth,
      fieldset: 'imageOptions',
    }),
    defineField({
      ...imageHeight,
      fieldset: 'imageOptions',
    }),
    defineField({
      name: 'overlapImage',
      title: 'Overlap Image',
      type: 'boolean',
      initialValue: false,
      fieldset: 'imageOptions',
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
      fieldset: 'sectionOptions',
    }),
    defineField({
      name: 'icon',
      title: 'Show Logo',
      type: 'boolean',
      initialValue: false,
      fieldset: 'sectionOptions',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'imageAndAltText.image'},
    prepare({title, media}) {
      return {
        title: title || 'CTA with Card',
        subtitle: 'CTA with Card',
        media,
      }
    },
  },
})
