import {
  PricingHeroSection,
  PricingSection,
  PricingFeatures,
  PricingGrowth,
} from "../../sections/pricing";

export const Pricing = () => {
  return (
    <section className="min-h-screen w-full font-poppins">
      <PricingHeroSection />
      <PricingSection />
      <PricingFeatures />
      <PricingGrowth />
      <div className="grid h-[30vh] w-full place-items-center">
        <h3 className="px-8 text-[28px] font-semibold capitalize text-[#0463A7] sm:text-4xl lg:text-5xl">
          Enjoy More, Pay Less!
        </h3>
      </div>
    </section>
  );
};
