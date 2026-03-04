import {defineField} from 'sanity'

export const title = defineField({
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (Rule) => Rule.required().error('Title is required'),
})

export const titleOne = defineField({
  name: 'titleOne',
  title: 'Title One',
  type: 'string',
  validation: (Rule) => Rule.required().error('Title One is required'),
})

export const titleTwo = defineField({
  name: 'titleTwo',
  title: 'Title Two',
  type: 'string',
})

export const subtitle = defineField({
  name: 'subtitle',
  title: 'Subtitle',
  type: 'string',
})

export const blurb = defineField({
  name: 'blurb',
  title: 'Blurb',
  type: 'array',
  of: [
    {
      type: 'block',
    },
  ],
})

export const image = defineField({
  name: 'image',
  title: 'Image',
  type: 'image',
})

export const altText = defineField({
  name: 'altText',
  title: 'Alt Text',
  type: 'string',
})

export const imageAndAltText = defineField({
  name: 'imageAndAltText',
  title: 'Image and Alt Text',
  type: 'object',
  fields: [image, altText],
})

export const videoFile = defineField({
  name: 'videoFile',
  title: 'Video File',
  type: 'file',
})

export const dateText = defineField({
  name: 'dateText',
  title: 'Date Text',
  type: 'string',
  // validation: (Rule) => Rule.required().error('Date is required'),
})

export const time = defineField({
  name: 'time',
  title: 'Time',
  type: 'string',
  // validation: (Rule) => Rule.required().error('Time is required'),
})

export const place = defineField({
  name: 'place',
  title: 'Place',
  type: 'string',
  // validation: (Rule) => Rule.required().error('Place is required'),
})

export const href = defineField({
  name: 'href',
  title: 'Link URL',
  type: 'string',
  validation: (Rule) => Rule.required().error('Link URL is required'),
})

export const bullets = defineField({
  name: 'bullets',
  title: 'Bullet Points',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [title, subtitle],
    },
  ],
})

export const titleLineBreak = defineField({
  name: 'lineBreak',
  title: 'Title Line Break?',
  type: 'boolean',
})

export const publishDate = defineField({
  name: 'publishDate',
  title: 'Date Published',
  type: 'datetime',
  options: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
  },
  initialValue: () => new Date().toISOString(),
  validation: (Rule) => Rule.required().error('Event date is required'),
})

export const cta = defineField({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      validation: (Rule) => Rule.required().error('Link URL is required'),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Button Text is required'),
    }),
    defineField({
      name: 'newTab',
      title: 'Open in new Tab?',
      type: 'boolean',
    }),
  ],
})
