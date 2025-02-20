import { FooterSection } from "@/features/landing/sections/home";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-[screen] font-poppins">
      <main className="min-h-screen w-full">{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;
