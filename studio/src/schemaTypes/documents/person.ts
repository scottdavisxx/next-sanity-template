import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {blurb} from '../sharedFields'

// I removed the alt text field. In the UI we will just concatenate the title, first name, and last name.

export const person = defineType({
  name: 'person',
  title: 'Person',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      ...blurb,
      title: 'Bio',
    }),
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      title: 'title',
      picture: 'picture',
    },
    prepare(selection) {
      return {
        title: `${selection.title ? `${selection.title} ` : ''}${selection.firstName} ${selection.lastName}`,
        subtitle: 'Person',
        media: selection.picture,
      }
    },
  },
})
