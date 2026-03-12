import Link from 'next/link'

import { sanityFetch } from '@/sanity/lib/live'
import { moreEventsQuery, allEventsQuery } from '@/sanity/lib/queries'
import { AllEventsQueryResult } from '@/sanity.types'
import DateComponent from '@/app/components/tbd/Date'
import OnBoarding from '@/app/components/tbd/Onboarding'
import Avatar from '@/app/components/tbd/Avatar'
import { dataAttr } from '@/sanity/lib/utils'

const Event = ({ event }: { event: AllEventsQueryResult[number] }) => {
  const { _id, title, slug, excerpt, date, author } = event

  return (
    <article
      data-sanity={dataAttr({ id: _id, type: 'event', path: 'title' }).toString()}
      key={_id}
      className="border border-gray-200 rounded-sm p-6 bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white relative"
    >
      <Link className="hover:text-brand underline transition-colors" href={`/events/${slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="text-2xl mb-4">{title}</h3>

        <p className="line-clamp-3 text-sm leading-6 text-gray-600 max-w-[70ch]">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        {/* {author && author.firstName && author.lastName && (
          <div className="flex items-center">
            <Avatar person={author} small={true} />
          </div>
        )} */}
        <time className="text-gray-500 text-xs font-mono" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  )
}

const Events = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode
  heading?: string
  subHeading?: string
}) => (
  <div>
    {heading && <h2 className="text-3xl text-gray-900 sm:text-4xl lg:text-5xl">{heading}</h2>}
    {subHeading && <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>}
    <div className="pt-6 space-y-6">{children}</div>
  </div>
)

export const AllEvents = async () => {
  const { data } = await sanityFetch({ query: allEventsQuery })

  if (!data || data.length === 0) {
    return <OnBoarding />
  }

  return (
    <Events
      heading="Recent Events"
      subHeading={`${data.length === 1 ? 'This event is' : `These ${data.length} events are`} populated from your Sanity Studio.`}
    >
      {data.map((event: AllEventsQueryResult[number]) => (
        <Event key={event._id} event={event} />
      ))}
    </Events>
  )
}
