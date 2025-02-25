import React from "react";
import {
  AboutHeroSection,
  LMSSection,
  SupportClassSection,
  WhoWeAreSection,
  WhatWeDoSection,
  Features,
} from "../../sections/about-us";

export const About = () => {
  return (
    <section className="min-h-screen w-full font-poppins">
      <AboutHeroSection />
      <WhoWeAreSection />
      <Features />
      <SupportClassSection />
      {/* <LMSSection /> */}

      {/* <WhatWeDoSection /> */}
    </section>
  );
};
