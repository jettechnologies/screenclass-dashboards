import React from "react";
import Image from "next/image";
import { Subtopics } from "@/utils/validators";

interface SubtopicCardProps {
  subtopic: Subtopics;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  imgWidth?: number;
  imgHeight?: number;
}

export const SubtopicCard = ({
  subtopic,
  width = "350px",
  height = "360px",
  className = "",
  style,
  imgWidth = 0,
  imgHeight = 0,
}: SubtopicCardProps) => {
  return (
    // <Link href={item.link} passHref>
    <div
      className={`rounded-lg border bg-[#F1F1F1] px-4 py-0 shadow-lg transition-all hover:shadow-xl sm:px-0 ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
    >
      <div className="flex w-full flex-col items-center">
        {/* Course Image */}
        <div className="w-full overflow-hidden rounded-tl-lg rounded-tr-lg">
          <Image
            src={subtopic.thumbnailImage || "/icons/compre-1.svg"}
            alt={`${subtopic.name} image`}
            width={imgWidth}
            height={imgHeight}
            className="h-auto w-full object-cover sm:min-w-[350px]"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Course Details */}
        <div className="mt-5 flex w-full flex-col items-start sm:px-5">
          <h2 className="line-clamp-2 text-lg font-semibold">
            {subtopic.name}
          </h2>
          <h2 className="mt-5 text-[#F7631B]">Paid</h2>
          {subtopic.status ? (
            <h2 className="mt-5 text-[#F7631B]">{subtopic.status}</h2>
          ) : null}
        </div>
      </div>
    </div>
    // </Link>
  );
};
