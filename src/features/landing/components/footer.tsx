import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full pt-5">
      <div className="mx-auto mb-6 max-w-screen-xl px-8 md:mb-0 xl:px-0">
        <Link href="/" className="w-fit">
          <Image
            src="/images/screenclass-logo-white.png"
            alt="screenclass logo"
            width={77}
            height={17}
            className="object-cover md:h-[25px] md:w-[150px] lg:h-[40px] lg:w-[200px]"
          />
        </Link>
      </div>
      <div className="mx-auto mt-4 grid max-w-screen-xl grid-cols-[auto_auto] justify-between gap-8 px-8 sm:gap-6 lg:grid-cols-[auto_auto_auto_auto] xl:px-0">
        <div className="flex w-[159px] flex-col gap-y-8 md:w-[250px] lg:w-[323px]">
          <p className="text-xs font-medium text-white md:text-base lg:text-base">
            A product of{" "}
            <span className="font-semibold">
              Martad Education & Skills Development LTD.
            </span>
          </p>
          <p className="text-xs font-medium text-white md:text-base lg:text-base">
            3B, Alegbe Close, Mende Maryland, Lagos, Nigeria.
          </p>
        </div>
        <div className="flex w-fit flex-col gap-y-4">
          <h5 className="text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
            Explore
          </h5>
          <ul className="flex flex-col gap-y-4 font-medium text-gray-500">
            <li>
              <Link
                href="/about-us"
                className="text-xs font-medium text-white sm:text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-xs font-medium text-white sm:text-sm"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-xs font-medium text-white sm:text-sm"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-fit flex-col gap-y-4">
          <h5 className="text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
            Contact Us
          </h5>
          <ul className="flex flex-col gap-y-4 font-medium text-gray-500">
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                +234 704 330 300
              </p>
            </li>
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                +234 809 293 3330
              </p>
            </li>
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                info@screenclass.com
              </p>
            </li>
          </ul>
        </div>
        <div className="flex w-fit flex-col gap-y-4">
          <h5 className="text-xs font-semibold uppercase text-white sm:text-sm lg:text-lg">
            Features
          </h5>
          <ul className="flex flex-col gap-y-4 font-medium text-gray-500">
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                Primary
              </p>
            </li>
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                Secondary
              </p>
            </li>
            <li>
              <p className="text-xs font-medium text-white sm:text-sm">
                Pre-varsity
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-2 h-[1px] w-full bg-white" />
      <div className="max-screen-xl mx-auto mt-4 w-full px-8 xl:px-0">
        <p className="text-center text-[10px] text-white sm:text-xs">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            Screenclass
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
