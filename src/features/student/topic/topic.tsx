"use client";

import React from "react";
import { englishData } from "./data";
import Link from "next/link";
import { useAllTopics } from "@/hook/swr";
import { TopicCard } from "@/components/student/topic-card";
import { TopicCardSkeleton } from "@/components/skeleton/student";
import { EmptyState } from "@/components/shared";
import { usePathname } from "next/navigation";

interface TopicProps {
  topicId: string;
}

export const Topic = ({ topicId }: TopicProps) => {
  const { data: topics, isLoading } = useAllTopics(topicId);

  const pathname = usePathname();

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          <div className="h-full w-full">
            <section className="mt-24 flex w-full items-center justify-between px-4 sm:mt-9 sm:flex sm:px-7 sm:py-2">
              <h4 className="text-xl font-bold text-[#082038]">
                English Language
              </h4>
            </section>
            <section className="mb-16 mt-8 flex w-full flex-col space-y-6 px-4 sm:mb-0 sm:space-y-8 sm:px-7">
              {isLoading ? (
                Array(3)
                  .fill(0)
                  .map((_, index) => <TopicCardSkeleton key={index} />)
              ) : topics && topics.length > 0 ? (
                topics.map((topic) => (
                  <TopicCard
                    key={topic._id}
                    topic={topic}
                    baseRoute={pathname}
                  />
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
