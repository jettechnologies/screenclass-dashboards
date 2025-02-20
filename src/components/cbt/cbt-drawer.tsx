"use client";

import React, { useState } from "react";
import { Drawer } from "../shared";
import Image from "next/image";

interface CBTDrawerProps {
  isOpen: boolean;
  timeRemaining: string;
  questionNo: number;
  onClose: () => void;
}

interface SideNavBadgeProps {
  title: string;
  value: string | number;
}

export const CBTDrawer: React.FC<CBTDrawerProps> = ({
  isOpen,
  onClose,
  timeRemaining,
  questionNo,
}) => {
  const [showClassDetails, setShowClassDetails] = useState(false);
  const [showOtherDetails, setShowOtherDetails] = useState(false);

  const classDetails: SideNavBadgeProps[] = [
    { title: "current class", value: "common entrance prep" },
    { title: "subject", value: "english" },
    { title: "topic", value: "comprehension" },
    { title: "sub-title", value: "importance of recreation" },
  ];

  const otherDetails: SideNavBadgeProps[] = [
    { title: "Time", value: timeRemaining || "malcom dunamis" },
    { title: "Question No", value: questionNo || 3 },
  ];

  return (
    <div>
      <Drawer isOpen={isOpen} onClose={onClose} drawerTitle="Quiz Details">
        <div className="mx-auto h-[175px] w-[180px] overflow-clip rounded-full border border-gray-200">
          <Image
            src={"/images/user-avatar-fallback.svg"}
            alt="user's avatar"
            width={150}
            height={150}
            className="mx-auto mt-1"
          />
        </div>
        <ul className="mt-8 space-y-3 font-medium">
          {/* Class Details Dropdown */}
          <li>
            <div
              className="cursor-pointer text-base font-semibold uppercase text-black"
              onClick={() => setShowClassDetails((prev) => !prev)}
            >
              Class Details
              <span className="ml-2 text-gray-500">
                {showClassDetails ? "▲" : "▼"}
              </span>
            </div>
            {showClassDetails && (
              <ul className="mt-2 space-y-2 bg-SC-Bland p-2">
                {classDetails.map(({ title, value }) => (
                  <li key={title}>
                    <p className="text-sm font-semibold uppercase text-SC-Blue">
                      {title}:{" "}
                      <span className="font-normal text-black">{value}</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Details Dropdown */}
          <li>
            <div
              className="cursor-pointer text-base font-semibold uppercase text-black"
              onClick={() => setShowOtherDetails((prev) => !prev)}
            >
              Other Details
              <span className="ml-2 text-gray-500">
                {showOtherDetails ? "▲" : "▼"}
              </span>
            </div>
            {showOtherDetails && (
              <ul className="mt-2 space-y-2 bg-SC-Bland p-2">
                {otherDetails.map(({ title, value }) => (
                  <li key={title}>
                    <p className="text-sm font-semibold uppercase text-SC-Blue">
                      {title}:{" "}
                      <span className="font-normal text-black">{value}</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </Drawer>
    </div>
  );
};
