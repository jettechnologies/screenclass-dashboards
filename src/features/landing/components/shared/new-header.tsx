"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const navLinks: { link: string; label: string; subLinks?: string[] }[] = [
  { link: "/", label: "Home" },
  { link: "/dashboard", label: "Dashboard" },
  {
    link: "/classes",
    label: "Classes",
    subLinks: ["Primary", "Secondary", "Pre-Varsity"],
  },
  { link: "/pricing", label: "Pricing" },
  { link: "/about-us", label: "About Us" },
];

const loginNavLinks = [
    { label: "student", link: "/signin/student" },
    { label: "guardian", link: "/signin/guardian" },
  ];

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 91);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-0 z-50 bg-[#F6F6F6] shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="z-20 flex h-[90px] w-full items-center justify-between px-8 lg:px-14">
          <div className="">
            <Link
              href="/"
              className="relative flex h-[19px] w-[92px] items-center space-x-3 lg:h-[41px] lg:w-[200px]"
            >
              <Image
                src={
                  isSticky
                    ? "/images/screenclass-logo.png"
                    : "/images/screenclass-logo-white.png"
                }
                fill
                priority
                sizes="(max-width: 1444px): 100vw, (max-width: 428px): 40vw"
                className="h-8"
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="flex items-center gap-[50px]">
            {navLinks.map((navLink) => (
              <li key={navLink.label} className={``}>
                <Link
                  href={navLink.link}
                  className={`${isSticky ? "text-black hover:text-SC-Orange" : "text-white hover:text-SC-Orange"} font-poppins text-lg font-medium`}
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* dropdown button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex h-[52px] w-[176px] items-center justify-center rounded-[100px] border border-SC-Orange font-poppins text-lg font-medium ${isSticky ? "text-black" : "text-white"} hover:bg-SC-Orange hover:text-white`}
              >
                Login
                <LuChevronDown size={18} className="ml-2" />
              </button>
              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-md">
                  <ul className="py-2 text-sm text-gray-700">
                    {loginNavLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.link}
                          className="mx-2 block rounded-full px-4 py-2 capitalize focus-within:bg-SC-Light-orange focus-within:ring-2 focus-within:ring-SC-Orange hover:bg-SC-Light-orange focus:bg-SC-Light-orange"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
                      </div>
                      <button className={`-[52px] w-[176px]`}>Sign Up</button>
          </div>
        </nav>
      </header>
    </>
  );
};
