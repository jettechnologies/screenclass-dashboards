import Image from "next/image";

interface HeroSectionProps {
  heroImg?: string;
  heroColor: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroColor,
  heroImg,
}) => {
  return (
    <div className="mt-2 flex w-full items-center justify-center p-4 sm:mt-0 sm:p-7">
      <div
        className={`relative flex h-full w-full items-center justify-between rounded-[2rem] ${heroColor} flex-row p-3 lg:p-5`}
        style={{ clipPath: "inset(-10px 0px 0px 0px)" }}
      >
        {/* Text Section */}
        <div className="relative left-0 z-10 flex flex-col sm:left-7">
          <h2 className="text-sm font-semibold text-white md:text-[28px] lg:text-3xl">
            Welcome back Ifeoluwa!
          </h2>
          <h2 className="mt-5 max-w-[370px] text-[8px] text-white md:text-xs">
            You’re doing great! <br /> You’ve learned 80% of your goal this
            week! <br /> Keep it up and improve your result.
          </h2>
        </div>

        {/* Absolute Image Container */}
        <div className="absolute right-0 top-1/2 h-[110px] w-[120px] -translate-y-1/2 md:h-[130px] md:w-[130px] lg:h-[165px] lg:w-[175px]">
          <Image
            src={heroImg || "/images/girl-img.png"}
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
