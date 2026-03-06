import {defineField, defineType} from 'sanity'
import {title, imageAndAltText} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const oneColInfo = defineType({
  name: 'oneColInfo',
  title: 'One Column Info',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Text', value: 'text'},
          {title: 'Image', value: 'image'},
        ],
        layout: 'radio',
      },
      initialValue: 'text',
      validation: (Rule) => Rule.required(),
    }),
    title,
    defineField({
      name: 'bodyContent',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: { hotspot: true }}],
      hidden: ({parent}) => parent?.variant !== 'text',
    }),
    imageAndAltText,
    defineField({
      name: 'imageBlurb',
      title: 'Image Blurb',
      type: 'text',
      hidden: ({parent}) => parent?.variant !== 'image',
    }),
  ],
  preview: {
    select: {title: 'title', variant: 'variant'},
    prepare({title, variant}) {
      return {
        title: 'One Column Info',
        subtitle: `${variant || 'text'}: ${title || 'No title'}`,
      }
    },
  },
})
