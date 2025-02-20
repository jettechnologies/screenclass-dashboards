import React from "react";
import { Container } from "@/components/cbt";
import Link from "next/link";

export const QuizSummary = ({}) => {
  return (
    <Container title="quiz summary">
      <div className="grid place-items-center p-4">
        <div className="mt-10 w-full md:w-1/2">
          <ul className="mb-6 w-full">
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                sub-topic
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">
                importance of recreations
              </p>
            </li>
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                number of questions
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">10</p>
            </li>
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                question<span className="lowercase">(s)</span> of page
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">1</p>
            </li>
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                quiz duration
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">
                00:30:00
              </p>
            </li>
            <li className="mt-6 w-full border border-SC-Orange bg-orange-50 px-4 py-2">
              <p className="text-sm font-normal text-gray-700">
                Hi,{" "}
                <span className="font-medium capitalize text-SC-Blue">
                  malcom dunamis
                </span>
                , kindly read all questions carefully and choose the appropriate
                answer.
              </p>
            </li>
          </ul>
          <Link href="/cbt/1">
            <button
              type="button"
              className="rounded-lg bg-SC-Blue px-5 py-2 text-base font-semibold capitalize text-white"
            >
              start quiz now!
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
