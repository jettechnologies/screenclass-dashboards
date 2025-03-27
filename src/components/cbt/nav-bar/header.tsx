"use client";

import Image from "next/image";
import { LuUserRound } from "react-icons/lu";
import { useStudentProfile } from "@/hook/swr";
import { Skeleton } from "@mui/joy";
import { useTime } from "react-timer-hook";
import { format } from "date-fns";

export const Header = () => {
  const { data: studentProfile, isLoading } = useStudentProfile();
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, d MMMM, yyyy");

  const fullName = `${studentProfile?.firstName} ${studentProfile?.lastName}`;

  const { minutes, hours, ampm } = useTime({
    format: "12-hour",
    interval: 20,
  });

  return (
    <header className="min-h-[40px] w-full bg-white pb-2 shadow-md">
      <div className="container mx-auto flex w-[90vw] max-w-[1200px] items-center justify-between py-2">
        <div className="relative h-[50px] w-fit">
          <div className="h-[29px] w-[150px] lg:w-[200px]">
            <Image
              src="/images/screenclass-logo.png"
              alt="screenclass-logo"
              width={200}
              height={29}
              className="object-fit mt-2"
            />
          </div>
        </div>

        <div className="hidden items-center justify-center space-x-3 rounded-ee-[3rem] rounded-es-[3rem] bg-SC-Brand-Blue px-10 py-3 lg:flex">
          <p className="text-sm font-medium capitalize text-white">
            <span className="ml-1 text-SC-Orange">date:</span>
            {formattedDate}
          </p>
          <p className="text-sm font-medium capitalize text-white">
            <span className="ml-1 text-SC-Orange">time:</span>
            {`${hours}:${minutes} ${ampm}`}
          </p>
        </div>

        <div className="relative flex items-center space-x-3">
          {isLoading ? (
            <div className="flex flex-col gap-y-1">
              <Skeleton variant="text" color="neutral" width={60} />
              <Skeleton variant="text" color="neutral" width={100} />
            </div>
          ) : (
            <div className="w-fit text-black">
              <p className="text-xs font-medium capitalize md:text-base">
                {fullName}
              </p>
              <p className="text-xs font-normal">
                Student ID: {studentProfile?.scid}
              </p>
            </div>
          )}
          <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full border border-gray-300 md:h-[2.5rem] md:w-[2.5rem]">
            <LuUserRound size={24} color="#000" />
          </div>
        </div>
      </div>
    </header>
  );
};
