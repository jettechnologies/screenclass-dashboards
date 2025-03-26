import React from "react";
import { Skeleton } from "@mui/material";

interface SubjectCardSkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  showTime?: boolean;
}

export const SubjectCardSkeleton = ({
  className = "",
  width = "370px",
  height = "23rem",
  showTime = false,
}: SubjectCardSkeletonProps) => {
  return (
    <div
      className={`rounded-lg border px-4 py-4 shadow-lg sm:px-8 ${className}`}
      style={{ width, height }}
    >
      <div className="flex w-full flex-col items-center">
        {/* Course Thumbnail Skeleton */}
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          className="mb-5 rounded-lg"
          animation="wave"
        />

        {/* Course Details Skeleton */}
        <div className="w-full">
          {/* Subject Skeleton */}
          <Skeleton
            variant="text"
            width="80%"
            height={28}
            className="mb-4"
            animation="wave"
          />

          <div className="space-y-3">
            {/* Topics Count Skeleton */}
            <div className="flex items-center">
              <Skeleton
                variant="circular"
                width={20}
                height={20}
                className="mr-2"
              />
              <Skeleton
                variant="text"
                width="40%"
                height={20}
                animation="wave"
              />
            </div>

            {/* Units Count Skeleton */}
            <div className="flex items-center">
              <Skeleton
                variant="circular"
                width={20}
                height={20}
                className="mr-2"
              />
              <Skeleton
                variant="text"
                width="30%"
                height={20}
                animation="wave"
              />
            </div>
          </div>

          {/* Optional Time Duration Skeleton */}
          {showTime && (
            <Skeleton
              variant="text"
              width="30%"
              height={24}
              className="ml-auto mt-3"
              animation="wave"
            />
          )}
        </div>
      </div>
    </div>
  );
};
