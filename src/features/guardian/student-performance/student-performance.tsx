"use client";

import PerformanceCard from "@/components/guardian/student-performance/performance-card";
import { EmptyState } from "@/components/shared";
import StudentModuleLayout from "@/components/shared/student-module-layout";
import { useStudentQuizPerformance, useSingleStudent } from "@/hook/swr";
import { Skeleton } from "@mui/joy";

export const StudentPerformance = ({ studentId }: { studentId: string }) => {
  const { data, isLoading } = useStudentQuizPerformance({ studentId });
  const { data: studentDetails, isLoading: studentDetailLoading } =
    useSingleStudent(studentId);

  console.log(studentDetails, "student details");
  const fullName =
    studentDetails && `${studentDetails.firstName} ${studentDetails.lastName}`;

  return (
    <StudentModuleLayout>
      <div className="w-full">
        {studentDetailLoading ? (
          <Skeleton
            variant="text"
            width="120px"
            height={24}
            className="segoe my-6 text-lg text-[#1B1B1B] md:text-xl"
          />
        ) : (
          <h2 className="segoe my-6 text-lg text-[#1B1B1B] md:text-xl">
            {`${fullName}’s Performance`}
          </h2>
        )}

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} variant="rectangular" height={100} />
            ))}
          </div>
        ) : data && data.length > 0 ? (
          <div className="space-y-2">
            {data.map((performance) => (
              <PerformanceCard key={performance.id} quizHistory={performance} />
            ))}
          </div>
        ) : (
          <EmptyState title="No Performance Available" imageSize="xl" />
        )}
      </div>
    </StudentModuleLayout>
  );
};
