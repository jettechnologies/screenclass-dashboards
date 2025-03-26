export const TopicCardSkeleton = () => {
  return (
    <div className="flex h-[130px] w-full items-center justify-between rounded-md border px-4 py-6 drop-shadow-md sm:px-8">
      <div className="flex w-full flex-col items-start gap-2">
        <div className="h-6 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        <div className="mt-3 h-4 w-1/4 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};
