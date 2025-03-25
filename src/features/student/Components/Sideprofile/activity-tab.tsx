import { convertFromISOString } from "@/utils";

interface ActivityTabProps {
  activity: string;
  time: string;
  date: string;
}

export const ActivityTab = ({ activity, time, date }: ActivityTabProps) => {
  return (
    <div className="flex items-center border-b border-[#F5F5F5] px-5 py-3">
      <div className="flex h-full flex-1 items-center gap-x-6">
        {/* the dot */}
        <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-danger-200">
          <div className="h-[4px] w-[4px] rounded-full bg-danger-500" />
        </div>
        <p className="font-poppins text-[12px] font-normal text-black first-letter:uppercase">
          {activity}
        </p>
      </div>
      <div className="flex gap-x-4">
        <p className="font-poppins text-[10px] font-normal text-[#8B8989]">
          {time}
        </p>
        <p className="font-poppins text-[10px] font-normal text-[#8B8989]">
          {convertFromISOString(date)}
        </p>
      </div>
    </div>
  );
};
