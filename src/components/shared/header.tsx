"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
// import MobileSideNav from "./mobile-sidenav";
import { GiHamburgerMenu } from "react-icons/gi";

import { GuardianMobileNavbar } from "../guardian/side-navbar";

const Header = ({ title }: { title: string }) => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between border-b border-b-SC-Deep-Blue pb-4 pt-7">
        <div className="flex items-center gap-3">
          <div
            onClick={() => setShowMobileSideNav(true)}
            className="block cursor-pointer pl-2 xl:hidden"
          >
            <GiHamburgerMenu size={24} />
          </div>
          <h1 className="segoe text-lg font-black text-[#1B1B1B]/80 md:text-xl">
            {title}
          </h1>
        </div>
        {/* search */}
        <div className="relative h-[35px] w-[150px] rounded-lg border-2 border-black bg-[rgba(150,152,213,0.30)] md:w-[250px]">
          <input
            type="text"
            className="segoe h-full w-[90%] bg-transparent px-3 text-xs font-light outline-none placeholder:text-[#1b1b1b]/70"
            placeholder="Search anything.."
          />
          <Image
            src={"/guardian/search-icon.svg"}
            alt="search icon"
            width={30}
            height={30}
            className="absolute right-0 top-0"
          />
        </div>
        {/* <div className="flex items-center gap-2 md:gap-6">
        <p className={`${inter.className} text-xs md:text-[15px] font-light`}>
          12th June, 2023
        </p>
        <Image
          src={"/guardian/search.svg"}
          alt="search"
          width={40}
          height={40}
        />
      </div> */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-3 md:gap-[18px]">
            <Image
              src={"/guardian/ellipse.svg"}
              alt="ellipse"
              width={80}
              height={80}
              className="h-auto w-14 md:w-16 lg:w-20"
            />
            <div className="">
              <p className="segoe text-base text-[#7C7C7C] lg:text-lg">
                SC51124
              </p>
              <p className="segoe text-base text-SC-Orange lg:text-lg">
                Guardian
              </p>
            </div>
          </div>
          <Image
            src={"/guardian/logout-icon.svg"}
            alt="logout"
            width={30}
            height={30}
          />
        </div>
      </div>
      {/* mobile nav bar */}
      <GuardianMobileNavbar
        setShowMobileSideNav={setShowMobileSideNav}
        showMobileSideNav={showMobileSideNav}
      />
    </>
  );
};

export default Header;
