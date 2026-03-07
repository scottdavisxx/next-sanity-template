import {defineField, defineType} from 'sanity'
import {title, blurb, imageAndAltText, cta} from '../sharedFields'
import {DocumentIcon} from '@sanity/icons'

export const ctaWithMediaCard = defineType({
  name: 'ctaWithMediaCard',
  title: 'CTA with Media Card',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    title,
    blurb,
    {...imageAndAltText, description: 'Only add if not using a video'},
    cta,
    defineField({
      name: 'video',
      title: 'Video Link',
      description:
        'This field is configured for the team to add a youtube video that will be open in an overlay for the user to see. If there is link the video will not be available on the website .',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'imageAndAltText.image'},
    prepare({title, media}) {
      return {
        title: 'CTA with Media Card',
        subtitle: title || 'No title set',
        media,
      }
    },
  },
})
