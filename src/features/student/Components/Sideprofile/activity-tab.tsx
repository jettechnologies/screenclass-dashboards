export const ActivityTab = () => {
  return (
    <div className="flex items-center border-b border-[#F5F5F5] px-5 py-3">
      <div className="flex h-full flex-1 items-center gap-x-6">
        {/* the dot */}
        <div className="bg-danger-200 flex h-[12px] w-[12px] items-center justify-center rounded-full">
          <div className="bg-danger-500 h-[4px] w-[4px] rounded-full" />
        </div>
        <p className="font-poppins text-[12px] font-normal text-black first-letter:uppercase">
          logged out
        </p>
      </div>
      <div className="flex gap-x-4">
        <p className="font-poppins text-[10px] font-normal text-[#8B8989]">
          12:50 am
        </p>
        <p className="font-poppins text-[10px] font-normal text-[#8B8989]">
          06.03.2025
        </p>
      </div>
    </div>
  );
};
