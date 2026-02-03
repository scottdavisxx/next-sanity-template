import {defineType} from 'sanity'
import {titleOne, titleTwo, cta, imageAndAltText} from '../sharedFields'

export const heroBanner = defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  // icon: chooseAnIcon
  // groups: [
  //   {},
  //   {}
  // ],
  fields: [titleOne, titleTwo, cta, imageAndAltText],
  preview: {
    select: {
      titleOne: 'titleOne',
      media: 'imageAndAltText.image',
    },
    prepare({titleOne, media}) {
      return {
        title: 'Hero Banner',
        subtitle: titleOne || 'No title set',
        media: media,
      }
    },
  },
})
