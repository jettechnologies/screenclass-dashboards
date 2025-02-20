import React from "react";
import Image from "next/image";
import { topPerformances } from "./data";
import { ProgressCircle } from "./progress-circle";

export const SideProfile = () => {
  return (
    <aside className="h-full w-full">
      <div className="flex h-[220px] w-full flex-col items-center gap-y-3 rounded-md bg-white p-4">
        <Image
          src="/images/user-avatar-img.png"
          alt="profile img"
          width={75}
          height={75}
        />
        <hr className="h-1 w-full bg-SC-Orange" />
        <div className="flex w-full flex-col gap-y-1 text-center leading-normal text-black">
          <p className="text-xl font-bold capitalize">Princess David</p>
          <p className="text-xs font-normal capitalize">Student</p>
          <p className="font-nromal text-base">ID: 2598</p>
        </div>
      </div>
      {/* performance section */}
      <div className="relative mt-5 h-[calc(100%-240px)] w-full rounded-md bg-white p-4">
        <p className="text-sm font-bold text-black">Recent Performance</p>
        <ul className="mt-5 rounded-[20px] border border-[#eff0f6] pb-[31px] pl-[13px] pr-[32px]">
          <p className="border-b border-[#eff0f6] pb-3 pt-4 text-sm font-semibold text-[#4d4d4d]">
            Top Statistics
          </p>
          <div className="flex flex-col gap-y-2 pt-3">
            {topPerformances.map((performance, index) => (
              <li key={index} className="flex gap-x-6">
                <p className="w-[172px] text-sm font-normal capitalize leading-4 text-[#606060]">
                  {performance.label}
                </p>
                <p className="text-right text-sm font-bold leading-4 text-black">
                  {performance.value}
                </p>
              </li>
            ))}
          </div>
        </ul>
        <div className="mt-4 w-full">
          <ProgressCircle progress={85} tag={"general performance"} />
        </div>
        <div className="absolute bottom-[3rem] left-0 flex w-full justify-between px-4">
          {/* Card 1 */}
          <div className="bg-task-bg-one flex flex-col items-center justify-center rounded-md bg-cover bg-center bg-no-repeat p-4">
            <p className="text-lg font-medium leading-normal text-white">56</p>
            <p className="text-[8px] font-medium capitalize leading-normal text-white">
              hours spent
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-task-bg-two flex flex-col items-center justify-center rounded-md bg-cover bg-center bg-no-repeat p-4">
            <p className="text-lg font-medium leading-normal text-white">14</p>
            <p className="text-[8px] font-medium capitalize leading-normal text-white">
              completed tasks
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-task-bg-one flex flex-col items-center justify-center rounded-md bg-cover bg-center bg-no-repeat p-4">
            <p className="text-lg font-medium leading-normal text-white">256</p>
            <p className="text-[8px] font-medium capitalize leading-normal text-white">
              Total Points
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
