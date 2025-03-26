import React from "react";

interface SubtopicCardSkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export const SubtopicCardSkeleton = ({
  width = "350px",
  height = "360px",
  className = "",
}: SubtopicCardSkeletonProps) => {
  return (
    <div
      className={`rounded-lg border bg-[#F1F1F1] px-4 py-0 shadow-lg sm:px-0 ${className}`}
      style={{ width, height }}
    >
      <div className="flex w-full flex-col items-center">
        {/* Image Skeleton with SVG Placeholder */}
        <div className="flex w-full items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-300">
          <svg
            className="h-48 w-full text-gray-200 sm:min-w-[350px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        {/* Content Skeleton */}
        <div className="mt-5 flex w-full flex-col items-start px-5">
          {/* Topic Title Skeleton */}
          <div className="h-6 w-3/4 rounded-full bg-gray-300"></div>

          {/* Status Skeleton */}
          <div className="mt-5 h-4 w-1/2 rounded-full bg-[#F7631B] opacity-30"></div>
        </div>
      </div>
    </div>
  );
};
