import { defineType, defineField } from "sanity";
import { cta } from "../sharedFields";

export const subnav = defineType({
  name: 'subnav',
  title: 'Subnav',
  type: 'object',
  fields: [
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: (cta.fields as { name: string }[]).filter((f) => f.name !== 'buttonColor'),
        }
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Subnav',
        subtitle: 'Subnav',
        media: (
          <img
            src="/static/subnav.png"
            alt="Subnav"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        ),
      }
    },
  },
})