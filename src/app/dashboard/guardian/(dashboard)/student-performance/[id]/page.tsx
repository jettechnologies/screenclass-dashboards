import { StudentPerformance } from "@/features/guardian/student-performance";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <StudentPerformance studentId={id} />
    </>
  );
}
