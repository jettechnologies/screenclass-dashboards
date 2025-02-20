"use client";

import React, { useState, useEffect } from "react";
import { Navbar, MobileNavLink } from "./navbar";

const navLinks = [
  { link: "/", label: "Home" },
  { link: "/pricing", label: "Pricing" },
  { link: "/contact-us", label: "Contact Us" },
  { link: "/about-us", label: "About Us" },
  { link: "/faq", label: "FAQs" },
];

const mobileNavLinks: MobileNavLink[] = [
  { link: "/", label: "Home", icon: "/icons/home-icon.svg" },
  { link: "/pricing", label: "Pricing", icon: "/icons/pricing-icon.svg" },
  {
    link: "/contact-us",
    label: "Contact Us",
    icon: "/icons/contact-us-icon.svg",
  },
  { link: "/about-us", label: "About Us", icon: "/icons/about-us-icon.svg" },
  { link: "/faq", label: "FAQs", icon: "/icons/faq-icon.svg" },
  { link: "#", label: "Login", icon: "/icons/login-icon.svg" },
  { link: "#", label: "Sign up", icon: "/icons/sign-up-icon.svg" },
];

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
