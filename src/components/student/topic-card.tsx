import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Topics } from "@/utils/validators";

// interface TopicItem {
//   link: string;
//   image: string;
//   topic: string;
//   status: string;
// }

interface TopicCardProps {
  topic: Topics;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  imgWidth?: number;
  imgHeight?: number;
}

export const TopicCard = ({
  topic,
  width = "350px",
  height = "360px",
  className = "",
  style,
  imgWidth = 0,
  imgHeight = 0,
}: TopicCardProps) => {
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
            src="/icons/compre-1.svg"
            alt={`${topic.name} image`}
            width={imgWidth}
            height={imgHeight}
            className="h-auto w-full object-cover sm:min-w-[350px]"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Course Details */}
        <div className="mt-5 flex w-full flex-col items-start sm:px-5">
          <h2 className="line-clamp-2 text-lg font-semibold">{topic.name}</h2>
          <h2 className="mt-5 text-[#F7631B]">Paid</h2>
        </div>
      </div>
    </div>
    // </Link>
  );
};
