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
    <div className="bg-dark-blue py-8 md:py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-14">
          {title && <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center">{title}</h2>}
          <div className="overflow-x-auto">
            <div
              className="mx-auto"
              style={{
                minWidth: 256,
                width: '100%',
                maxWidth: '1400px',
                aspectRatio: '16/9',
                position: 'relative',
              }}
            >
              <iframe
                src={iframeUrl}
                style={{
                  border: 0,
                  borderRadius: '16px',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                width="100%"
                height="100%"
                scrolling="no"
                title="Calendar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}