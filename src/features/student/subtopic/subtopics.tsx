"use client";

import React from "react";
import { SubtopicCard } from "@/components/student";
import { SubjectCardSkeleton } from "@/components/skeleton/student";
import { useAllSubtopics } from "@/hook/swr";
import { EmptyState } from "@/components/shared";

interface SubtopicProps {
  subtopicId: string;
}

export const Subtopics = ({ subtopicId }: SubtopicProps) => {
  const { data, isLoading } = useAllSubtopics(subtopicId);

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          <div className="h-full w-full">
            <section className="mb-16 mt-7 flex w-full flex-col flex-wrap items-center gap-8 md:mb-16 lg:mb-0 lg:flex-row lg:px-8">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <SubjectCardSkeleton key={index} />
                ))
              ) : data && data.length > 0 ? (
                data.map((subtopic, index) => (
                  <SubtopicCard subtopic={subtopic} key={index} />
                ))
              ) : (
                <EmptyState title="No Topics Available" imageSize="lg" />
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
