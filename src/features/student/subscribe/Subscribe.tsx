"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubscriptionCard } from "@/components/student";
import Link from "next/link";
import { initializePayment } from "@/mutation";
import { toast, Toaster } from "sonner";
import { subscriptionPlans } from "./data";

export const Subscribe = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handlePayment = async (amount: number, id: string): Promise<void> => {
    setLoadingId(id);

    try {
      const response = await initializePayment({
        amount,
      });

      if (!response?.success) {
        throw new Error(response?.message || "Payment initialization failed");
      }

      if (!response.data?.authorization_url) {
        throw new Error("No authorization URL received from payment provider");
      }

      window.open(
        response.data.authorization_url,
        "_blank",
        "noopener,noreferrer",
      );
    } catch (error) {
      console.error("Payment error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred during payment";
      toast.error(errorMessage);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="min-h-full w-full pb-[40px]">
        <div className="mx-auto flex w-max flex-col items-center gap-y-2">
          <p className="font-poppins text-[18px] font-bold uppercase text-[#DB4700]">
            OUR PRICING
          </p>
          <h4 className="text-[32px] font-normal capitalize text-[#1B1B1B]">
            Affordable <span className="font-bold">Pricing</span> Plans
          </h4>
          <Image
            src="/icons/subscription-spiral.svg"
            alt="subscription spiral image"
            width={120}
            height={120}
          />
        </div>
        <div className="mx-auto mt-4 flex min-h-[580px] w-fit flex-wrap gap-[20px] pb-10">
          {subscriptionPlans.map((subscriptionPlan) => (
            <div key={subscriptionPlan.id}>
              <SubscriptionCard
                plan={subscriptionPlan.plan}
                benefits={subscriptionPlan.benefits}
                bgColor={subscriptionPlan.bgColor}
                buttonGradient={subscriptionPlan.buttonGradient}
                width="280px"
                isLoading={loadingId === subscriptionPlan.id}
                onClick={() =>
                  handlePayment(
                    subscriptionPlan.plan.price,
                    subscriptionPlan.id,
                  )
                }
              />
            </div>
          ))}
        </div>
        <div className="mx-auto flex w-full max-w-[1002px] justify-center lg:justify-end">
          <Link
            href="/dashboard/student/subscription-history"
            className="relative h-[44px] px-4 py-2 font-poppins text-[16px] font-medium text-black"
            style={{
              background: "transparent",
              position: "relative",
              display: "inline-block",
            }}
          >
            <span className="relative z-10 capitalize">
              subscription history
            </span>
            <span
              className="absolute inset-0 rounded-[20px] border border-transparent"
              style={{
                background:
                  "linear-gradient(to right, #0A5D9F 0%, #F7580C 100%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
