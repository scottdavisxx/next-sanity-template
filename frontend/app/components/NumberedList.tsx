import { ReactNode } from 'react'
import Image from 'next/image'

interface ListItem {
  number?: number
  heading: string
  body: ReactNode
}

interface NumberedListProps {
  title: string
  items: ListItem[]
}

export default function NumberedList({ title, items }: NumberedListProps) {
  return (
    <section className="bg-white relative overflow-hidden px-6 py-12 md:px-16 md:py-16 lg:px-[94px] lg:py-[60px]">
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <Image
          src="/church.png"
          alt=""
          width={830}
          height={1074}
          className="block"
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.03) 0%, #FFF 49.04%)' }}
      />
      <div className="relative">
      <h2 className="font-bold text-4xl md:text-6xl lg:text-[96px] text-black text-center mb-12 lg:mb-16">
        {title}
      </h2>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            {index > 0 && <hr className="border-t border-black/15" />}
            <div className="flex flex-row items-start gap-6 lg:gap-10 py-10 lg:py-12">
              <div className="w-[50px] lg:w-[80px] flex-shrink-0 text-center">
                {item.number !== undefined && (
                  <span className="font-bold text-4xl lg:text-[64px] text-[#355ba5]">
                    {item.number}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg md:text-2xl lg:text-[35px] text-black">
                  {item.heading}
                </p>
                <div className="mt-2 text-base md:text-xl lg:text-[32px] text-black leading-snug">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
