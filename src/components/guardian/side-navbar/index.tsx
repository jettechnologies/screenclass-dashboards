"use client";

import React, { useState } from "react";
import { SideNavbar, MobileSideNav } from "@/components/shared";
import StudentSearchModal from "@/components/modal/guardian/StudentSearchModal";

export const GuardianSideNavBar = () => {
  const sidebarItems = [
    {
      image: "/images/welcome-icons.png",
      text: "Dashboard",
      link: "/guardian",
    },
    {
      image: "/images/my-student-icon.png",
      text: "My Students",
      link: "/guardian/my-students",
    },
    {
      image: "/images/manage-students-icon.png",
      text: "Manage Students",
      link: "#",
      onClick: () => setShowSearchStudentModal(true),
    },
    {
      image: "/images/my-profile-icon.png",
      text: "My Profile",
      link: "/guardian/settings",
    },
  ];
  const [showSearchStudentModal, setShowSearchStudentModal] = useState(false);

  return (
    <>
      <SideNavbar sidebarItems={sidebarItems} />
      {/* StudentSearchModal */}
      <StudentSearchModal
        isOpen={showSearchStudentModal}
        setIsOpen={setShowSearchStudentModal}
      />
    </>
  );
};

interface GuardianMobileNavbarProps {
  setShowMobileSideNav?: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileSideNav?: boolean;
}

export const GuardianMobileNavbar = ({
  setShowMobileSideNav,
  showMobileSideNav,
}: GuardianMobileNavbarProps) => {
  const sidebarItems = [
    {
      image: "/images/welcome-icons.png",
      text: "Dashboard",
      link: "/guardian",
    },
    {
      image: "/images/my-student-icon.png",
      text: "My Students",
      link: "/guardian/my-students",
    },
    {
      image: "/images/manage-students-icon.png",
      text: "Manage Students",
      link: "/guardian/my-students",
      onClick: () => setShowSearchStudentModal(true),
    },
    {
      image: "/images/my-profile-icon.png",
      text: "My Profile",
      link: "/guardian/settings",
    },
  ];
  const [showSearchStudentModal, setShowSearchStudentModal] = useState(false);

  return (
    <>
      <MobileSideNav
        sidebarItems={sidebarItems}
        setShowMobileSideNav={setShowMobileSideNav}
        showMobileSideNav={showMobileSideNav}
      />
      <StudentSearchModal
        isOpen={showSearchStudentModal}
        setIsOpen={setShowSearchStudentModal}
      />
    </>
  );
};
