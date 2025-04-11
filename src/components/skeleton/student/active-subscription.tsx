import { Skeleton } from "@mui/joy";

export const ActiveSubscriptionSkeleton = () => {
  return (
    <div className="mt-4 flex w-full flex-col justify-between gap-x-16 gap-y-6 lg:flex-row">
      {/* First Card - Active Plan */}
      <div className="flex h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#0B67B0] p-2">
        <div className="flex w-full items-center justify-between">
          {/* Current Plan Duration Container */}
          <div className="flex min-h-[26px] min-w-[134px] flex-col items-center gap-1 rounded-[4px] border border-SC-Brand-Blue px-[3px] lg:flex-row">
            <Skeleton
              variant="text"
              level="body-sm"
              sx={{ fontSize: "10px", width: 100 }}
            />
            <div className="flex-1 rounded-[4px] bg-[#93CAF6] px-[6px] py-[2px] text-black">
              <div className="flex w-fit gap-1">
                <Skeleton
                  variant="text"
                  level="body-sm"
                  sx={{ fontSize: "12px", width: 20 }}
                />
                <Skeleton
                  variant="text"
                  level="body-sm"
                  sx={{ fontSize: "12px", width: 40 }}
                />
              </div>
            </div>
          </div>

          {/* Price Text */}
          <Skeleton
            variant="text"
            level="h4"
            sx={{ fontSize: "24px", width: 80 }}
          />
        </div>

        {/* Button Container */}
        <div className="flex w-full justify-end">
          <Skeleton
            variant="rectangular"
            sx={{ width: 122, height: 32, borderRadius: "6px" }}
          />
        </div>
      </div>

      {/* Second Card - Next Payment */}
      <div className="flex max-h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#B3B3B3] p-2">
        <Skeleton
          variant="text"
          level="body-sm"
          sx={{ fontSize: "12px", width: 80 }}
        />
        <Skeleton
          variant="text"
          level="body-md"
          sx={{ fontSize: "14px", width: 200 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 122, height: 32, borderRadius: "6px" }}
        />
      </div>
    </div>
  );
};
