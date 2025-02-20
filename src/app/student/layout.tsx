import Sidebar from "@/features/student/Components/Sidebar/Sidebar";
import { SideNav } from "@/features/student/Components/Sidebar";
import { Navbar } from "@/features/student/Components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-[100dvh] max-w-[100dvw] grid-cols-1 gap-x-6 gap-y-10 bg-[#FFF3E9] tracking-wide text-slate-900 sm:grid-rows-[auto_1fr] md:grid md:grid-cols-[auto_1fr]">
      <div className="w-full md:col-span-1 md:row-start-1">
        <Navbar />
      </div>

      <div className="sticky top-0 hidden h-[100dvh] w-[300px] overflow-auto bg-white py-6 pl-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 lg:col-start-1 lg:col-end-2 lg:row-span-full lg:block">
        <SideNav />
      </div>

      <div className="w-full p-0 md:col-start-2 md:col-end-3 md:row-start-2">
        {children}
      </div>
    </div>
  );
};

//e9f9ff

export default Layout;
