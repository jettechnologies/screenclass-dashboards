import React from "react";
import Dashboard from "@/features/student/Dashboard/Dashboard";
import { SideProfile } from "@/features/student/Components/Sideprofile";

interface DashboardPageProps {
  searchParams: Promise<{
    status?: "error" | "success" | "unpaid";
  }>;
}

export default async function page({ searchParams }: DashboardPageProps) {
  const { status } = await searchParams;

  return (
    <section className="lg:grid-area-['dashboard', 'sideProfile'] z-20 grid gap-x-6 lg:grid-cols-[1fr_auto]">
      <div className="lg:grid-in-dashboard">
        <Dashboard paymentStatus={status} />
      </div>
      <div className="lg:grid-in-sideProfile hidden w-[337px] lg:block lg:min-h-screen">
        <SideProfile />
      </div>
    </section>
  );
}
