/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import pro from "../../assets/pro.svg";
import { sidebarItems } from "./data";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 15 ? setIsActive(true) : setIsActive(false);
    });
  });

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className="bg-[rgb(255,255,255)] tracking-wide md:w-[270px] lg:w-full">
      <div className="relative hidden flex-col sm:flex">
        <div className="flex h-[150px] w-full items-center justify-center border-2 border-black">
          <Link href="/student" className="w-fit">
            <Image
              src={logo}
              alt="logo"
              layout="fill"
              className="relative mt-12 max-h-[70px] md:max-w-[220px] md:pl-12 lg:max-w-[250px] lg:pl-11"
            />
          </Link>
        </div>
        <div className="mb-28">
          <div className="flex flex-col space-y-6">
            {sidebarItems.map((item, index) => (
              <Link href={item.link} key={index}>
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={item.image}
                    alt={`${item.text} icon`}
                    width={100}
                    height={100}
                    className="max-h-[21px] max-w-[21px]"
                  />
                  <span className="ml-2 text-[#082038] md:text-base xl:text-xl">
                    {item.text}
                  </span>
                </li>
              </Link>
            ))}
          </div>
          <div className="ml-12 mt-28 h-[200px] w-[170px] rounded-xl bg-[#ceecf1]">
            <div className="flex h-full flex-col items-center justify-around gap-y-5">
              <Image
                src={pro}
                alt="logo"
                width={100}
                height={100}
                className="absolute bottom-[275px]"
              />
              <h2 className="mt-20 text-center text-sm font-medium leading-4">
                Upgrade to <span className="font-semibold">PRO</span> for
                maximum benefits
              </h2>
              <div className="text-center font-semibold text-white">
                <button className="rounded-md bg-[#0966AB] px-4 py-1 text-sm">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen configuration 
        The isActive state is been used to change the background color of the sidebar when the user scrolls only on mobile
      */}
      <div
        className={`${
          isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"
        } fixed z-50 flex w-screen items-center justify-between border-2 border-gray-900 p-5 transition-all md:hidden lg:hidden`}
      >
        <Link href="/student">
          <Image
            src={logo}
            alt="logo"
            layout="fill"
            className="relative mt-0 max-h-[70px] max-w-[170px] pl-5"
          />
        </Link>

        <div className="mr-1 text-2xl">
          <button onClick={toggleSidebar} className="">
            {sidebar ? (
              <CloseIcon className="text-gray-900" />
            ) : (
              <MenuIcon className="text-gray-900" />
            )}
          </button>
        </div>
      </div>
      {!isActive && sidebar && (
        <div
          className={`fixed right-1 top-[66px] z-20 flex h-[440px] w-56 flex-col justify-center overflow-y-scroll overscroll-none rounded-md border-b border-l bg-white p-3`}
        >
          <div className="min-h-[100%]">
            <div className="flex flex-col space-y-6">
              {sidebarItems.map((item, index) => (
                <Link href={item.link} key={index}>
                  <li className="flex cursor-pointer items-center gap-4 p-2">
                    <Image
                      src={item.image}
                      alt="logo"
                      width={100}
                      height={100}
                      className="max-h-[21px] max-w-[21px]"
                    />
                    <span className="ml-2 text-xl text-[#082038]">
                      {item.text}
                    </span>
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
