"use client";

import { RiLogoutBoxLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { inter, publicSans } from "./fonts";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface SideNavProps {
  sidebarItems: {
    image: string | StaticImageData;
    text: string;
    link: string;
    onClick?: () => void;
  }[];
  position?: "left" | "right";
  setShowMobileSideNav?: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileSideNav?: boolean;
}

export const MobileSideNav = ({
  sidebarItems,
  position = "left",
  showMobileSideNav,
  setShowMobileSideNav,
}: SideNavProps) => {
  const pathname = usePathname();
  const isLinkActive = (link: string): boolean => {
    if (!link) return false;

    if (pathname.includes(link)) return true;
    return false;
  };
  return (
    <>
      <AnimatePresence>
        {showMobileSideNav && (
          <motion.div>
            {/* mobile sidebar backdrop */}
            <motion.div
              initial={
                position === "left" ? { left: "-100%" } : { right: "-100%" }
              }
              animate={position === "left" ? { left: 0 } : { right: 0 }}
              exit={
                position === "left" ? { left: "-100%" } : { right: "-100%" }
              }
              transition={{ duration: 0.5 }}
              className={`fixed inset-0 z-10 bg-black/60 xl:hidden`}
            ></motion.div>
            {/* mobile sidebar */}
            <motion.div
              initial={
                position === "left" ? { left: "-100%" } : { right: "-100%" }
              }
              animate={position === "left" ? { left: 0 } : { right: 0 }}
              exit={
                position === "left" ? { left: "-100%" } : { right: "-100%" }
              }
              transition={{ duration: 0.5 }}
              className={`fixed bottom-0 top-0 z-20 flex min-h-screen w-auto flex-col overflow-y-auto bg-white px-5 py-4 xl:hidden`}
              style={{ height: "100vh" }}
            >
              <div
                onClick={() => setShowMobileSideNav?.(false)}
                className={`${publicSans.className} ml-auto mr-3 cursor-pointer rounded-full px-1 py-1`}
              >
                <IoClose size={24} className="text-SC-Brand-Blue" />
              </div>

              {/* trying something */}
              <ul className="mb-[180px] flex w-full flex-col gap-y-4">
                <p className="text-xs font-medium leading-normal text-black">
                  MENU
                </p>
                {sidebarItems.map((item, index) => {
                  const isActive = isLinkActive(item.link);
                  const itemClasses = `flex h-12 w-full items-center gap-x-4 rounded-3xl px-4 ${
                    isActive ? "bg-SC-Light-orange" : "bg-transparent"
                  }`;

                  const iconClasses = `flex h-8 w-8 items-center justify-center rounded-full relative ${
                    isActive ? "bg-SC-Orange" : "bg-transparent"
                  }`;

                  return item.text === "Manage Students" ? (
                    // Button for managing students (Triggers Modal)
                    <button
                      key={index}
                      className="w-full bg-transparent hover:bg-none focus:outline-none"
                      onClick={item.onClick}
                    >
                      <li className={itemClasses}>
                        <div className={iconClasses}>
                          <Image
                            src={item.image}
                            alt={`${item.text} icon`}
                            height={24}
                            width={24}
                            // className="h-5 w-5 object-cover"
                          />
                        </div>
                        <p className="ml-2 text-[#082038] md:text-base xl:text-xl">
                          {item.text}
                        </p>
                      </li>
                    </button>
                  ) : (
                    // Link for other menu items
                    <Link key={index} href={item.link} className="block w-full">
                      <li className={itemClasses}>
                        <div className={iconClasses}>
                          <Image
                            src={item.image}
                            alt={`${item.text} icon`}
                            width={24}
                            height={24}
                            // className="h-5 w-5 object-cover"
                          />
                        </div>
                        <p className="ml-2 text-[#082038] md:text-base xl:text-xl">
                          {item.text}
                        </p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <div className="flex w-full items-center gap-x-4 p-4">
                <RiLogoutBoxLine className="h-6 w-6 text-gray-700" />
                <p className="ml-2 text-SC-Orange md:text-base xl:text-xl">
                  Log Out
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
