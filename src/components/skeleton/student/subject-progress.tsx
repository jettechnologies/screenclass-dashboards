export function CircularProgressSkeleton({ width }: { width?: string }) {
  return (
    <div
      className={`${width || "w-fit"} min-w-[180px] animate-pulse rounded-2xl bg-gray-200 px-4 py-8`}
    >
      <div className="flex w-full justify-center">
        {/* Circular Progress Skeleton */}
        <div className="relative h-[92px] w-[92px]">
          <div className="h-full w-full rounded-full bg-gray-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-8 rounded-md bg-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-8 w-full space-y-2">
        {/* Subject Skeleton */}
        <div className="h-4 w-3/4 rounded-md bg-gray-300" />
        {/* Description Skeleton */}
        <div className="h-3 w-1/2 rounded-md bg-gray-300" />
      </div>
    </div>
  );
}
