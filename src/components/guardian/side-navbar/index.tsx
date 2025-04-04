import { SideNavbar, MobileSideNav } from "@/components/shared";

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
    image: "/images/my-profile-icon.png",
    text: "My Profile",
    link: "/guardian/settings",
  },
];

export const GuardianSideNavBar = () => {
  return (
    <>
      <SideNavbar sidebarItems={sidebarItems} />
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
  return (
    <>
      <MobileSideNav
        sidebarItems={sidebarItems}
        setShowMobileSideNav={setShowMobileSideNav}
        showMobileSideNav={showMobileSideNav}
        position="right"
      />
    </>
  );
};
