import Image from "next/image";
import { GradeCardProps, GradeCard } from "../../components";

const data: GradeCardProps[] = [
  {
    imageSrc: "/images/grade-level-1.png",
    gradeLevel: "Primary",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    videoCount: 36,
    videoHours: 12,
  },
  {
    imageSrc: "/images/grade-level-2.png",
    gradeLevel: "Secondary",
    description: `Your Career choice starts here
               Your Pathway to higher institution.
               Learn the fundamentals of your discipline on our platform!`,
    videoCount: 36,
    videoHours: 12,
  },
  {
    imageSrc: "/images/grade-level-3.png",
    gradeLevel: "Pre-varsity",
    description: `Proper preparation proceeds peak performance.
                Get prepaed for your GCE, S.S.C.E, JAMB and A-lEVELS eXAMS.`,
    videoCount: 36,
    videoHours: 12,
  },
];

export const GradeLevel = () => {
  return (
    <section className="grid min-h-screen w-full place-items-center bg-[#F4F4F4] px-2 font-poppins sm:px-8 lg:px-14">
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
        <div className="z-30 flex h-full gap-x-3 md:gap-x-6 lg:z-0 lg:gap-x-8">
          {data.map((item, index) => (
            <div
              className="flex-1 rounded-sm bg-white lg:h-[500px] lg:w-[282px]"
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
