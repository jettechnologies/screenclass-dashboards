import { FooterSection } from "@/features/landing/sections/home";
// import Image from "next/image";
import { WhatsAppPopover } from "@/features/landing/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-w-[screen] font-poppins">
      <main className="min-h-screen w-full">{children}</main>
      <FooterSection />
      <WhatsAppPopover />
    </div>
  );
};

export default Layout;
