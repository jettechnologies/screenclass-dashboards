"use client";
import PerformanceOverviewModal from "@/components/modal/guardian/PerformanceOverviewModal";
import React, { useState } from "react";

const ActivityCard = ({
  title,
  desc,
  date,
  last_seen,
  status,
}: {
  title: string;
  desc: string;
  date: string;
  last_seen: string;
  status: boolean;
}) => {
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  return (
    <>
      <PerformanceOverviewModal
        isOpen={showOverviewModal}
        setIsOpen={setShowOverviewModal}
      />
      <div
        onClick={() => setShowOverviewModal(true)}
        className="flex w-full cursor-pointer items-center justify-between bg-white px-5 py-4"
        style={{
          boxShadow: "0px 12px 12px -12px rgba(0, 0, 0, 0.20)",
        }}
      >
        <div>
          <h3 className={`sansation text-sm font-bold text-SC-Brand-Blue`}>
            {title}
          </h3>
          <p className={`sansation text-[13px] text-black md:max-w-[80%]`}>
            {desc}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <p className="sansation text-xs text-[rgba(27,27,27,0.70)]">
              {date}
            </p>
            <div className="flex items-center gap-1 md:hidden">
              <p className="sansation text-xs text-[rgba(27,27,27,0.70)]">
                {last_seen}
              </p>
              <div
                className={`h-[6px] w-[6px] rounded-full ${status ? "bg-[#016AAD]" : "rgba(213,214,214,0.98)"}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="hidden shrink-0 md:block">
          <p className="sansation text-[13px] text-black">{last_seen}</p>
          <div
            className={`ml-auto mt-2 h-[6px] w-[6px] rounded-full ${status ? "bg-[#016AAD]" : "rgba(213,214,214,0.98)"}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
