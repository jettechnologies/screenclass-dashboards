export const ActivitySkeleton = () => {
  return (
    <div className="flex animate-pulse items-center border-b border-[#F5F5F5] px-5 py-3">
      <div className="flex flex-1 items-center gap-x-6">
        <div className="h-[12px] w-[12px] rounded-full bg-gray-200" />
        <div className="h-3 w-3/4 rounded-full bg-gray-200" />
      </div>

      <div className="flex gap-x-4">
        <div className="h-3 w-10 rounded-full bg-gray-200" />
        <div className="h-3 w-12 rounded-full bg-gray-200" />
      </div>
    </div>
  );
};
