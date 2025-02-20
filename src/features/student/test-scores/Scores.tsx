import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import add from "../assets/add.svg";
import Image from "next/image";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import RadialChart3 from "../Components/RadialChart3";
import RadialChart from "../Components/RadialChart2";
import confetti from "../assets/confetti.gif";

export const Scores = () => {
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          {/* topbar */}
          <section className="mt-24 hidden w-full items-center justify-between border-b-2 border-gray-600 px-4 sm:mt-8 sm:flex sm:px-7 sm:py-2">
            <h1 className="text-xl font-bold text-[#082038]">Take Quiz</h1>
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
            <Image
              src={confetti}
              width={100}
              height={100}
              alt="Done!"
              className="absolute z-50 hidden min-w-[400px] lg:right-[40%] lg:top-[20%] lg:block"
            />
            <section className="mt-24 w-full space-x-10 px-5 sm:mt-9 sm:justify-normal sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">Quiz</h1>
            </section>
            <section className="mt-6 flex w-full flex-col items-center space-y-8 px-7 sm:mt-0 md:flex-col md:space-y-6 lg:flex-row lg:justify-around lg:space-y-0">
              <div className="flex h-[170px] w-[350px] flex-col items-start justify-center rounded-lg bg-white px-4 drop-shadow-md md:w-full lg:w-[350px]">
                <h2 className="text-lg font-semibold">Common Fractions</h2>
                <h2 className="mt-2 text-gray-500">Fractions</h2>
              </div>
              <div className="flex h-[170px] w-[350px] items-center rounded-lg bg-white px-4 drop-shadow-md md:w-full lg:w-[400px]">
                <div className="mt-16 w-[150px]">
                  <RadialChart value1={80} value2={20} />
                </div>
                <h2 className="text-[16px] leading-7">
                  Congratulations! <br /> you have{" "}
                  <span className="text-[#90AAED]">passed</span> this test with
                  <span className="text-[#90AAED]"> 66.67%.</span>
                </h2>
              </div>
              <div className="flex h-[170px] w-[350px] items-center rounded-lg bg-white px-4 drop-shadow-md md:w-full lg:w-[400px]">
                <div className="mt-16 w-[150px]">
                  <RadialChart3 value1={80} value2={20} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className={`h-3 w-3 rounded-xl bg-[#1FDCDC]`}></div>
                    <h2 className="text-[10px] text-gray-500 sm:text-[14px]">
                      Fail Percentage (20%)
                    </h2>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className={`h-3 w-3 rounded-xl bg-[#E980F2]`}></div>
                    <h2 className="text-[10px] text-gray-500 sm:text-[14px]">
                      Pass Percentage (80%)
                    </h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-16 mt-6 flex w-full flex-col items-start space-y-6 px-7 sm:mb-0 sm:mt-12 md:flex-col md:px-7 lg:flex-row lg:px-7">
              <div className="flex w-full flex-col items-start space-y-6 sm:w-[600px] sm:space-y-6">
                <div className="flex w-full flex-row items-center space-x-6">
                  <div className="flex h-[90px] w-[170px] flex-col items-start justify-center rounded-2xl bg-[#FF99A6] px-4 font-semibold text-white drop-shadow-2xl">
                    <h2 className="text-2xl">2</h2>
                    <h2 className="text-sm">Correct Answers</h2>
                  </div>
                  <div className="flex h-[90px] w-[170px] flex-col items-start justify-center rounded-2xl bg-[#57C7EB] px-4 font-semibold text-white drop-shadow-2xl">
                    <h2 className="text-2xl">1</h2>
                    <h2 className="text-sm">Wrong Answers</h2>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center space-x-6">
                  <div className="flex h-[100px] w-[170px] flex-col items-start justify-center rounded-2xl bg-[#E39AF6] px-4 font-semibold text-white drop-shadow-2xl">
                    <AlarmOutlinedIcon />
                    <h2 className="mt-2 text-xl">12m 20sec</h2>
                    <h2 className="text-sm font-normal">Time Taken</h2>
                  </div>
                  <div className="flex h-[100px] w-[170px] flex-col items-start justify-center rounded-2xl bg-[#62F379] px-4 font-semibold text-white drop-shadow-2xl">
                    <AlarmOutlinedIcon />
                    <h2 className="mt-2 text-xl">15m 00sec</h2>
                    <h2 className="text-sm font-normal">Time Given</h2>
                  </div>
                </div>
              </div>
              <section className="mt-8 flex w-full items-center space-x-6 sm:mt-0">
                <div className="flex h-[90px] w-[170px] flex-col items-start justify-center rounded-2xl bg-white px-4 drop-shadow-md">
                  <h2 className="sm:text-md text-[14px]">
                    Total number of questions: 10
                  </h2>
                </div>
                <div className="flex h-[90px] w-[170px] flex-col items-start justify-center rounded-2xl bg-white px-4 drop-shadow-md">
                  <h2 className="sm:text-md text-[14px]">
                    Answered questions: 10
                  </h2>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
