// import { convertFromISOString } from "@/utils";
import { format, parseISO } from "date-fns";

interface ActivityTabProps {
  activity: string;
  createdAt: string;
}
export const ActivityTab = ({ activity, createdAt }: ActivityTabProps) => {
  const date = parseISO(createdAt);
  const time = format(date, "hh:mm");
  const currentDate = format(date, "dd.MM.yyyy");

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
          {/* {convertFromISOString(date)} */}
          {currentDate}
        </p>
      </div>
    </div>
  );
};
