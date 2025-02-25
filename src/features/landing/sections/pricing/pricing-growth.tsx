import Image from "next/image";
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

export const PricingGrowth = () => {
  return (
    <section className="min-h-screen w-full border-2 border-black bg-bg-pricing-main bg-cover bg-center bg-no-repeat px-8 pt-14 lg:px-[3.5rem]">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="relative h-[450px] w-full max-[780px]:order-2 lg:h-screen lg:flex-1">
          <Image
            src="/images/girl-power.png"
            alt="pricing-growth"
            fill
            className="object-cover"
          />
        </div>
        {/* <div className="h-fitlg:h-screen w-full max-[780px]:order-1 lg:grid lg:flex-1 lg:place-content-center">
          <div className="max-w-[509px]">
            <h3 className="text-3xl font-normal text-white lg:text-5xl">
              Grow with
              <span className="ml-2 font-bold uppercase text-[#00FEE2]">
                Us Today
              </span>
            </h3>
            <p className="mt-3 w-full text-xs font-normal text-white lg:text-base">
              We empower students with 21st century skill: Join our E-lerrning
              community and unlock your potential. Screenclass Is a management
              stystem (LMS) Developed to meet and suit the learning process.
            </p>
          </div>
          <Link
            href="/signup"
            className="mt-8 w-fit rounded-lg bg-SC-Orange px-6 py-3 text-center font-poppins text-sm font-medium uppercase text-white md:w-[206px] md:py-4 lg:text-base"
          >
            Get Started
          </Link>
        </div> */}
        <div className="flex flex-1 flex-col justify-center pb-12 md:px-8 lg:h-screen lg:px-[3.5rem]">
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 md:grid-cols-[repeat(2,minmax(272px,1fr))] md:grid-rows-[repeat(2,minmax(162px,1fr))]">
            {features.map((feature, index) => (
              <div className="p-4">
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
