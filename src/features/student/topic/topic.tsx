"use client";

import React from "react";
import { englishData } from "./data";
import Link from "next/link";
import { useAllTopics } from "@/hook/swr";

interface TopicProps {
  slug: string;
}

export const Topic = ({ slug }: TopicProps) => {
  const { data, isLoading } = useAllTopics(slug);
  console.log(data, "topics data");

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
              {englishData.map((data, index) => (
                <Link key={index} href={data.link}>
                  <div
                    className="flex h-[130px] w-full items-center justify-between rounded-md border px-4 py-6 drop-shadow-md sm:px-8"
                    style={{ backgroundColor: data.color }}
                  >
                    <div className="flex flex-col items-start">
                      <p className="font-semibold">{data.topic}</p>
                      <p className="text-md mt-1 text-gray-500">
                        {data.subtopic}
                      </p>
                      <p className="text-md mt-3 text-gray-500">
                        {data.units} units
                      </p>
                    </div>
                    {/* <h2 className="font-semibold">{data.time}</h2> */}
                  </div>
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
