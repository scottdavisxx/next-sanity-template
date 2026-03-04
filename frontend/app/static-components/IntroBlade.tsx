import Image from "next/image"
import Link from "next/link"
import Cta from "./ui/Cta"


export interface IntroProps {
  titles: Array<{ title: string }>;
  blurb: string;
  ctas?: Array<{ buttonText: string; link: string }>;
  bgImage: string;
}

export default function Intro({ titles, blurb, ctas, bgImage }: IntroProps) {




    return (
        <div className="relative flex flex-col px-24 py-8 gap-2  justify-between min-h-[478px] max-md:px-8">
            <div className="absolute inset-0 left-0 right-0 w-full h-full overflow-hidden">
                <Image
                    src={bgImage}
                    alt={'pattern'}
                    fill
                    className="object-cover opacity-75" />

            </div>
            <div className="relative flex flex-col md:flex-row px-6 py-8 gap-8 md:justify-between items-center z-10">
                {
                    titles.map((obj) => {
                        return <h2 key={obj.title} className="text-4xl max-md:text-3xl max-md:w-[100%] font-bold w-full md:w-1/3 text-center">{obj.title}</h2>
                    })
                }
            </div>
            <div className="relative flex px-6 max-sm:px-[0] py-8 gap-2 justify-between items-center z-10">
                <p className="text-[2rem] text-center">{blurb}</p>
            </div>
            <div className="relative flex flex-col md:flex-row px-6 py-8 gap-8 justify-center items-center z-10">
                {
                    ctas?.map((cta) => {
                        return <Cta key={cta.buttonText} href={cta.link} buttonText={cta.buttonText} dark={true} buttonColor="brand-black" />
                    })
                }
            </div>


        </div>
    )
}