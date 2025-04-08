"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { MobileNavLink } from "./mobile-navbar";
import { getCookie } from "cookies-next/client";
import { USER_ROLE_KEY } from "@/utils";

const getNavLinks = (userRole?: string) => {
  const baseLinks = [
    { link: "/", label: "Home" },
    { link: "/about-us", label: "About Us" },

    {
      label: "Classes",
      link: [
        { label: "primary", link: "#" },
        { label: "secondary", link: "#" },
        { label: "pre-varsity", link: "#" },
      ],
    },
    { link: "/pricing", label: "Pricing" },
    { link: "/contact-us", label: "Contact Us" },
  ];

  // Add dashboard link only if userRole exists
  if (userRole) {
    return [
      { link: "/", label: "Home" },
      { link: `/dashboard/${userRole.toLowerCase()}`, label: "Dashboard" },
      ...baseLinks.slice(1),
    ];
  }

  return baseLinks;
};

const getMobileNavLinks = (userRole?: string): MobileNavLink[] => {
  const baseLinks: MobileNavLink[] = [
    { link: "/", label: "Home", icon: "/icons/home-icon.svg" },
    {
      label: "Classes",
      icon: "/icons/class-icon.png",
      link: [
        { label: "primary", link: "#" },
        { label: "secondary", link: "#" },
        { label: "pre-varsity", link: "#" },
      ],
    },
    {
      link: "/contact-us",
      label: "Contact Us",
      icon: "/icons/contact-us-icon.svg",
    },
    { link: "/pricing", label: "Pricing", icon: "/icons/pricing-icon.svg" },
    { link: "/about-us", label: "About Us", icon: "/icons/about-us-icon.svg" },
    { link: "/faq", label: "FAQs", icon: "/icons/faq-icon.svg" },
  ];

  const authLinks: MobileNavLink[] = userRole
    ? [
        {
          link: `/dashboard/${userRole.toLowerCase()}`,
          label: "Dashboard",
          icon: "/icons/dashboard-icon.png",
        },
      ]
    : [
        {
          link: [
            { label: "student", link: "/signin/student" },
            { label: "guardian", link: "/signin/guardian" },
          ],
          label: "Login",
          icon: "/icons/login-icon.svg",
        },
        { link: "/signup", label: "Sign up", icon: "/icons/sign-up-icon.svg" },
      ];

  return [...baseLinks, ...authLinks];
};

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const userRole = getCookie(USER_ROLE_KEY);
  const navLinks = getNavLinks(userRole);
  const mobileNavLinks = getMobileNavLinks(userRole);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 91);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`w-full transition-all duration-300 ${
        isSticky ? "fixed top-0 z-50 bg-[#F6F6F6] shadow-md" : "bg-transparent"
      }`}
    >
      <Navbar
        links={navLinks}
        logoSrc={
          isSticky
            ? "/images/screenclass-logo.png"
            : "/images/screenclass-logo-white.png"
        }
        isSticky={isSticky}
        mobileLinks={mobileNavLinks}
      />
    </header>
  );
};
