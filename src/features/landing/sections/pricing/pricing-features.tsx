import Link from "next/link";

const features = [
  {
    name: "Secure Transactions",
    description:
      "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a management",
  },
  {
    name: "24/7 Customer support",
    description:
      "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a management",
  },
  {
    name: "Affordable Plans",
    description:
      "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a management",
  },
  {
    name: "Easy to use softwares",
    description:
      "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a management",
  },
];

export const PricingFeatures = () => {
  return (
    <section className="min-h-screen w-full bg-bg-pricing-sub bg-cover bg-center bg-no-repeat">
      <div className="flex min-h-screen w-full flex-col gap-y-4 lg:flex-row">
        <div className="relative h-[450px] w-full bg-bg-pricing-feature-sm bg-cover bg-center bg-no-repeat px-8 pt-6 lg:h-screen lg:w-1/2 lg:bg-bg-pricing-feature lg:px-[3.5rem] lg:pt-[2.5rem]">
          <h4 className="text-xs font-medium text-black md:text-xl">
            Our Platforms offer the best solutions
          </h4>
          <h3 className="mt-4 text-sm font-medium text-[#003C6B] md:text-[22px]">
            We have the <span className="text-base md:text-2xl">BEST</span>{" "}
            Features for you!
          </h3>
          <p className="max-w-[516px] text-xs font-normal text-black md:text-base">
            We empower students with 21st century skill: Join our E-lerrning
            community and unlock your potential. Screenclass Is a management
            stystem
          </p>
        </div>
        <div className="flex h-screen flex-1 flex-col justify-center px-8 pb-12 lg:px-[3.5rem]">
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 md:grid-cols-[repeat(2,minmax(272px,1fr))] md:grid-rows-[repeat(2,minmax(162px,1fr))]">
            {features.map((feature, index) => (
              <div className="border-2 border-black p-4" key = {index}>
                <h5 className="text-sm font-medium capitalize text-[#00FEE4] md:text-xl">
                  {feature.name}
                </h5>
                <p className="mt-2 text-xs font-normal leading-6 text-white lg:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/signup"
            className="ml-4 mt-8 w-fit rounded-lg bg-SC-Orange px-6 py-3 text-center font-poppins text-sm font-medium uppercase text-white md:w-[206px] md:py-4 lg:text-base"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};
