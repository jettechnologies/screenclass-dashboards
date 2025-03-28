"use client";

import React from "react";
import Image from "next/image";
import { ActivityTab } from "@/components/shared";
import { ProgressCircle } from "./progress-circle";
import { useStudentProfile, useFetchStudentActivities } from "@/hook/swr";
import { ActivitySkeleton } from "@/components/skeleton/student";
import { EmptyState } from "@/components/shared";

export const SideProfile = () => {
  const { data, isLoading } = useStudentProfile();
  const { activities, isLoading: activityLoading } =
    useFetchStudentActivities();

  const fullName = `${data?.firstName} ${data?.lastName}`;

  return (
    <aside className="h-full w-full">
      <div className="flex h-[220px] w-full flex-col items-center gap-y-3 rounded-md bg-white p-4">
        <Image
          src="/icons/profile-icon.svg"
          alt="profile img"
          width={75}
          height={75}
        />
        <hr className="h-1 w-full bg-SC-Orange" />

        {isLoading ? (
          <div className="flex w-full flex-col gap-y-1 text-center leading-normal text-black">
            <div className="h-5 w-32 animate-pulse rounded bg-[#E0DFDF]" />
            <div className="h-5 w-28 animate-pulse rounded bg-[#E0DFDF]" />
            <div className="h-5 w-48 animate-pulse rounded bg-[#E0DFDF]" />
          </div>
        ) : (
          <div className="flex w-full flex-col gap-y-1 text-center leading-normal text-black">
            <p className="text-xl font-bold capitalize">{fullName}</p>
            <p className="text-xs font-normal capitalize">Student</p>
            <p className="font-nromal text-base">SCID: {data?.scid}</p>
          </div>
        )}
      </div>
      <div className="relative mt-5 h-[calc(100%-240px)] w-full rounded-md bg-white p-4">
        <p className="font-poppins text-sm font-medium capitalize text-black">
          Recent activities
        </p>
        <ul className="mt-5 max-h-[250px] overflow-scroll rounded-[20px] border border-[#eff0f6]">
          <div className="flex flex-col pt-2">
            {activityLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <ActivitySkeleton key={index} />
                ))
              : null}
            {activities && activities.length > 0 ? (
              activities.map((activity) => (
                <ActivityTab
                  key={activity._id}
                  activity={activity.message}
                  createdAt={activity.createdAt}
                />
              ))
            ) : (
              <EmptyState title="No activity found" />
            )}
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
