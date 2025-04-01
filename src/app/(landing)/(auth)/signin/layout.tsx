import { SigninContent } from "@/features/landing/sections/auth/signin";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-x-10 text-white lg:flex-row overflow-x-hidden">
      <div className="min-h-[350px] w-full flex-1 py-[3rem] lg:min-h-screen">
        <SigninContent />
      </div>
      <div className="-mt-[20%] lg:-mt-0 h-full w-full flex-1 place-items-center px-8 pb-8 lg:grid lg:h-screen lg:px-14 lg:py-12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
