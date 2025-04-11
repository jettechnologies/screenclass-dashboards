"use client";

import { SubscriptionTable } from "@/components/student";
import { useFetchSubscriptionHistory } from "@/hook/swr";
import { EmptyState } from "@/components/shared";
import {
  ActiveSubscriptionSkeleton,
  SubscriptionTableSkeleton,
} from "@/components/skeleton/student";
import { Skeleton } from "@mui/joy";
import Link from "next/link";
import {
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  format,
  parseISO,
} from "date-fns";

function getDateDifferenceLabel(
  startDate: string | Date,
  endDate: string | Date,
): { value: number; label: "day(s)" | "week(s)" | "month(s)" } {
  const start = typeof startDate === "string" ? parseISO(startDate) : startDate;
  const end = typeof endDate === "string" ? parseISO(endDate) : endDate;

  const months = differenceInMonths(end, start);
  const weeks = differenceInWeeks(end, start);
  const days = differenceInDays(end, start);

  if (months >= 1) {
    return { value: months, label: "month(s)" };
  } else if (weeks >= 1) {
    return { value: weeks, label: "week(s)" };
  } else {
    return { value: days, label: "day(s)" };
  }
}

export const SubscriptionHistory = () => {
  const { data, isLoading } = useFetchSubscriptionHistory();

  const activeSubscription = data?.find(
    (subscription) => subscription.status === "active",
  );

  return (
    <section className="w-full bg-white px-14 pb-16 pt-10">
      <div className="h-full w-full">
        <h4 className="font-meduim text-[24px] text-black">Subscription</h4>
        {isLoading ? (
          <ActiveSubscriptionSkeleton />
        ) : !activeSubscription ? null : (
          <div className="mt-4 flex w-full flex-col justify-between gap-x-16 gap-y-6 lg:flex-row">
            <div className="flex h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#0B67B0] p-2">
              <div className="flex w-full items-center justify-between">
                {/* current plan */}
                <div className="flex min-h-[26px] min-w-[134px] flex-col items-center gap-1 rounded-[4px] border border-SC-Brand-Blue px-[3px] lg:flex-row">
                  <p className="text-[10px] font-normal text-black">
                    Current Plan Duration:
                  </p>
                  <div className="flex-1 rounded-[4px] bg-[#93CAF6] px-[6px] py-[2px] text-black">
                    {activeSubscription ? (
                      <div className="flex w-fit gap-1">
                        <p className="text-[12px] font-normal">
                          {
                            getDateDifferenceLabel(
                              activeSubscription?.createdAt,
                              activeSubscription?.expiryDate,
                            ).value
                          }
                        </p>
                        <p className="text-[12px] font-normal">
                          {
                            getDateDifferenceLabel(
                              activeSubscription?.createdAt,
                              activeSubscription?.expiryDate,
                            ).label
                          }
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <p className="text-[24px] font-semibold text-black">
                  NGN {activeSubscription.plan.price}
                </p>
              </div>
              <div className="flex w-full justify-end">
                <button className="h-[2rem] w-[122px] rounded-[6px] bg-SC-Orange px-[8px] py-[4px] font-poppins text-[12px] capitalize text-white">
                  upgrade plan
                </button>
              </div>
            </div>
            <div className="flex max-h-[158px] flex-1 flex-col justify-between rounded-[8px] border-2 border-[#B3B3B3] p-2">
              <p className="text-[12px] font-light text-black">Next Payment</p>
              {activeSubscription ? (
                <p className="text-[14px] font-medium text-black">
                  {format(
                    parseISO(activeSubscription?.expiryDate),
                    "EEEE, do MMMM yyyy",
                  )}
                </p>
              ) : null}
              <button className="h-[2rem] w-[122px] rounded-[6px] bg-[#0B67B0] px-[8px] py-[4px] font-poppins text-[12px] capitalize text-white">
                upgrade plan
              </button>
            </div>
          </div>
        )}
        <div className="mt-[50px] h-full w-full">
          <h4 className="font-meduim text-[24px] text-black">
            Payment History
          </h4>
          <div className="mt-4 w-full">
            {isLoading ? (
              <SubscriptionTableSkeleton />
            ) : data && data.length > 0 ? (
              <SubscriptionTable subscriptionHistory={data} />
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
                imageSize="xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
