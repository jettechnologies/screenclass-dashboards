import { Navbar } from "@/features/student/Components/navbar";
import React from "react";
import Header from "./header";

function StudentModuleLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mx-auto min-h-screen max-w-[1240px]">
      <div className="mx-3 space-y-5 md:mx-7">
        <Navbar />
        <div className="bg-[#FAFAFA] min-h-screen pl-3 pr-3 md:pl-4 md:pr-4 xl:pl-9">
          <Header title={title} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default StudentModuleLayout;
