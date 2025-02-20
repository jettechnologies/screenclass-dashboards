"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "../../components";

export const PricingHeroSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 91);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="min-h-fit w-full bg-bg-pricing-main bg-cover bg-center bg-no-repeat">
      <Header />
      {/* Spacer to prevent layout shift */}
      {isSticky && <div className="h-[83px] w-full border-2 border-black" />}
      <div className="relative mx-auto flex min-h-[calc(100dvh-83px)] w-full max-w-screen-xl flex-col items-center px-8 max-sm:pb-12 lg:flex-row lg:px-[3.5rem]">
        <div className="relative h-[245px] w-full max-[780px]:order-2 md:h-[479px] lg:max-w-[500px] xl:max-w-[630px]">
          <Image
            src="/images/pricing-phone-2.png"
            alt="pricing-phone"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          />
        </div>
        <div className="h-fit w-full flex-1 max-[780px]:order-1 lg:w-1/2">
          <h2 className="text-3xl font-normal text-white lg:text-5xl">
            Pricing &{" "}
            <span className="ml-2 font-bold text-[#00FEE2]">Plan</span>
          </h2>
          <p className="mt-5 text-sm font-normal leading-[24px] text-white lg:text-base">
            We empower students with 21st century skill: Join our E-lerrning
            community and unlock your potential. Screenclass Is a management
            stystem (LMS) Developed to meet and suit the learning process.
          </p>
        </div>
      </div>
    </section>
  );
};
