"use client";

import Image from "next/image";
import React, { useState } from "react";
import { inter } from "@/components/shared/fonts";
import StudentsTable from "@/components/guardian/overview/students-table";
import { GuardianMobileNavbar } from "@/components/guardian/side-navbar";
import { HeroSection } from "@/components/shared";
import { Header } from "@/components/shared";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Link from "next/link";
import { subject } from "./data";
import { SubjectProgress } from "@/components/shared";
import { useGuardianProfile, useAllStudentActivities } from "@/hook/swr";
import { EmptyState, ActivityTab } from "@/components/shared";
import { ActivitySkeleton } from "@/components/skeleton/student";

export const Overview = () => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(false);
  const { data: guardianData, isLoading } = useGuardianProfile();
  const { data: studentActivities, isLoading: loadingActivities } =
    useAllStudentActivities();

  const fullName = guardianData
    ? `${guardianData.firstName} ${guardianData.lastName}`
    : "";

  return (
    <>
      <div className="mx-auto ml-0 min-h-screen space-y-5 pr-6 xl:ml-7">
        <Header />
        <div className="rounded-md bg-[#FBFBFB] pl-3 pr-3 md:pr-0">
          <div className="grid items-end gap-8 lg:grid-cols-3 xl:gap-16">
            {/* hero */}
            <div className="grid h-full place-items-center lg:col-span-2">
              <HeroSection
                heroColor="bg-SC-Brand-Blue"
                heroImg="/images/guardian-hero-img.png"
              >
                <>
                  {isLoading ? (
                    <div className="h-5 w-full animate-pulse rounded bg-[#E0DFDF]"></div>
                  ) : (
                    <h4 className="text-sm font-semibold text-white md:text-[28px] lg:text-3xl">
                      Welcome back {fullName}
                    </h4>
                  )}
                  <p className="mt-5 max-w-[370px] text-[8px] text-white md:text-xs">
                    Your ward is doing great! <br /> She has learned 80% of her
                    goal this week!.
                  </p>
                </>
              </HeroSection>
            </div>
            {/* logout */}
            <div
              className="hidden flex-col items-center bg-white py-3 pl-9 pr-7 lg:flex"
              style={{
                boxShadow: "0px 0px 20px -10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div>
                <Image
                  src={"/guardian/ellipse.svg"}
                  alt="ellipse"
                  width={80}
                  height={80}
                />
                <div className="-mt-2 ml-auto flex h-[18px] w-[18px] items-center justify-center rounded-full bg-SC-Brand-Blue text-xl text-white">
                  +
                </div>
              </div>
              {isLoading ? (
                <div className="h-5 w-full animate-pulse rounded bg-[#E0DFDF]"></div>
              ) : (
                <p className="segoe mt-3 text-lg font-bold text-[#1B1B1B] xl:text-xl">
                  {fullName}
                </p>
              )}
              {isLoading ? (
                <div className="h-5 w-full animate-pulse rounded bg-[#E0DFDF]"></div>
              ) : (
                <p className="segoe mt-[6px] text-center text-lg capitalize text-[#7C7C7C]">
                  {guardianData && guardianData.scid}
                </p>
              )}
              <p className="segoe text-lg text-SC-Orange">Guardian</p>
            </div>
          </div>
          <StudentsTable />
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-11">
            {/* subjects */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between">
                <h4
                  className={`${inter.className} text-[15px] font-bold text-black`}
                >
                  All Subjects
                </h4>
                <div className="flex items-center justify-center space-x-2">
                  <Link
                    href="#"
                    className="text-sm font-semibold text-[#024D81]"
                  >
                    View All
                  </Link>
                  <div className="">
                    <EastOutlinedIcon sx={{ color: "#024D81" }} />
                  </div>
                </div>
              </div>
              {/* cards */}
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {subject.map((subj) => (
                  <SubjectProgress
                    key={subj.id}
                    bgColor={subj.bgColor}
                    description={subj.description}
                    progressColor={subj.progressColor}
                    progressLevel={subj.progressLevel}
                    trackColor={subj.trackColor}
                    subject={subj.subject}
                  />
                ))}
              </div>
            </div>
            {/* recent activities */}
            <div
              className="max-h-[224px] overflow-y-auto bg-white pl-8 pr-3 pt-3"
              style={{
                boxShadow: "4px 4px 10px -10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="flex items-center justify-between">
                <h4
                  className={`${inter.className} text-[15px] font-bold text-black`}
                >
                  Recent Student Activities
                </h4>
                <Image
                  src={"/guardian/bell-icon.svg"}
                  alt="bell"
                  width={18}
                  height={20}
                />
              </div>
              <ul className="mt-5 max-h-[250px] overflow-scroll rounded-[20px] border border-[#eff0f6]">
                <div className="flex flex-col pt-2">
                  {loadingActivities
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <ActivitySkeleton key={index} />
                      ))
                    : null}
                  {studentActivities && studentActivities.length > 0 ? (
                    studentActivities.map((activity) => (
                      <ActivityTab
                        key={activity.id}
                        activity={activity.activity}
                        createdAt={activity.createdAt}
                      />
                    ))
                  ) : (
                    <EmptyState title="No activity found" />
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* the guardianMobileNavbar */}
      <GuardianMobileNavbar
        setShowMobileSideNav={setShowMobileSideNav}
        showMobileSideNav={showMobileSideNav}
      />
    </>
  );
};
