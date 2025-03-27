"use client";

import React from "react";
import { quizSessionData } from "@/utils";

interface SideNavBadgeProps {
  title: string;
  value: string;
}

// const sidenavBadgeValues: SideNavBadgeProps[] = [
//   { title: "current class", value: "common entrance prep" },
//   { title: "subject", value: "english" },
//   { title: "topic", value: "comprehension" },
//   { title: "sub-title", value: "importance of recreation" },
// ];

export const SideNav = () => {
  const quizData = quizSessionData();

  const sidenavBadgeValues: SideNavBadgeProps[] = [
    { title: "current class", value: "common entrance prep" },
    { title: "subject", value: quizData.subject },
    { title: "topic", value: quizData.topic },
    { title: "sub-title", value: quizData.subtopic },
  ];
  return (
    <div className="sticky top-[5.25rem] h-[calc(100dvh-82px)] w-[250px] overflow-clip rounded-lg bg-white">
      <div className="w-full bg-SC-Blue px-10 py-3">
        <h4 className="text-base font-medium uppercase text-white">
          Class Details
        </h4>
      </div>
      <div className="flex w-full flex-col gap-y-3 p-3">
        {sidenavBadgeValues.map((value) => (
          <SideNavBadge
            key={value.title}
            title={value.title}
            value={value.value}
          />
        ))}
      </div>
    </div>
  );
};

const SideNavBadge = ({ title, value }: SideNavBadgeProps) => {
  return (
    <div className="flex min-h-[100px] w-full flex-col justify-center rounded-sm bg-gray-200 px-2 py-3">
      <p className="text-[10px] font-extralight uppercase text-gray-400">
        {title}
      </p>
      <hr className="mb-3 mt-2 border-[1] border-gray-400" />
      <p className="text-sm font-medium uppercase text-black">{value}</p>
    </div>
  );
};
