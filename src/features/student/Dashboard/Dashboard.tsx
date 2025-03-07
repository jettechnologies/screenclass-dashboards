"use client";
import React from "react";
import { HeroSection } from "@/components/shared";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { quiz, subject } from "./data";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
      <div className="mb-6 flex h-[220px] w-full items-center justify-center">
        <HeroSection heroColor="bg-[#0B67B0]" />
      </div>
      <div className="w-full px-6 sm:px-10">
        <div className="flex h-full w-full flex-col items-start justify-start space-y-8 md:h-full md:flex-col md:space-y-8 lg:h-[400px] lg:flex-row lg:space-x-6 lg:space-y-0">
          <div className="flex w-full flex-col items-start">
            <h2 className="mt-4 text-xl font-bold sm:mt-0">Latest Quiz</h2>
            {quiz.map((item, index) => (
              <div
                className="flex w-full items-center space-x-2 border-b border-gray-400 border-opacity-50 py-5"
                key={index}
              >
                <h2 className="w-full text-[13px] font-bold sm:text-lg">
                  {item.subject} {"-"}
                  <span className="font-normal opacity-50"> {item.topic}</span>
                </h2>
                <div className="h-[5px] w-full rounded-lg bg-neutral-200 dark:bg-gray-300">
                  <div
                    className={`${item.percentNum < 50 ? "bg-red-500" : "bg-green-500"} h-[5px] rounded-l-lg`}
                    style={{ width: `${item.percent}` }}
                  ></div>
                </div>
                <h2>{item.percent}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full items-center justify-between px-7 lg:mt-20">
        <h1 className="text-lg font-bold text-[#082038]">Your Subjects</h1>
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-md font-bold text-[#082038]">More</h1>
          <div className="">
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-around space-y-4 p-7 sm:flex-row sm:space-x-5 sm:space-y-0 md:mb-10">
        {subject.map((subj) => (
          <div
            key={subj.id}
            className="flex w-full items-center justify-start gap-4 rounded-lg px-[8px] py-3 text-white"
            style={{ backgroundColor: subj.color }}
          >
            <div className="ml-3 flex size-16 items-center justify-center rounded-[15px] bg-[#D9D9D938]">
              <h2>{subj.score}</h2>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-[#D9D9D9]">{subj.topic}</p>
              <div className="flex items-center space-x-2">
                <p className="text-md font-bold">{subj.subject}</p>
                <EastOutlinedIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
