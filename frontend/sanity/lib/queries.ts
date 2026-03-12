import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

const eventFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "event": event->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    metaTitle,
    metaDescription,
    ogImage,
    ogDescription,
    robots,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
      _type == "heroBanner" => {
        titleOne,
        titleTwo,
        cta,
        imageAndAltText
      },
      _type == "featuredEvents" => {
        ...,
        "events": *[_type == "event" && defined(slug.current) && date >= now()]
          | order(featured desc, date asc)[0...3]{
            _id,
            "title": coalesce(title, "Untitled"),
            "slug": slug.current,
            cardText,
            coverImage,
            cta{
              href,
              buttonText,
              newTab,
              buttonColor
            },
            date
          }
      },
    },
  }
`)

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "event" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)

export const allEventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${eventFields}
  }
`)

export const moreEventsQuery = defineQuery(`
  *[_type == "event" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${eventFields}
  }
`)

export const eventQuery = defineQuery(`
  *[_type == "event" && slug.current == $slug] [0] {
    _id,
    "title": coalesce(title, "Untitled"),
    "slug": slug.current,
    cardText,
    coverImage,
    buttonText,
    href,
    dateText,
    time,
    place,
    description[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${eventFields}
  }
`)

export const eventPagesSlugs = defineQuery(`
  *[_type == "event" && defined(slug.current)]
  {"slug": slug.current}
`)

/** Upcoming + featured events for the FeaturedEvents block: 3 events, featured first, then soonest. Excludes past (date < start of today). */
export const featuredEventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current) && date >= $now]
  | order(featured desc, date asc)
  [0...3] {
    _id,
    "title": coalesce(title, "Untitled"),
    "slug": slug.current,
    cardText,
    coverImage,
    cta {
      href,
      buttonText,
      newTab,
      buttonColor
    },
    date
  }
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)

const clubFields = /* groq */ `
  _id,
  name,
  "slug": slug.current,
  eyebrow,
  desc,
  blurb,
  bannerImage,
  imageAndAltText,
  clubType[]->{
    _id,
    prefLabel
  },
  enrichmentType[]->{
    _id,
    prefLabel
  },
  metaTitle,
  metaDescription,
  ogImage,
  ogDescription,
  robots
`

export const clubQuery = defineQuery(`
  *[_type == "club" && slug.current == $slug][0] {
    ${clubFields}
  }
`)

export const clubPagesSlugs = defineQuery(`
  *[_type == "club" && defined(slug.current)]
  {"slug": slug.current}
`)
