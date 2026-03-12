import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fieldsets: [
    {
      name: 'navigation',
      title: 'Navigation',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    defineField({
      name: 'navigationItems',
      title: 'Navigation items',
      type: 'array',
      fieldset: 'navigation',
      of: [
        defineArrayMember({
          name: 'navigationItem',
          title: 'Navigation item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Path',
              type: 'string',
              description: 'Internal path, e.g. /about or /student-life',
              validation: (rule) =>
                rule
                  .required()
                  .regex(/^\/.*/, {name: 'leading-slash', invert: false})
                  .warning('Path should start with a /'),
            }),
            defineField({
              name: 'subnav',
              title: 'Child links',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'subnavItem',
                  title: 'Child link',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'Path',
                      type: 'string',
                      description: 'Internal path, e.g. /about or /student-life',
                      validation: (rule) =>
                        rule
                          .required()
                          .regex(/^\/.*/, {name: 'leading-slash', invert: false})
                          .warning('Path should start with a /'),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
