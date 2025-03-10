"use client";
import React from "react";
import { HeroSection } from "@/components/shared";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { quiz, subject } from "./data";
import Link from "next/link";
import { SubjectProgress } from "@/components/student";
import { Progress } from "@/components/student/progress";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="mb-6 flex h-[220px] w-full items-center justify-center rounded-xl bg-white">
        <HeroSection heroColor="bg-[#0B67B0]" />
      </div>
      <div className="h-full w-full rounded-xl bg-white px-6 sm:px-10 sm:py-5">
        <div className="h-full w-full">
          <h5 className="mt-4 text-xl font-bold sm:mt-0">Latest Quiz</h5>
          {quiz.map((item, index) => (
            <div
              className="w-full border-b border-gray-400 border-opacity-50 py-5"
              key={index}
            >
              <p className="w-full text-[13px] font-[500] sm:text-lg">
                {item.subject}
              </p>
              <div className="mt-2 w-full">
                <Progress
                  progress={item.percentNum}
                  progressColor={item.progressColor}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-6 w-full rounded-xl bg-white py-5">
        <div className="flex w-full items-center justify-between px-7">
          <h5 className="text-lg font-bold text-[#082038]">
            Your Subjects Progress
          </h5>
          <div className="flex items-center justify-center space-x-2">
            <Link href="#" className="text-md font-bold text-[#024D81]">
              View All
            </Link>
            <div className="">
              <EastOutlinedIcon sx={{ color: "#024D81" }} />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-around space-y-4 p-7 sm:flex-row sm:space-x-5 sm:space-y-0">
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
      </section>
    </div>
  );
};

export default Dashboard;
