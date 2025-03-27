"use client";

import React from "react";
import { useAllSubjects } from "@/hook/swr";
import { EmptyState } from "@/components/shared";
import { SubjectCard } from "@/components/student";
import { SubjectCardSkeleton } from "@/components/skeleton/student";

export const Subjects = () => {
  const { data: subjects, isLoading } = useAllSubjects();

  console.log(subjects);

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          <div className="h-full w-full">
            <section className="mt-24 flex w-full items-center justify-between px-4 sm:mt-9 sm:flex sm:px-7 sm:py-2">
              <h3 className="text-xl font-bold text-[#082038]">All Subjects</h3>
            </section>
            {/* subjects data */}
            <section className="mb-16 mt-10 flex w-full flex-col flex-wrap items-center gap-4 space-y-8 px-8 sm:space-y-0 md:mb-16 md:flex-col lg:mb-0 lg:flex-row">
              {isLoading ? (
                <SubjectCardSkeleton />
              ) : subjects?.length > 0 ? (
                subjects.map((subject) => (
                  <SubjectCard
                    key={subject._id}
                    href={`/student/subjects/topics/${subject._id}`}
                    imageSrc="/icons/teacher.svg"
                    imageAlt={subject.name}
                    subject={subject.name}
                    topics={subject.topicCount}
                    units={subject.subtopicCount}
                  />
                ))
              ) : (
                <EmptyState title="No Subject found" imageSize="xl" />
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
