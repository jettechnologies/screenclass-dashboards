import Image from "next/image";
import { GradeCardProps, GradeCard } from "../../components";

const data: GradeCardProps[] = [
  {
    imageSrc: "/images/grade-level-1.png",
    gradeLevel: "Primary",
    description:
      "Start with the Basics. Create a Strong Learning Base | Experience Education Through Our Dynamic and Inspiring Medium.",
    videoCount: 36,
    videoHours: 12,
  },
  {
    imageSrc: "/images/grade-level-2.png",
    gradeLevel: "Secondary",
    description:
      "Learn the core principles of your discipline and take the first step toward your dream career and higher education",
    videoCount: 36,
    videoHours: 12,
  },
  {
    imageSrc: "/images/grade-level-3.png",
    gradeLevel: "Pre-varsity",
    description:
      "Build confidence and perform at your best in GCE, S.S.C.E, JAMB, and A-levels.",
    videoCount: 36,
    videoHours: 12,
  },
];

export const GradeLevel = () => {
  return (
    <section
      className="grid min-h-fit w-full place-items-center bg-[#F4F4F4] px-2 pb-8 pt-16 font-poppins sm:px-8 md:min-h-screen md:pb-0 md:pt-0 lg:px-14"
      style={{
        background:
          "linear-gradient(to right, rgba(90,159,211,0.25) 0%, rgba(255,160,103,0.25) 100%)",
        backdropFilter: "blur(80px)",
        WebkitBackdropFilter: "blur(80px)",
      }}
    >
      <div className="min-h-3/5 relative flex w-full flex-col gap-x-4 lg:flex-row">
        <div className="w-full lg:w-[30%]">
          <h4 className="mb-[70px] text-center text-base font-medium md:mb-[140px] lg:mb-0 lg:text-left lg:text-2xl xl:text-5xl">
            Grade Levels
          </h4>
          <Image
            src="/images/grade-arrow.png"
            alt="grade arrow icons"
            width={127}
            height={141}
            className="left-[33.5%] top-6 z-20 object-cover max-[780px]:absolute md:w-[230px] lg:z-0 lg:h-full lg:w-[463px]"
            sizes="(max-width: 1024px) 100vw, (max-width: 426px) 33vw"
          />
        </div>
        <div className="z-30 mt-16 flex h-full flex-col items-center gap-x-0 gap-y-6 md:mt-0 md:flex-row md:gap-x-6 md:gap-y-0 lg:z-0 lg:gap-x-8">
          {data.map((item, index) => (
            <div
              className="w-[80%] flex-1 rounded-sm bg-white lg:h-[500px] lg:w-[282px]"
              key={index}
            >
              <GradeCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
