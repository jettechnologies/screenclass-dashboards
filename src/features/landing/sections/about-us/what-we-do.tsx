import Image from "next/image";

export const WhatWeDoSection = () => {
  return (
    <section className="min-h-[90dvh] w-full">
      <div className="min-h-3/5 h-[520px] w-full bg-bg-about-section-4 bg-cover bg-center bg-no-repeat px-8 py-6 md:py-12 lg:px-28">
        <div className="flex h-full w-fit flex-col justify-center">
          <div className="w-max">
            <h3 className="text-2xl font-normal text-white lg:text-5xl">
              Learn
            </h3>
            <h3 className="text-2xl font-bold text-[#00FEE2] lg:text-5xl">
              <span className="text-xl font-light text-white lg:text-4xl">
                with
              </span>
              Us Today
            </h3>

            <p className="mt-4 text-xs font-medium text-white md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <button className="mt-12 w-fit rounded-lg bg-SC-Orange px-4 py-2 font-poppins text-sm font-medium uppercase text-white shadow-md md:px-6 md:py-4 lg:text-base">
            Get Started
          </button>
        </div>
      </div>
      <div className="max-[650px]: flex w-full flex-col justify-between gap-y-8 px-8 py-6 md:py-12 lg:flex-row lg:px-28">
        <div className="w-fit">
          <p className="text-2xl font-bold text-[#00FEE2]">WHAT WE DO</p>
          <p className="mt-3 w-full text-xs font-normal text-black lg:w-[321px] lg:text-sm">
            Learn the basics. Build a Firm Foundation | get Education through
            our Expressive Medium that Inspires creativity Learn the basics.
            Build a Firm Foundation | get Education through our Expressive
            Medium that Inspires creativity
          </p>
        </div>
        <div className="flex w-fit gap-x-5">
          <Image
            src="/images/about-online-learning.png"
            alt="online learning"
            width={144}
            height={117}
            className="object-cover md:h-[200px] md:w-[240px]"
          />
          <div className="w-max">
            <h4 className="text-2xl font-semibold text-black">
              Online learning
            </h4>
            <p className="mt-4 w-[229px] text-xs font-normal text-black lg:text-sm">
              Learn the basics. Build a Firm Foundation | get Education through
              our Expressive Medium that Inspires creativity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
