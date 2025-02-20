// import SideNav from "@/components/shared/sidenav";
import { GuardianSideNavBar } from "@/components/guardian/side-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row bg-[#FFF3E9] bg-no-repeat">
      <div className="hidden flex-none bg-white py-6 pl-6 xl:block h-screen xl:w-[300px]">
        <GuardianSideNavBar />
      </div>
      <div className="flex-grow overflow-y-auto">
        {children}</div>
    </div>
  );
}
