"use client";

import Image from "next/image";
import { sidebarItems } from "./data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuthActions } from "@/store";
import { toast, Toaster } from "sonner";

export const SideNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuthActions();
  // const { subscriptionStatus } = useAuthState();
  const isLinkActive = (link: string): boolean => {
    if (!link) return false;

    if (pathname === link) return true;
    return false;
  };

  const handleLogout = () => {
    try {
      logout("student");
      toast.success("Logged out successfully!");
      router.push("/");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to logout. Please try again.",
      );
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <nav className="h-full w-full">
        <div className="mb-12 w-[238px] border-b-2 border-SC-Blue">
          <Image
            src="/images/screenclass-logo.png"
            alt="screenclass logo"
            width={170}
            height={32}
            onClick={() => router.push("/")}
            className="mb-8 cursor-pointer"
          />
        </div>
        <ul className="mb-[180px] flex w-full flex-col gap-y-4">
          {sidebarItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <li
                className={`${isLinkActive(item.link) ? "bg-SC-Light-orange" : "bg-transparent"} flex h-12 w-full items-center gap-x-4 rounded-s-3xl px-4`}
              >
                <div
                  className={`flex h-[32px] w-[32px] items-center justify-center rounded-full ${isLinkActive(item.link) ? "bg-SC-Orange shadow-lg" : "bg-transparent"}`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.text} icon`}
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center">
                  <p className="ml-2 text-base text-[#082038]">{item.text}</p>
                  {item.isComingSoon && (
                    <p className="ml-2 text-[10px] font-medium text-SC-Orange">
                      coming soon
                    </p>
                  )}
                </div>
              </li>
            </Link>
          ))}
        </ul>

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
