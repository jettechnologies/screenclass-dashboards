"use client";
import React from "react";
import Image from "next/image";
import logout from "../../assets/logout.svg";
import profilepic from "../../assets/profilepic.svg";
import add from "../../assets/add.svg";
import RadialChart from "../RadialChart";
import bell from "../../assets/bell.svg";
import { activities, performance } from "./data";

const Sideprofile = () => {
  return (
    <nav className="h-full w-full border-2 border-black bg-[#ffffff] tracking-wide">
      <div className="relative hidden flex-col lg:flex">
        {/* topbar */}
        <div className="mt-16 flex w-[370px] items-center justify-between bg-clip-text px-7">
          <h1 className="text-xl font-bold text-[#082038]">Logout</h1>
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
        <div className="mb-28 pl-8">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-2 flex cursor-pointer items-center gap-4 p-2">
              <Image
                src={profilepic}
                alt="logo"
                width={100}
                height={100}
                className=""
              />
              <Image
                src={add}
                alt="logo"
                width={100}
                height={100}
                className="absolute right-[113px] top-[175px] max-h-[21px] max-w-[21px]"
              />
            </div>
            <div className="mt-5 flex flex-col items-center space-y-2">
              <h2 className="text-xl font-bold">Ifeoluwa B. Smith</h2>
              <h2 className="text-xl font-light">SC51125</h2>
              <h2 className="text-xl font-light text-[#F7631B]">Student</h2>
            </div>
            <div className="mt-5 flex flex-col items-center space-y-2">
              <h2 className="text-md font-bold">
                Overall Performance on Quizzes
              </h2>
              <div>
                <RadialChart value1={70} value2={25} value3={5} />
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-xl bg-[#268B8D]"></div>
                  <h2 className="text-[12px] text-gray-500">Quiz Passed</h2>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-xl bg-[#EC8694]"></div>
                  <h2 className="text-[12px] text-gray-500">Quiz Failed</h2>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-xl bg-[#D9D9D9]"></div>
                  <h2 className="text-[12px] text-gray-500">
                    Fair Performance
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-10 flex w-full flex-col items-center space-y-2">
              <h2 className="text-md w-full font-bold">Recent Performance</h2>
              {performance.map((perf, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-start justify-between space-x-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex size-16 items-center justify-center rounded-[15px] bg-[#D9D9D938]">
                      <h2>{perf.score}</h2>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-md font-bold">{perf.subject}</p>
                      <p className="text-sm text-gray-400">{perf.remarks}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex w-full flex-col items-center space-y-4">
              <div className="flex w-full items-center justify-around">
                <h2 className="text-md w-full font-bold">Recent Activities</h2>
                <Image
                  src={bell}
                  alt="logo"
                  width={100}
                  height={100}
                  className="mr-7 max-h-[30px] max-w-[30px]"
                />
              </div>
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="flex w-full flex-col items-start justify-between space-x-4"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`flex size-16 items-center justify-center rounded-[15px] bg-[${act.color}]`}
                    >
                      <Image
                        src={act.icon}
                        alt="logo"
                        width={100}
                        height={100}
                        className="max-h-[30px] max-w-[30px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-md font-bold">{act.subj}</p>
                      <p className="text-sm text-gray-400">{act.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sideprofile;
