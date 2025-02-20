"use client";

import Image from "next/image";
import { sidebarItems } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiLogoutBoxLine } from "react-icons/ri";

export const SideNav = () => {
  const pathname = usePathname();
  const isLinkActive = (link: string): boolean => {
    if (!link) return false;

    // if (pathname.includes(link)) return true;
    if (pathname === link) return true;
    return false;
  };

  return (
    <nav className="h-full w-full">
      <div className="mb-12 w-[238px] border-b-2 border-SC-Blue">
        <Image
          src="/guardian/screenclass-logo.svg"
          alt="screenclass logo"
          width={170}
          height={32}
          className="mb-8"
        />
      </div>
      <ul className="mb-[180px] flex w-full flex-col gap-y-4">
        <p className="text-sm font-medium leading-normal text-black">MENU</p>
        {sidebarItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <li
              className={`${isLinkActive(item.link) ? "bg-SC-Light-orange" : "bg-transparent"} flex h-12 w-full items-center gap-x-4 rounded-s-3xl px-4`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${isLinkActive(item.link) ? "bg-SC-Orange shadow-lg" : "bg-transparent"}`}
              >
                <Image
                  src={item.image}
                  alt={`${item.text} icon`}
                  className="h-auto w-auto"
                />
              </div>
              <p className="ml-2 text-[#082038] md:text-base xl:text-xl">
                {item.text}
              </p>
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex w-full items-center gap-x-4 p-4">
        <RiLogoutBoxLine className="h-6 w-6 text-gray-700" />
        <p className="ml-2 text-SC-Orange md:text-base xl:text-xl">Log Out</p>
      </div>
    </nav>
  );
};
