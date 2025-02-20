import Image from "next/image";
import { CiYoutube, CiClock2 } from "react-icons/ci";

export interface GradeCardProps {
  imageSrc: string;
  gradeLevel: string;
  description: string;
  videoCount: number;
  videoHours: number;
}

export const GradeCard: React.FC<GradeCardProps> = ({
  imageSrc,
  gradeLevel,
  description,
  videoCount,
  videoHours,
}) => {
  return (
    <div className="h-full w-full rounded-sm p-3 lg:p-5">
      <Image
        src={imageSrc}
        alt="grade level images"
        width={92}
        height={92}
        className="mx-auto object-cover md:h-[140px] md:w-[140px] lg:h-[224px] lg:w-[224px]"
      />
      {/* the content section */}
      <div className="mt-6 flex w-full flex-col gap-y-6">
        <h5 className="text-center text-xs font-medium text-SC-Nav-Blue lg:text-lg">
          {gradeLevel}
        </h5>
        <p className="min-h-[102px] text-[8px] font-normal text-black lg:text-sm">
          {description}
        </p>
        <div className="flex gap-x-4 justify-self-end">
          <div className="flex w-fit items-center gap-x-2">
            <CiYoutube
              color="#000000"
              size={10}
              className="md:h-[14px] md:w-[14px]"
            />
            <p className="text-[6px] font-light text-black lg:text-sm">
              {videoCount} Videos
            </p>
          </div>
          <div className="flex w-fit items-center gap-x-2">
            <CiClock2
              color="#000000"
              size={10}
              className="md:h-[14px] md:w-[14px]"
            />
            <p className="text-[6px] font-light text-black lg:text-sm">
              {videoHours} hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
