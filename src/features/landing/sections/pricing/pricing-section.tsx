"use client";

import { useState } from "react";
import { PricingTabs, PricingTable } from "../../components";
import { pricings } from "@/utils";

export const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "annually">("monthly");

  const currentPrices = pricings[activeTab];

  return (
    <section className="min-h-fit w-full bg-bg-pricing-main bg-cover bg-center bg-no-repeat font-poppins">
      <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col items-center px-8 pt-14 lg:px-[3.5rem]">
        <div className="w-fit">
          <div className="mb-6 w-fit">
            <h3 className="text-center text-3xl font-normal text-white lg:text-5xl">
              Our
              <span className="ml-2 font-bold uppercase text-[#00FEE2]">
                pricing
              </span>
            </h3>
            <p className="mt-2 text-sm font-normal text-white lg:text-base text-center">
              Affordable Pricing Plans for our products, You can check it out!
            </p>
          </div>
          <div className="w-full">
            <PricingTabs
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
            />
          </div>
        </div>
        <div className="mt-10 w-full flex-1 rounded-t-[10px] border-4 border-white bg-white px-3 pt-3">
          <PricingTable pricings={currentPrices} />
        </div>
      </div>
    </section>
  );
};
