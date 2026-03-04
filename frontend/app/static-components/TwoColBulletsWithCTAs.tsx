import Cta, { CtaProps } from "./ui/Cta";
import OrlsIcon from "./icons/orls-icon";
import Image from "next/image";

export interface BulletPoint {
    text: string;
}

export interface TwoColBulletsWithCTAsProps {
    title: string;
    leftBullets: BulletPoint[];
    rightBullets: BulletPoint[];
    cta1?: CtaProps;
    cta2?: CtaProps;
    showIcon?: boolean;
}

export default function TwoColBulletsWithCTAs({
    title,
    leftBullets,
    rightBullets,
    cta1,
    cta2,
    showIcon = true,
}: TwoColBulletsWithCTAsProps) {
    return (
        <div className="bg-dark-blue text-white py-16 px-24 relative overflow-hidden">


            <div className="relative z-10 max-w-[1400px] mx-auto max-lg:flex max-lg:flex-col-reverse">

                <div className="leftContainer max-md:pt-8">
                    <h2 className="text-[4.375rem] min-md:max-lg:text-[4rem] max-md:[3.5rem] max-sm:text-[3rem] font-bold mb-12 max-lg:text-center">{title}</h2>

                    <div className="relative z-[2] grid grid-cols-2 gap-x-16 gap-y-8 mb-12 max-w-3xl max-md:block">
                        {/* Left Column */}
                        <div className="flex flex-col gap-8 max-md:pb-8">
                            {leftBullets.map((bullet, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Image
                                        src="/whiteCross.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="flex-shrink-0 mt-1 pt-2"
                                    />
                                    <p className="text-2xl leading-relaxed">{bullet.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-8">
                            {rightBullets.map((bullet, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Image
                                        src="/whiteCross.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="flex-shrink-0 mt-1 pt-2"
                                    />
                                    <p className="text-2xl leading-relaxed">{bullet.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-6 max-md:justify-center max-md:flex-col max-md:items-center">
                        {cta1 && <Cta {...cta1} />}
                        {cta2 && <Cta {...cta2} />}
                    </div>
                </div>

                <div className="relative rightContainer max-lg:flex max-lg:justify-center ">
                    {showIcon && (
                        <div className="absolute right-0 top-[-450px] right-[-200px] max-lg:flex max-lg:justify-center  max-lg:relative max-lg:top-[0] max-lg:right-[0] max-lg:width-[100%] min-[1050px]:max-[1400px]:w-[300px]   ">
                            <OrlsIcon color="medium-blue" width={600} height={600} className="crossSize" />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
