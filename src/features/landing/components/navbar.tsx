"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { MobileNavBar } from "./mobile-navbar";

interface NavLink {
  label: string;
  link: string;
}

export interface MobileNavLink extends NavLink {
  icon: string;
}

interface NavbarProps {
  logoSrc: string;
  brandName?: string;
  links: NavLink[];
  mobileLinks: MobileNavLink[];
  isSticky?: boolean;
}

export function Navbar({
  logoSrc,
  brandName,
  links,
  isSticky,
  mobileLinks,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="z-20 w-full">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4 px-8 lg:px-14">
          <Link
            href="/"
            className="relative flex h-[19px] w-[92px] items-center space-x-3 lg:h-[41px] lg:w-[200px]"
          >
            <Image
              src={logoSrc}
              fill
              priority
              sizes="(max-width: 1444px): 100vw, (max-width: 428px): 40vw"
              className="h-8"
              alt="Logo"
            />
            {brandName && (
              <span className="self-center whitespace-nowrap text-2xl font-semibold">
                {brandName}
              </span>
            )}
          </Link>

          <div className="flex space-x-3 md:order-2 md:space-x-0">
            <Link
              href="/signin"
              className="hidden rounded-[100px] bg-SC-Orange px-6 py-2 text-center text-lg font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-600 md:block"
            >
              Login
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm ${isSticky ? "text-SC-Brand-Blue" : "text-white"} focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden`}
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.link}
                    className={`${isSticky ? "text-SC-Nav-Blue hover:text-SC-Nav-Blue" : "text-white hover:text-white"} block rounded-sm px-3 py-2 text-sm md:p-0 md:hover:bg-transparent lg:text-base`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile nav bar */}
      <MobileNavBar
        navLinks={mobileLinks}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
