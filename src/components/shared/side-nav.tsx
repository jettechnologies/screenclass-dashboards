"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuthActions } from "@/store";
import { Toaster, toast } from "sonner";

interface SideNavProps {
  sidebarItems: {
    image: string;
    text: string;
    link: string;
    onClick?: () => void;
  }[];
}

export const SideNavbar = ({ sidebarItems }: SideNavProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuthActions();
  const toastId = crypto.randomUUID();

  console.log(toastId);

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
            logout("guardian");
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
      <nav className="flex h-full w-full flex-col justify-between">
        <div>
          <div className="mb-12 w-[238px] border-b-2 border-SC-Blue">
            <Image
              src="/images/screenclass-logo.png"
              alt="screenclass logo"
              width={170}
              height={32}
              className="mb-8"
            />
          </div>
          <ul className="flex w-full flex-col gap-y-4">
            <p className="text-sm font-medium leading-normal text-black">
              MENU
            </p>
            {sidebarItems.map((item, index) => {
              const isActive = isLinkActive(item.link);
              const itemClasses = `flex h-12 w-full items-center gap-x-4 rounded-s-3xl px-4 ${
                isActive ? "bg-SC-Light-orange" : "bg-transparent"
              }`;

              const iconClasses = `flex h-8 w-8 items-center justify-center rounded-full  relative ${
                isActive ? "bg-SC-Orange shadow-lg" : "bg-transparent"
              }`;

              return (
                // Link for other menu items
                <Link key={index} href={item.link} className="block w-full">
                  <li className={itemClasses}>
                    <div className={iconClasses}>
                      <Image
                        src={item.image}
                        alt={`${item.text} icon`}
                        width={24}
                        height={24}
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
        </div>
        <div
          className="flex w-fit cursor-pointer items-center gap-x-4 p-4"
          onClick={handleLogout}
        >
          <RiLogoutBoxLine className="h-6 w-6 text-gray-700" />
          <p className="ml-2 text-SC-Orange md:text-base xl:text-xl">Log Out</p>
        </div>
      </nav>
    </>
  );
};
