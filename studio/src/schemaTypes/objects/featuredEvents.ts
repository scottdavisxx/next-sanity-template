import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

/**
 * Featured Events block. Displays up to 3 events from the event document type:
 * first by featured flag, then by soonest upcoming date. Past events are excluded.
 * Use this block in a page builder to show a "Family Life at ORLS: Upcoming Events" section.
 */
export const featuredEvents = defineType({
  name: 'featuredEvents',
  title: 'Featured Events',
  type: 'object',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Section heading',
      type: 'string',
      description: 'Optional. Defaults to "Family Life at ORLS:" when empty.',
      initialValue: 'Family Life at ORLS:',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Optional. Defaults to "Upcoming Events" when empty.',
      initialValue: 'Upcoming Events',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Featured Events',
        subtitle: 'Shows up to 3 events (featured first, then soonest). Uses event documents.',
        media: CalendarIcon,
      }
    },
  },
})
