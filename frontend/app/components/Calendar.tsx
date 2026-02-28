interface CalendarProps {
  title?: string;
}

{/* Notes
  This could take a props for the iframe URL to show different calendars
  It could also take a width and height prop, but it looks decent on responsive already
*/}

export default function Calendar({ title }: CalendarProps) {
  return (
    <div className="flex justify-center bg-dark-blue py-6">
      <div className="flex flex-col gap-8">
        {title && <h2 className="text-6xl font-bold text-white leading-20 text-center">{title}</h2>}
        <iframe src="https://calendar.google.com/calendar/embed?src=ordallas.org_01guksd5i63kb6o1sigjtgd120%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: 0 }} width="1400" height="750"
          scrolling="no">
        </iframe>
      </div>
    </div>
  )
}