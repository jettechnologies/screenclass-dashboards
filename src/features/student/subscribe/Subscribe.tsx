"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubscriptionCard } from "@/components/student";
import Link from "next/link";
import { initializePayment } from "@/mutation";
import { toast, Toaster } from "sonner";
import { transformPlans } from "@/utils";
import { SubscriptionPlan } from "@/utils/validators";
import PaymentModeModal from "@/components/modal/payment-mode-modal";

export const Subscribe = ({ data }: { data: SubscriptionPlan[] }) => {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const transformedPlans = transformPlans(data);

  const currentPlans = React.useMemo(() => {
    return transformedPlans.find((plan) => plan.id === loadingId);
  }, [loadingId, transformedPlans]);

  const handleCardPayments = React.useCallback(
    async (amount: number): Promise<void> => {
      setIsLoading(true);

      try {
        const response = await initializePayment({
          amount,
        });

        if (!response?.success) {
          throw new Error(response?.message || "Payment initialization failed");
        }

        if (!response.data?.authorization_url) {
          throw new Error(
            "No authorization URL received from payment provider",
          );
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
        setIsLoading(false);
      }
    },
    [],
  );

  const handleMultiplePayments = React.useCallback(
    (method: "airtime" | "card" | "momo") => {
      if (!currentPlans) return;

      switch (method) {
        case "airtime":
          console.log("not happing yet");
          break;
        case "card":
          handleCardPayments(currentPlans?.plan.price);
          break;
        case "momo":
          console.log("not happening yet");
          break;
        default:
          console.log("not happening yet");
          break;
      }
    },
    [currentPlans, handleCardPayments],
  );

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
        <div className="mx-auto mt-4 flex min-h-[580px] w-fit flex-wrap gap-[20px] pb-10 max-[780px]:justify-center">
          {transformedPlans.map((subscriptionPlan) => (
            <div key={subscriptionPlan.id}>
              <SubscriptionCard
                plan={subscriptionPlan.plan}
                benefits={subscriptionPlan.benefits}
                bgColor={subscriptionPlan.bgColor}
                buttonGradient={subscriptionPlan.buttonGradient}
                width="280px"
                onClick={() => {
                  setIsOpen(true);
                  setLoadingId(subscriptionPlan.id);
                }}
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

      <PaymentModeModal
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(false)}
        handleMultiplePayments={handleMultiplePayments}
        isLoading={isLoading}
      />
    </>
  );
};
