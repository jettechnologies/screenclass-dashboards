import Image from "next/image";
import { Video } from "@/components/shared";

export interface FeaturesCardProps {
  imageSrc: string;
  videoSrc?: string;
  subject: string;
  description: string;
  tag?: "coming_soon" | "new_feature";
}

export const FeaturesCard: React.FC<FeaturesCardProps> = ({
  imageSrc,
  videoSrc,
  subject,
  description,
  tag = "coming_soon",
}) => {
  return (
    <div className="relative h-full w-full overflow-clip rounded-br-[140px] p-3 lg:p-5">
      {/* tags image */}
      {tag && (
        <div className="absolute -top-1 left-0 z-30 h-[46px] w-[46px] md:h-[83px] md:w-[83px]">
          {
            {
              coming_soon: (
                <Image
                  src="/images/coming-soon-tag.png"
                  alt="coming soon"
                  fill
                  className="object-cover"
                />
              ),
              new_feature: (
                <Image
                  src="/images/new-feature-tag.png"
                  alt="new feature"
                  fill
                  className="object-cover"
                />
              ),
            }[tag]
          }
        </div>
      )}

      {imageSrc && (
        <div className="relative h-[146px] w-full overflow-clip rounded-br-[60px] rounded-tl-[60px] md:h-[200px] lg:rounded-br-[110px] lg:rounded-tl-[110px] xl:h-[235px]">
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
        <p className="text-xs font-medium uppercase text-SC-Nav-Blue md:text-base lg:text-base">
          {subject}
        </p>
        <hr className="mb-6 mt-4 h-[1px] w-full bg-gray-300" />
        <p className="min-h-[70px] text-[8px] font-normal text-black md:text-[10px]">
          {description}
        </p>
      </div>
    </div>
  );
};
