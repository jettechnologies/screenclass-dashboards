import Image from "next/image";
// import student from "../assets/student.svg";

interface HeroSectionProps {
  heroImg?: string;
  heroColor: string;
  children: React.ReactElement;
}

export const HeroSection = ({
  heroColor,
  heroImg,
  children,
}: HeroSectionProps) => {
  return (
    <div className="mt-2 flex w-full items-center justify-center p-4 sm:mt-0 sm:p-7">
      <div
        className={`relative flex h-full w-full items-center justify-between rounded-[2rem] ${heroColor} flex-row p-3 lg:p-5`}
        style={{ clipPath: "inset(-10px 0px 0px 0px)" }}
      >
        {/* Text Section */}
        <div className="relative left-0 z-10 flex flex-col sm:left-7">
          {children}
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
