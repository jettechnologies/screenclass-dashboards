import React from "react";
import Dashboard from "@/features/student/Dashboard/Dashboard";
import { SideProfile } from "@/features/student/Components/Sideprofile";

export default function page() {
  return (
    <section className="lg:grid-area-['dashboard', 'sideProfile'] z-20 grid gap-x-6 lg:grid-cols-[1fr_auto]">
      <div className="lg:grid-in-dashboard">
        <Dashboard />
      </div>
      <div className="lg:grid-in-sideProfile hidden w-[337px] lg:block lg:min-h-screen">
        <SideProfile />
      </div>
    </section>
  );
}
