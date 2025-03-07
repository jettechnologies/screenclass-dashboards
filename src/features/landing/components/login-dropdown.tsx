"use client";

import { useState } from "react";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";

type Navlink = {
  label: string;
  link: string;
};

interface LoginDropdownProps {
  title: string;
  links: Navlink[];
}

export const LoginDropdown = ({ title, links }: LoginDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative max-sm:hidden">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-full bg-SC-Orange px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-1 focus:ring-SC-Light-orange"
        type="button"
      >
        {title || "Login"}
        <LuChevronDown size={16} className="ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-md">
          <ul className="py-2 text-sm text-gray-700">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.link}
                  className="mx-2 block rounded-full px-4 py-2 focus-within:bg-SC-Light-orange focus-within:ring-2 focus-within:ring-SC-Orange hover:bg-SC-Light-orange focus:bg-SC-Light-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
