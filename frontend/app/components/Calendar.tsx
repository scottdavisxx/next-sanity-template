import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type CalendarProps = {
  block: ExtractPageBuilderType<'calendar'>
  index: number
  pageId: string
  pageType: string
}

const DEFAULT_CALENDAR_URL =
  'https://calendar.google.com/calendar/embed?src=ordallas.org_01guksd5i63kb6o1sigjtgd120%40group.calendar.google.com&ctz=America%2FChicago'

export default function Calendar({ block }: CalendarProps) {
  const title = block?.title
  const iframeUrl = block?.iframeUrl || DEFAULT_CALENDAR_URL

  return (
    <div className="flex justify-center bg-dark-blue py-6">
      <div className="flex flex-col gap-8">
        {title && <h2 className="text-6xl font-bold text-white leading-20 text-center">{title}</h2>}
        <iframe
          src={iframeUrl}
          style={{ border: 0, borderRadius: '16px' }}
          width="1400"
          height="750"
          scrolling="no"
          title="Calendar"
        />
      </div>
    </div>
  )
}