"use client";

import React from "react";
import Image from "next/image";
import { comprehension } from "./data";
import { TopicCard } from "@/components/student";
import { TopicCardSkeleton } from "@/components/skeleton/student";
import { useAllSubtopics } from "@/hook/swr";
import { EmptyState } from "@/components/shared";

interface SubtopicProps {
  slug: string;
}

export const Subtopic = ({ slug }: SubtopicProps) => {
  const { data, isLoading } = useAllSubtopics(slug);

  console.log(data, "topics");
  console.log(slug, "slug passed");
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          <div className="h-full w-full">
            <section className="mt-24 flex w-full items-center justify-between px-4 sm:mt-9 sm:flex sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">
                Comprehension 1
              </h1>
            </section>
            <section className="mb-16 mt-7 flex w-full flex-col flex-wrap items-center gap-8 md:mb-16 lg:mb-0 lg:flex-row lg:px-8">
              {isLoading ? <TopicCardSkeleton /> : null}
              {data && data.length > 0 ? (
                data?.map((item, index) => (
                  // <Link key={index} href={item.link}>
                  //   <div className="h-[360px] w-[350px] rounded-lg border bg-[#F1F1F1] px-4 py-0 shadow-lg sm:h-[350px] sm:px-0">
                  //     <div className="flex w-full flex-col items-center">
                  //       <Image
                  //         src={item.image}
                  //         alt="logo"
                  //         width={0}
                  //         height={0}
                  //         className="min-w-[350px] rounded-tl-lg rounded-tr-lg sm:min-w-[350px]"
                  //       />
                  //       <div className="mt-5 flex w-full flex-col items-start sm:px-5">
                  //         <h2 className="text-lg font-semibold">
                  //           {item.topic}
                  //         </h2>
                  //         <h2 className="mt-5 text-[#F7631B]">{item.status}</h2>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </Link>

                  // <TopicCard topic={item} key={index} />
                  <></>
                ))
              ) : (
                <EmptyState title="No Topics Available" />
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
