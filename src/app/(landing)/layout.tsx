import { FooterSection } from "@/features/landing/sections/home";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-w-[screen] font-poppins">
      <main className="min-h-screen w-full">{children}</main>
      <FooterSection />

      <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
        <a
          href="https://wa.me/+2348114843934"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        >
          <Image
            src="/icons/whatsapp.png"
            alt="Chat on WhatsApp"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default Layout;
