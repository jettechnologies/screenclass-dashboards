"use client";
import React, { use } from "react";
import { HeroSection } from "@/components/shared";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { subject, progressColors, subjectColors } from "./data";
import Link from "next/link";
import { SubjectProgress, Progress } from "@/components/shared";
import {
  useStudentProfile,
  useDashboardStatistics,
  useFetchSubscriptionHistory,
} from "@/hook/swr";
import { CircularProgressSkeleton } from "@/components/skeleton/student";

const Dashboard = () => {
  const { data, isLoading } = useStudentProfile();
  const {
    courseProgress,
    quizHistory,
    isLoading: dashboardLoading,
  } = useDashboardStatistics();

  const { data: subscriptionHistory } = useFetchSubscriptionHistory();

  const fullName = `${data?.firstName} ${data?.lastName}`;

  console.log(subscriptionHistory, "subscriptionHistory");

  const newQuizHistory = quizHistory?.slice(0, 5).map((quiz, index) => ({
    id: quiz.id,
    name: quiz.quizTitle,
    scorePercentage: quiz.scorePercentage,
    progressColor: progressColors[index],
  }));

  const newCourseProgress = (courseProgress || [])
    .slice(0, 5)
    .map((course, index) => ({
      id: course.subjectId,
      name: course.subjectName,
      progress: Math.floor(
        Number(course.completionRate?.match(/\d+/)?.[0] || 0),
      ),
      ...(subjectColors[index] || {
        bgColor: "#ffffff",
        progressColor: "#000000",
        trackColor: "#cccccc",
      }),
    }));

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="mb-6 flex h-[220px] w-full items-center justify-center rounded-xl bg-white">
        <HeroSection heroColor="bg-[#0B67B0]">
          <>
            {isLoading ? (
              <div className="h-5 w-full animate-pulse rounded bg-[#E0DFDF]" />
            ) : (
              <h4 className="text-sm font-semibold text-white md:text-[28px] lg:text-3xl">
                Welcome back {fullName}
              </h4>
            )}
            <p className="mt-5 max-w-[370px] text-[8px] text-white md:text-xs">
              You’re doing great! <br /> You’ve learned 80% of your goal this
              week! <br /> Keep it up and improve your result.
            </p>
          </>
        </HeroSection>
      </div>
      <div className="h-full w-full rounded-xl bg-white px-6 sm:px-10 sm:py-5">
        <div className="h-full w-full">
          <h5 className="mt-4 text-xl font-bold sm:mt-0">Latest Quiz</h5>
          {dashboardLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-full border-b border-gray-400 border-opacity-50 py-5"
              >
                <div className="h-5 w-48 animate-pulse rounded bg-[#E0DFDF]" />
                <div className="mt-4 h-5 w-full animate-pulse rounded bg-[#E0DFDF]" />
              </div>
            ))}
          {newQuizHistory ? (
            newQuizHistory.map((quiz) => (
              <div
                className="w-full border-b border-gray-400 border-opacity-50 py-5"
                key={quiz.id}
              >
                <p className="w-full text-[13px] font-[500] sm:text-lg">
                  {quiz.name}
                </p>
                <div className="mt-2 w-full">
                  <Progress
                    progress={quiz.scorePercentage}
                    progressColor={quiz.progressColor}
                    height="19px"
                  />
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
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
          {dashboardLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <CircularProgressSkeleton width="180px" key={index} />
              ))
            : null}
          {newCourseProgress.length > 0 ? (
            newCourseProgress.map((progress) => (
              <SubjectProgress
                key={progress.id}
                bgColor={progress.bgColor}
                // description={progress.description}
                progressColor={progress.progressColor}
                progressLevel={progress.progress}
                trackColor={progress.trackColor}
                subject={progress.name}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
