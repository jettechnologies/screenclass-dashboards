import { Header } from "./header";
import React from "react";

function StudentModuleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-[1240px]">
      <div className="w-full space-y-5 max-sm:mx-3">
        <Header />
        <div className="min-h-screen bg-[#FAFAFA] pl-3 pr-3 pt-6 md:pl-4 md:pr-4 xl:pl-9">
          {children}
        </div>
      </div>
    </div>
  );
}

export default StudentModuleLayout;
