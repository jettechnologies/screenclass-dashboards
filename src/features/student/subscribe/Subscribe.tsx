"use client";
import React from "react";
import Image from "next/image";
import { SubscriptionCard } from "@/components/student";
import Link from "next/link";

const subscriptionPlans = [
  {
    id: crypto.randomUUID(),
    plan: { name: "starter", price: 30, duration: "daily" },
    benefits: [
      "24/7 Online Support",
      "Limited Platforms",
      "Benefits",
      "Benefits",
    ],
    buttonGradient: "linear-gradient(135deg, #0b67b0 0%, #052b4a 100%)",
  },
  {
    id: crypto.randomUUID(),
    plan: { name: "advanced", price: 60, duration: "monthly" },
    benefits: [
      "24/7 Online Support",
      "multiple Platforms",
      "Benefits",
      "Benefits",
    ],
    bgColor: "linear-gradient(to right, #002847 0%, #0B67B0 100%)",
    buttonGradient: "linear-gradient(45deg, #FA590C 0%, #C6470A 100%)",
  },
  {
    id: crypto.randomUUID(),
    plan: { name: "premium", price: 100, duration: "yearly" },
    benefits: [
      "24/7 Online Support",
      "multiple Platforms",
      "Benefits",
      "Benefits",
    ],
    buttonGradient: "linear-gradient(135deg, #0b67b0 0%, #052b4a 100%)",
  },
];

export const Subscribe = () => {
  return (
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
      <div className="mx-auto mt-4 flex min-h-[580px] w-fit flex-wrap justify-center gap-[20px] pb-10">
        {subscriptionPlans.map((subscriptionPlan) => (
          <div key={subscriptionPlan.id}>
            <SubscriptionCard
              plan={subscriptionPlan.plan}
              benefits={subscriptionPlan.benefits}
              bgColor={subscriptionPlan.bgColor}
              buttonGradient={subscriptionPlan.buttonGradient}
            />
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-[1002px] justify-center lg:justify-end">
        <Link
          href="/student/subscription-history"
          className="relative h-[44px] px-4 py-2 font-poppins text-[16px] font-medium text-black"
          style={{
            background: "transparent",
            position: "relative",
            display: "inline-block",
          }}
        >
          <span className="relative z-10 capitalize">subscription history</span>

          {/* Gradient Border */}
          <span
            className="absolute inset-0 rounded-[20px] border border-transparent"
            style={{
              background: "linear-gradient(to right, #0A5D9F 0%, #F7580C 100%)",
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
  );
};
