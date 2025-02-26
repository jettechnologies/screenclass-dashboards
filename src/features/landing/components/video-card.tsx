import Image from "next/image";
import { Video } from "@/components/shared";

export interface VideoCardProps {
  imageSrc: string;
  videoSrc?: string;
  subject: string;
  description: string;
  topicCount: number;
  moduleCount: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  imageSrc,
  videoSrc,
  subject,
  description,
  topicCount,
  moduleCount,
}) => {
  return (
    <div className="max-h-[420px] w-full rounded-sm p-3 lg:p-5">
      {imageSrc && (
        <div className="w-fullmd:h-[200px] relative h-[146px] xl:h-[235px]">
          <Image
            src={imageSrc}
            alt="grade level images"
            fill
            className="object-cover md:w-[200px] lg:w-[235px]"
          />
        </div>
      )}

      {videoSrc && (
        <Video
          src={videoSrc}
          alt={`${subject} video`}
          width={92}
          height={92}
          className="mx-auto md:h-[140px] md:w-[140px] lg:h-[224px] lg:w-[224px]"
        />
      )}
      <div className="w-full pt-2">
        <p className="text-xs font-medium text-SC-Nav-Blue md:text-base lg:text-lg">
          {subject}
        </p>
        <div className="mt-3 flex w-full justify-between">
          <p className="text-[8px] text-sm font-normal text-SC-text-red">
            Topic: {topicCount}
          </p>
          <p className="text-[8px] text-sm font-normal text-SC-text-red">
            Module: {moduleCount}
          </p>
        </div>
        <hr className="mb-6 mt-4 h-[1px] w-full bg-gray-300" />
        <p className="min-h-[70px] text-[8px] font-normal text-black md:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
};
