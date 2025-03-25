"use client";

import { SubscriptionTable } from "@/components/student";
import { useFetchSubscriptionHistory } from "@/hook/swr";
import { EmptyState } from "@/components/shared";
import { SubscriptionTableSkeleton } from "@/components/skeleton/student";
import Link from "next/link";

export const SubscriptionHistory = () => {
  const { data, isLoading } = useFetchSubscriptionHistory();
  return (
    <section className="w-full bg-white px-14 py-10">
      <div className="h-full w-full">
        <h4 className="font-meduim text-[24px] text-black">Subscription</h4>
        <div className="mt-4 flex w-full flex-col justify-between gap-16 lg:flex-row">
          <div className="flex h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#0B67B0] p-2">
            <div className="flex w-full items-center justify-between">
              {/* current plan */}
              <div className="flex h-[26px] w-[134px] items-center gap-1 rounded-[4px] border border-SC-Brand-Blue px-[3px]">
                <p className="text-[10px] font-normal text-black">
                  Current Plan:
                </p>
                <div className="flex-1 rounded-[4px] bg-[#93CAF6] px-[6px] py-[2px] text-black">
                  <p className="text-[12px] font-normal">Monthly</p>
                </div>
              </div>
              <p className="text-[24px] font-semibold text-black">NGN 500</p>
            </div>
            <div className="flex w-full justify-end">
              <button className="h-[2rem] w-[122px] rounded-[6px] bg-SC-Orange px-[8px] py-[4px] font-poppins text-[12px] capitalize text-white">
                upgrade plan
              </button>
            </div>
          </div>
          <div className="flex max-h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#B3B3B3] p-2">
            <p className="text-[12px] font-light text-black">Next Payment</p>
            <p className="text-[14px] font-medium text-black">
              On 3RD APRIL, 2025.
            </p>
            <button className="h-[2rem] w-[122px] rounded-[6px] bg-[#0B67B0] px-[8px] py-[4px] font-poppins text-[12px] capitalize text-white">
              upgrade plan
            </button>
          </div>
        </div>
        <div className="mt-[50px] h-full w-full">
          <h4 className="font-meduim text-[24px] text-black">
            Payment History
          </h4>
          <div className="mt-4 w-full">
            {isLoading ? <SubscriptionTableSkeleton /> : null}
            {data && data.length > 0 ? (
              <SubscriptionTable />
            ) : (
              <EmptyState
                title="No Subscription History"
                description={
                  <p className="flex gap-x-1">
                    Make your first subscription{" "}
                    <Link
                      href="/student/subscribe"
                      className="italic text-SC-Orange underline"
                    >
                      here
                    </Link>
                  </p>
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
