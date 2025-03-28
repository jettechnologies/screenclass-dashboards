"use client";

import { RiLogoutBoxLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { publicSans } from "./fonts";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuthActions } from "@/store";
import { toast, Toaster } from "sonner";

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
  const router = useRouter();
  const { logout } = useAuthActions();
  const toastId = crypto.randomUUID();
  const currentRoute = pathname.includes("/guardian") ? "guardian" : "student";
  const isLinkActive = (link: string): boolean => {
    if (!link) return false;

    if (pathname === link) return true;
    return false;
  };

  const handleLogout = () => {
    toast.warning("Are you sure you want to logout?", {
      id: toastId,
      cancel: (
        <button
          className="rounded-lg bg-yellow-400 px-4 py-2 text-white"
          onClick={() => {
            logout(currentRoute);
            router.push("/");
          }}
        >
          logout
        </button>
      ),
    });
  };
  return (
    <>
      <AnimatePresence>
        <Toaster richColors position="top-right" />
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
              className={`fixed inset-0 z-[999] bg-black/60 xl:hidden`}
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
              className={`fixed bottom-0 top-0 z-[1060] flex min-h-screen w-auto flex-col overflow-y-auto bg-white px-5 py-4 xl:hidden`}
              style={{ height: "100vh" }}
            >
              <div
                onClick={() => setShowMobileSideNav?.(false)}
                className={`${publicSans.className} ml-auto mr-3 cursor-pointer rounded-full px-1 py-1`}
              >
                <IoClose size={24} className="text-SC-Brand-Blue" />
              </div>

              {/* trying something */}
              <div className="flex h-full w-full flex-col justify-between">
                <ul className="flex min-h-[80%] w-full flex-col gap-y-4">
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

                    return (
                      // Link for other menu items
                      <Link
                        key={index}
                        href={item.link}
                        className="block w-full"
                      >
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
                          <p className="ml-2 text-[#082038] md:text-base">
                            {item.text}
                          </p>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
                <div
                  className="flex w-full cursor-pointer items-center gap-x-4 p-4"
                  onClick={handleLogout}
                >
                  <RiLogoutBoxLine className="h-6 w-6 text-gray-700" />
                  <p className="ml-2 text-SC-Orange md:text-base xl:text-xl">
                    Log Out
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
