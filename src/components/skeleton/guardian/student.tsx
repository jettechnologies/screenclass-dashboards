export const StudentCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="mb-4 flex items-center justify-between rounded-[10px] bg-white px-3 py-4 last:mb-0 md:px-9"
          style={{
            boxShadow: "0px 0px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex items-center gap-4 md:gap-[26px]">
            <div className="h-14 w-14 animate-pulse rounded-full bg-gray-200 md:h-[70px] md:w-[70px]"></div>
            <div className="space-y-2">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-200 md:h-6"></div>
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200 md:h-5"></div>
              <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200 md:mt-4 md:h-5"></div>
            </div>
          </div>
          <div className="h-6 w-7 animate-pulse rounded bg-gray-200 md:h-[6px] md:w-[34px]"></div>
        </div>
      ))}
    </>
  );
};
