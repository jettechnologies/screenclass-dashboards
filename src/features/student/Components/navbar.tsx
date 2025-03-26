"use client";

import { useState } from "react";
import SearchInput from "./search-input";
import Image from "next/image";
import { StudentMobileNav } from "./Sidebar";
import { GuardianMobileNavbar } from "@/components/guardian/side-navbar";
import { Avatar } from "@/components/shared";
import { usePathname } from "next/navigation";
import { useGuardianProfile, useStudentProfile } from "@/hook/swr";
import { Skeleton } from "@mui/joy";

export const Navbar = () => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(false);
  const pathname = usePathname();
  const { data: student, isLoading: studentLoading } = useStudentProfile();
  const { data: guardian, isLoading: guardianLoading } = useGuardianProfile();

  const isLoading = studentLoading || guardianLoading;

  const currentRoute = pathname.includes("guardian") ? "guardian" : "student";

  return (
    <>
      <nav className="flex w-full items-center gap-x-3 rounded-lg bg-white p-5 py-4 lg:justify-between">
        <Image
          src="/images/screenclass-logo.png"
          alt="screenclass logo"
          width={170}
          height={32}
          className="max-w-[65px] lg:hidden"
        />
        <div className="h-[24px] w-auto max-[768px]:flex-1 lg:h-[3.5rem] lg:w-[452px]">
          <SearchInput
            imageUrl="/images/search-icon.png"
            placeholder="search"
          />
        </div>

        <div className="flex flex-col items-center gap-1 lg:flex-row">
          <div className="mr-6 hidden items-center gap-x-3 md:flex">
            <Avatar size="md" />
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={60}
                height={20}
                animation="wave"
              />
            ) : (
              <div className="flex flex-col items-center">
                <h2 className="text-xs font-light">
                  {currentRoute === "guardian" ? guardian?.scid : student?.scid}
                </h2>
                <h2 className="text-xs font-light capitalize text-[#F7631B]">
                  {currentRoute}
                </h2>
              </div>
            )}
          </div>
          <Image
            src="/images/notification-icon.png"
            width={25}
            height={25}
            alt="user avatar"
            className="h-[25px] w-[25px] object-cover lg:h-[28px] lg:w-[28px]"
          />
        </div>
        <div className="flex flex-col items-center gap-1 lg:hidden lg:flex-row">
          <Avatar size="sm" />
        </div>
        <div
          onClick={() => setShowMobileSideNav(true)}
          className="flex flex-col items-center gap-1 lg:hidden lg:flex-row"
        >
          <Image
            src="/images/menu-bar-open.png"
            alt="Menu Icon"
            width={25}
            height={25}
            className="h-[25px] w-[25px] object-cover"
          />
        </div>
      </nav>

      {/* mobile nav */}
      {pathname.includes("guardian") ? (
        <GuardianMobileNavbar
          showMobileSideNav={showMobileSideNav}
          setShowMobileSideNav={setShowMobileSideNav}
        />
      ) : (
        <StudentMobileNav
          showMobileSideNav={showMobileSideNav}
          setShowMobileSideNav={setShowMobileSideNav}
        />
      )}
    </>
  );
};
