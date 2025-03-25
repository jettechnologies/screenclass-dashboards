import React from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

interface SubjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  subject: string;
  topics: number;
  units: number;
  time?: string;
  className?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

export const SubjectCard = ({
  href,
  imageSrc,
  imageAlt,
  subject,
  topics,
  units,
  time,
  className = "",
  width = "370px",
  height = "23rem",
  style,
}: SubjectCardProps) => {
  return (
    <Link href={href} passHref>
      <div
        className={`rounded-lg border px-4 py-4 shadow-lg transition-all hover:shadow-xl sm:px-8 ${className}`}
        style={{
          width,
          height,
          ...style,
        }}
      >
        <div className="flex w-full flex-col items-center">
          {/* Course Thumbnail */}
          <div className="relative h-48 w-full overflow-hidden rounded-lg sm:h-56">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              priority={false}
            />
          </div>

          {/* Course Details */}
          <div className="mt-5 w-full">
            <h3 className="line-clamp-2 text-lg font-semibold">{subject}</h3>

            <div className="mt-3 space-y-2">
              {/* Topics Count */}
              <div className="flex items-center text-sm text-gray-500">
                <DashboardOutlinedIcon className="mr-1 h-4 w-4" />
                <span>
                  {topics} {topics === 1 ? "Topic" : "Topics"}
                </span>
              </div>

              {/* Units Count */}
              <div className="flex items-center text-sm text-gray-500">
                <AccessTimeOutlinedIcon className="mr-1 h-4 w-4" />
                <span>
                  {units} {units === 1 ? "Unit" : "Units"}
                </span>
              </div>
            </div>

            {/* Optional Time Duration */}
            {time && (
              <p className="mt-2 text-right font-bold text-[#7D7CB4]">{time}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
