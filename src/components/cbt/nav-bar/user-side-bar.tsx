import Image from "next/image";
import React from "react";

export const UserSidenav = ({
  userImg,
  questionNo,
  timeRemaining,
}: {
  userImg?: string;
  questionNo?: number;
  timeRemaining?: string;
}) => {
  

  return (
    <div className="sticky top-[5.25rem] h-[calc(100dvh-82px)] w-[250px] overflow-clip rounded-lg bg-white">
      <div className="w-full bg-SC-Blue px-6 py-3">
        <p className="text-base font-semibold capitalize text-white">user</p>
      </div>
      <div className="px-auto w-full px-6 py-4">
        <div className="mx-auto h-[175px] w-[180px] overflow-clip rounded-full border border-gray-200">
          <Image
            src={userImg || "/images/user-avatar-fallback.svg"}
            alt="users avatar"
            width={150}
            height={150}
            className="mx-auto mt-1"
          />
        </div>
        <div className="mt-6 flex w-full flex-col space-y-2">
          <p className="text-sm font-semibold text-black">
            Time:{" "}
            <span className="font-normal">{timeRemaining || "00:15:00"}</span>
          </p>
          <p className="text-sm font-semibold text-black">
            Question No:{" "}
            <span className="font-normal">{questionNo || "15"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
