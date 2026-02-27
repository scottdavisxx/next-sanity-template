import Cta, { CtaProps } from "./ui/Cta";
import OrlsIcon from "./icons/orls-icon";

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
            {/* Decorative Icon */}


            <div className="relative z-10 max-w-[1400px] mx-auto  max-lg:flex ">

                <div className="leftContainer">
                    {/* Title */}
                    <h2 className="text-[4.375rem] font-bold mb-12">{title}</h2>

                    {/* Two Column Bullets */}
                    <div className="relative z-[2] grid grid-cols-2 gap-x-16 gap-y-8 mb-12 max-w-3xl">
                        {/* Left Column */}
                        <div className="flex flex-col gap-8">
                            {leftBullets.map((bullet, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mt-1">
                                        <div className="w-4 h-0.5 bg-white"></div>
                                        <div className="w-0.5 h-4 bg-white absolute"></div>
                                    </div>
                                    <p className="text-2xl leading-relaxed">{bullet.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-8">
                            {rightBullets.map((bullet, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mt-1">
                                        <div className="w-4 h-0.5 bg-white"></div>
                                        <div className="w-0.5 h-4 bg-white absolute"></div>
                                    </div>
                                    <p className="text-2xl leading-relaxed">{bullet.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-6">
                        {cta1 && <Cta {...cta1} />}
                        {cta2 && <Cta {...cta2} />}
                    </div>
                </div>

                <div className="relative rightContainer ">
                    {showIcon && (
                        <div className="absolute right-0 top-[-450px] right-[-200px] max-[1400px]:w-[300px]  ">
                            <OrlsIcon color="medium-blue" width={600} height={600} />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
