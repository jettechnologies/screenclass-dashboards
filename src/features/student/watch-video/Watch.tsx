import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import add from "../assets/add.svg";
import Image from "next/image";
import compre from "../assets/compre-1.svg";
import play from "../assets/play.svg";
import player from "../assets/player.svg";
import Link from "next/link";

export const Watch = () => {
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
            <section className="mt-24 w-full px-4 sm:mt-9 sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">Watch Video</h1>
              <h1 className="mt-4 text-lg text-[#082038] sm:mt-8">
                Play Video
              </h1>
            </section>
            <section className="flex w-full flex-col items-center px-4 sm:px-7 md:flex-col md:items-center lg:flex-row lg:items-start">
              <div className="relative flex w-full items-center md:w-full lg:w-fit">
                <div className="w-full rounded-lg bg-gray-700">
                  <Image
                    src={compre}
                    alt="logo"
                    width={0}
                    height={0}
                    className="min-w-full rounded-lg opacity-70 md:min-w-full lg:min-w-[700px]"
                  />
                  <button className="absolute left-[38%] top-[50%] -translate-y-1/2 px-4 py-1 sm:left-[43%]">
                    <Image
                      src={play}
                      alt="logo"
                      width={0}
                      height={0}
                      className="min-w-[50px] rounded-tl-lg rounded-tr-lg sm:min-w-[70px]"
                    />
                  </button>
                </div>
                <div className="translate2 absolute bottom-0">
                  <Image
                    src={player}
                    alt="logo"
                    width={0}
                    height={0}
                    className="min-w-full rounded-lg lg:min-w-[700px]"
                  />
                </div>
              </div>
              <div className="mt-4 flex w-full flex-row justify-between sm:mt-0 md:mt-4 md:flex-row md:justify-between lg:ml-10 lg:flex-col lg:justify-normal lg:space-y-6">
                <Link href="/student/take-quiz">
                  <button className="sm:text-md w-28 rounded-md bg-[#4097D7] px-4 py-2 text-sm text-white sm:w-40">
                    Take Quiz
                  </button>
                </Link>

                <button className="sm:text-md w-28 rounded-md bg-[#4097D7] px-4 py-2 text-sm text-white sm:w-40">
                  Share
                </button>
              </div>
            </section>
            <section className="mt-4 w-full px-4 text-center sm:px-7 md:text-center lg:text-left">
              <h2 className="font-semibold">
                INTRODUCTION TO COMMON FRACTIONS
              </h2>
              <h2 className="mt-1">03:50mins</h2>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
