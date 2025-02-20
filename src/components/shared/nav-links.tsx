"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DashboardIcon from "../../../public/guardian/dashboard-icon.svg";
import StudentsIcon from "../../../public/guardian/people-icon.svg";
import ManageStudentsIcon from "../../../public/guardian/manage-students-icon.svg";
import ProfileIcon from "../../../public/guardian/profile-icon.svg";
import { publicSans } from "./fonts";
import { usePathname } from "next/navigation";
import StudentSearchModal from "../modal/guardian/StudentSearchModal";

const links = [
  {
    id: 1,
    name: "Dashboard",
    href: "/guardian",
    iconSrc: DashboardIcon,
    type: "link",
  },
  {
    id: 2,
    name: "My Students",
    href: "/guardian/my-students",
    iconSrc: StudentsIcon,
    type: "link",
  },
  {
    id: 3,
    name: "Manage Students",
    href: "#",
    iconSrc: ManageStudentsIcon,
    type: "button",
  },
  {
    id: 4,
    name: "My Profile",
    href: "/guardian/settings",
    iconSrc: ProfileIcon,
    type: "link",
  },
];

const Navlinks = () => {
  const [showSearchStudentModal, setShowSearchStudentModal] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <StudentSearchModal
        isOpen={showSearchStudentModal}
        setIsOpen={setShowSearchStudentModal}
      />
      <div className="flex flex-col gap-8 pl-6 xl:gap-10">
        {links.map((link) =>
          link.type === "link" ? (
            <Link
              key={link.id}
              href={link.href}
              className="flex items-center gap-8"
            >
              <Image
                src={link.iconSrc}
                alt={link.name}
                width={24}
                height={24}
              />
              <p
                className={`${publicSans.className} text-base xl:text-xl ${link.href.endsWith(pathname) ? "font-bold" : "font-normal"} pr-2`}
              >
                {link.name}
              </p>
              {link.href === pathname && (
                <div className="ml-auto h-[30px] w-[3px] bg-SC-Deep-Blue" />
              )}
            </Link>
          ) : (
            <button
              onClick={() => setShowSearchStudentModal(true)}
              key={link.id}
              className="flex items-center gap-8"
            >
              <Image
                src={link.iconSrc}
                alt={link.name}
                width={24}
                height={24}
              />
              <p
                className={`${publicSans.className} pr-2 text-base font-normal xl:text-xl`}
              >
                {link.name}
              </p>
            </button>
          ),
        )}
        {/* logout */}
        <div className="flex items-center gap-8 lg:hidden">
          <Image
            src={"/guardian/logout-icon.svg"}
            alt="logout"
            width={30}
            height={30}
            className="h-6 w-6"
          />
          <p
            className={`${publicSans.className} pr-2 text-base font-normal xl:text-xl`}
          >
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Navlinks;
