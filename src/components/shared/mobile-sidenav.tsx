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
    isComingSoon?: boolean;
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
      <Toaster richColors position="top-right" />

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
                            {item.isComingSoon && (
                              <p className="ml-2 text-[10px] font-medium text-SC-Orange">
                                coming soon
                              </p>
                            )}
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

// "use client";

// import { RiLogoutBoxLine } from "react-icons/ri";
// import { publicSans } from "./fonts";
// import Image from "next/image";
// import Link from "next/link";
// import type { StaticImageData } from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuthActions } from "@/store";
// import { toast, Toaster } from "sonner";
// import { Drawer } from "./drawer";

// interface SideNavProps {
//   sidebarItems: {
//     image: string | StaticImageData;
//     text: string;
//     link: string;
//     onClick?: () => void;
//     isComingSoon?: boolean;
//   }[];
//   position?: "left" | "right";
//   setShowMobileSideNav?: React.Dispatch<React.SetStateAction<boolean>>;
//   showMobileSideNav?: boolean;
// }

// export const MobileSideNav = ({
//   sidebarItems,
//   position = "left",
//   showMobileSideNav,
//   setShowMobileSideNav,
// }: SideNavProps) => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { logout } = useAuthActions();
//   const currentRoute = pathname.includes("/guardian") ? "guardian" : "student";

//   const isLinkActive = (link: string): boolean => pathname === link;

//   const handleLogout = () => {
//     toast.warning("Are you sure you want to logout?", {
//       action: {
//         label: "Logout",
//         onClick: () => {
//           logout(currentRoute);
//           router.push("/");
//         },
//       },
//       cancel: {
//         label: "Cancel",
//         onClick: () => {},
//       },
//     });
//   };

//   return (
//     <>
//       <Toaster richColors position="top-right" />

//       <Drawer
//         isOpen={showMobileSideNav || false}
//         onClose={() => setShowMobileSideNav?.(false)}
//         position={position}
//         drawerTitle="MENU"
//       >
//         <div className="flex h-full flex-col justify-between">
//           <ul className="space-y-2">
//             {sidebarItems.map((item, index) => {
//               const isActive = isLinkActive(item.link);
//               return (
//                 <Link key={index} href={item.link} passHref>
//                   <li
//                     className={`flex items-center gap-3 rounded-3xl p-3 ${isActive ? "bg-SC-Light-orange" : ""}`}
//                   >
//                     <div
//                       className={`flex h-8 w-8 items-center justify-center rounded-full ${isActive ? "bg-SC-Orange" : ""}`}
//                     >
//                       <Image
//                         src={item.image}
//                         alt={`${item.text} icon`}
//                         width={24}
//                         height={24}
//                       />
//                     </div>
//                     <span className="text-[#082038]">
//                       {item.text}
//                       {item.isComingSoon && (
//                         <span className="ml-2 text-xs text-SC-Orange">
//                           coming soon
//                         </span>
//                       )}
//                     </span>
//                   </li>
//                 </Link>
//               );
//             })}
//           </ul>

//           <div
//             className="flex cursor-pointer items-center gap-3 p-3"
//             onClick={handleLogout}
//           >
//             <RiLogoutBoxLine className="text-gray-700" />
//             <span className="text-SC-Orange">Log Out</span>
//           </div>
//         </div>
//       </Drawer>
//     </>
//   );
// };
