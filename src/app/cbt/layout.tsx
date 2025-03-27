"use client";

import React, { useState } from "react";
import { Header, SideNav } from "@/components/cbt/nav-bar";
import { CBTDrawer } from "@/components/cbt";
import { useParams, usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams<{ id: string }>(); // Get route params like { id: '123' }
  const questionNo = parseInt(params?.id, 10);
  const pathname = usePathname();

  const isCBTWithNumber = /^\/cbt\/\d+$/.test(pathname);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="min-h-screen w-full bg-[#FFF3E9]">
      <Header />
      <main className="grid min-h-[calc(100dvh-50px)] w-full py-4">
        <div className="flex h-full w-full max-[768px]:px-4 lg:mx-auto lg:w-[80vw] xl:space-x-4">
          {!isCBTWithNumber && (
            <aside className="hidden xl:block">
              <SideNav />
            </aside>
          )}

          <div className="h-full w-full">{children}</div>
        </div>
      </main>
      <CBTDrawer
        isOpen={isModalOpen}
        onClose={toggleModal}
        timeRemaining="00:30:00"
        questionNo={questionNo}
      />
    </div>
  );
};

export default Layout;
