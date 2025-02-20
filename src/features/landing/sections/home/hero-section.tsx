import Image from "next/image";
import { Header } from "../../components";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="min-h-fit w-full bg-bg-index-one bg-cover bg-center bg-no-repeat max-sm:relative">
      <Header />
      {/* Info Section */}
      <div className="flex min-h-[calc(100dvh-83px)] w-full flex-col px-8 lg:flex-row xl:px-[3.5rem]">
        {/* Left Content */}
        <div className="flex min-h-full w-full flex-col justify-center gap-y-6 lg:w-fit xl:w-[50%]">
          <div className="w-full text-white">
            <h2 className="text wrap font-Poppins w-full max-w-[500px] text-[30px] font-bold text-white md:text-[40px]">
              Entertaining Approach to Learning!
            </h2>
            <h4 className="text-base font-semibold leading-none md:text-xl">
              Quality Basic Education skillfully delivered
            </h4>
          </div>

          {/* Buttons */}
          <div className="flex w-full max-w-[356px] gap-x-4 lg:justify-center">
            <Link
              href="/signup"
              className="rounded-lg bg-SC-Orange px-4 py-2 font-poppins text-sm font-medium uppercase text-white md:px-6 md:py-4 lg:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/signin"
              className="block w-[122px] rounded-lg bg-SC-Nav-Blue px-4 py-2 text-center text-sm font-medium capitalize text-white md:hidden"
            >
              Login
            </Link>
          </div>

          {/* Download Buttons */}
          <div className="bottom-8 left-8 z-20 flex w-fit gap-x-4 max-[780px]:absolute">
            {[
              {
                src: "/images/google-play-icon.png",
                label: "Google Play",
              },
              {
                src: "/images/apple-play-icon.png",
                label: "App Store",
              },
            ].map((item, index) => (
              <button
                key={index}
                className="flex h-[32px] w-[105px] items-center gap-x-2 rounded-xl border border-white bg-[#0E0E0E] px-3 py-2 md:h-[56px] md:w-[170px]"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={14}
                  height={14}
                  className="object-contain md:h-[24px] md:w-[24px]"
                />
                <div className="flex-1 text-white">
                  <p className="text-[6px] font-light md:text-xs">
                    Available on the
                  </p>
                  <p className="text-[9px] font-semibold md:text-base">
                    {item.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex min-h-full w-full flex-1 justify-end lg:w-[50%]">
          <Image
            src="/images/studentt 1.png"
            alt="hero image"
            width={318}
            height={322}
            className="object-cover md:h-full md:w-full"
            style={{ height: "auto" }}
            sizes="(max-width: 1440px): 100vw, (max-width:780px): 50vw"
          />
        </div>
      </div>
    </div>
  );
};
