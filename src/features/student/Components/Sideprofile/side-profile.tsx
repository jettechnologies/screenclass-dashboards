import React from "react";
import Image from "next/image";
import { ActivityTab } from "./activity-tab";
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
          <p className="font-nromal text-base">SCID: 2598</p>
        </div>
      </div>
      <div className="relative mt-5 h-[calc(100%-240px)] w-full rounded-md bg-white p-4">
        <p className="font-poppins text-sm font-medium capitalize text-black">
          Recent activities
        </p>
        <ul className="mt-5 rounded-[20px] border border-[#eff0f6]">
          <div className="flex flex-col pt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <ActivityTab key={index} />
            ))}
          </div>
        </ul>
        <div className="mt-4 w-full">
          <ProgressCircle progress={85} tag={"general performance"} />
        </div>
        <div className="absolute bottom-[3rem] left-0 flex w-full justify-between px-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center rounded-md bg-task-bg-one bg-cover bg-center bg-no-repeat p-4">
            <p className="text-lg font-medium leading-normal text-white">56</p>
            <p className="text-[8px] font-medium capitalize leading-normal text-white">
              hours spent
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center rounded-md bg-task-bg-two bg-cover bg-center bg-no-repeat p-4">
            <p className="text-lg font-medium leading-normal text-white">14</p>
            <p className="text-[8px] font-medium capitalize leading-normal text-white">
              completed tasks
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center rounded-md bg-task-bg-one bg-cover bg-center bg-no-repeat p-4">
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
