"use client";

import ActivityCard from "@/components/guardian/student-activities/activity-card";
// import StudentModuleLayout from "@/components/shared/student-module-layout";
import React from "react";
import { useStudentActivity } from "@/hook/swr";
import { format } from "date-fns";
import { Skeleton } from "@mui/joy";

export const StudentActivities = ({ studentId }: { studentId: string }) => {
  const { data, isLoading } = useStudentActivity({ studentId });

  const fullName = data && `${data[0].user.firstName} ${data[0].user.lastName}`;
  return (
    <div className="min-h-screen bg-[#FAFAFA] pl-3 pr-3 pt-6 md:pl-4 md:pr-4 xl:pl-9">
      {/* <StudentModuleLayout> */}
      <div>
        {isLoading ? (
          <Skeleton
            variant="text"
            width="120px"
            height={24}
            className="segoe my-6 text-lg text-[#121111] md:text-xl"
          />
        ) : (
          <h2 className="segoe my-6 text-lg text-[#1B1B1B] md:text-xl">
            {`${fullName}’s Activities`}
          </h2>
        )}
        <div className="space-y-2">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} variant="rectangular" height={90} />
              ))}
            </div>
          ) : data && data.length > 0 ? (
            data.map((activity) => {
              const date = format(new Date(activity.createdAt), "dd-MMMM-yyyy");
              const time = format(new Date(activity.createdAt), "HH:mm a");
              return (
                <ActivityCard
                  key={activity._id}
                  title={activity.message}
                  date={`${date} ${time}`}
                />
              );
            })
          ) : (
            <p className="text-center">No activity found</p>
          )}
        </div>
      </div>
      {/* </StudentModuleLayout> */}
    </div>
  );
};
