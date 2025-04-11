"use client";

import { USER_ROLE_KEY } from "@/utils";
import { subscriptionPlans } from "@/features/student/subscribe/data";
import { SubscriptionCard } from "@/components/student";
import { getCookie } from "cookies-next";
import { TOKEN_KEY } from "@/utils";
import { useRouter } from "next/navigation";

export const PricingSection = () => {
  const token = getCookie(TOKEN_KEY);
  const role = getCookie(USER_ROLE_KEY);

  const router = useRouter();

  const handlePayment = () => {
    if (!token && !role) {
      router.push("/signin/student");
    } else if (role === "student") {
      router.push("/student/subscribe");
    } else {
      router.push("/signin/student");
    }
  };

  return (
    <section
      className="min-h-fit w-full font-poppins"
      style={{
        background:
          "linear-gradient(to right, rgba(90,159,211,0.25) 0%, rgba(255,160,103,0.25) 100%)",
        backdropFilter: "blur(80px)",
        WebkitBackdropFilter: "blur(80px)",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col items-center px-8 pt-14 lg:px-[3.5rem]">
        <div className="w-fit">
          <div className="mb-6 w-fit">
            <h3 className="text-center text-3xl font-normal text-white lg:text-5xl">
              Our
              <span className="ml-2 font-bold uppercase text-SC-Brand-Blue">
                pricing
              </span>
            </h3>
            <p className="mt-2 text-center text-sm font-normal text-white lg:text-base">
              Affordable Pricing Plans for our products, You can check it out!
            </p>
          </div>
          {/* <div className="w-full">
            <PricingTabs
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
            />
          </div> */}
        </div>
        {/* <div className="mt-10 w-full flex-1 rounded-t-[10px] border-4 border-white bg-white px-3 pt-3">
          <PricingTable pricings={currentPrices} />
        </div> */}
        <div className="mx-auto mt-4 flex min-h-[580px] w-full flex-wrap justify-center gap-y-6 pb-10 sm:justify-between">
          {subscriptionPlans.map((subscriptionPlan) => (
            <div key={subscriptionPlan.id}>
              <SubscriptionCard
                plan={subscriptionPlan.plan}
                benefits={subscriptionPlan.benefits}
                bgColor={subscriptionPlan.bgColor}
                buttonGradient={subscriptionPlan.buttonGradient}
                width="280px"
                onClick={() => handlePayment()}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
