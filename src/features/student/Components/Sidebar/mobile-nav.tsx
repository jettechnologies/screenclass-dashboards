import { sidebarItems } from "./data";
import { MobileSideNav } from "@/components/shared";

interface MobileSideNavProps {
  setShowMobileSideNav?: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileSideNav?: boolean;
}

export const StudentMobileNav = ({
  showMobileSideNav,
  setShowMobileSideNav,
}: MobileSideNavProps) => {
  return (
    <MobileSideNav
      sidebarItems={sidebarItems}
      setShowMobileSideNav={setShowMobileSideNav}
      showMobileSideNav={showMobileSideNav}
      position="right"
    />
  );
};
