import SubscriptionForm from "@/components/guardian/subscriptions/subscription-plans";
// import StudentModuleLayout from "@/components/shared/student-module-layout";
import React from "react";

export const Subscriptions = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pl-3 pr-3 pt-6 md:pl-4 md:pr-4 xl:pl-9">
      {/* <StudentModuleLayout> */}
      <div className="flex h-full flex-grow flex-col">
        <h2 className="segoe my-4 text-lg text-[#1B1B1B] md:text-xl">
          Subscribe
        </h2>
        <div className="flex flex-grow items-center justify-center">
          <div
            className="bg-white px-8 pb-24 pt-6"
            style={{
              boxShadow: "0px 0px 10px -4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className="segoe text-xl font-bold text-[#1B1B1B]">
              Choose Your Plan
            </h2>
            <p className="segoe text-xs font-light italic text-[#1b1b1b]/80">
              (Upgrade your plan to Premium plan to enjoy more of our
              explanatory videos)
            </p>
            <SubscriptionForm />
          </div>
        </div>
      </div>
      {/* </StudentModuleLayout> */}
    </div>
  );
};
