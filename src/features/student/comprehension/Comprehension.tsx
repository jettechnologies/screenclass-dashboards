import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import add from "../assets/add.svg";
import Image from "next/image";
import { comprehension } from "./data";
import Link from "next/link";

export const Comprehension = () => {
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      {/* <div className="lg:w-[14%]">
        <Sidebar />
      </div> */}
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          {/* topbar */}
          <section className="mt-24 hidden w-full items-center justify-between border-b-2 border-gray-600 px-4 sm:mt-8 sm:flex sm:px-7 sm:py-2">
            <h1 className="text-xl font-bold text-[#082038]">My Subjects</h1>
            <div className="flex items-center justify-center space-x-4">
              <h1 className="text-md font-extralight text-[#082038]">
                09 June, 2023
              </h1>
              <div className="rounded-md bg-[#9698D54D] p-1">
                <SearchOutlinedIcon />
              </div>
            </div>
            <div className="flex w-[370px] items-center justify-between bg-clip-text px-7">
              <div className="relative mr-10 flex w-full items-center justify-center space-x-4">
                <div className="">
                  <Image
                    src={profilepic}
                    alt="logo"
                    width={10}
                    height={10}
                    className="min-w-[70px]"
                  />
                  <Image
                    src={add}
                    alt="logo"
                    width={100}
                    height={100}
                    className="absolute right-[136px] top-[45px] max-h-[21px] max-w-[21px]"
                  />
                </div>
                <div className="hiddee=items-center flex flex-col">
                  <h2 className="text-xl font-light">SC51125</h2>
                  <h2 className="text-xl font-light text-[#F7631B]">Student</h2>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={logout}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[30px] max-w-[30px]"
                />
              </div>
            </div>
          </section>
          {/* body */}
          <div className="h-full w-full">
            <section className="mt-24 flex w-full items-center justify-between px-4 sm:mt-9 sm:flex sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">
                Comprehension 1
              </h1>
            </section>
            <section className="mb-16 mt-7 flex w-full flex-col flex-wrap items-center gap-8 md:mb-16 lg:mb-0 lg:flex-row lg:px-8">
              {comprehension.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div className="h-[360px] w-[350px] rounded-lg border bg-[#F1F1F1] px-4 py-0 shadow-lg sm:h-[350px] sm:px-0">
                    <div className="flex w-full flex-col items-center">
                      <Image
                        src={item.image}
                        alt="logo"
                        width={0}
                        height={0}
                        className="min-w-[350px] rounded-tl-lg rounded-tr-lg sm:min-w-[350px]"
                      />
                      <div className="mt-5 flex w-full flex-col items-start sm:px-5">
                        <h2 className="text-lg font-semibold">{item.topic}</h2>
                        <h2 className="mt-5 text-[#F7631B]">{item.status}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
