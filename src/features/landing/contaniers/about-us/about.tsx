import React from "react";
import {
  SupportClassSection,
  WhoWeAreSection,
  Features,
} from "../../sections/about-us";

export const About = () => {
  return (
    <section className="min-h-screen w-full font-poppins">
      <WhoWeAreSection />
      <Features />
      <SupportClassSection />
    </section>
  );
};
