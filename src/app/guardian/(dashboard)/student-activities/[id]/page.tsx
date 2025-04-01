import { StudentActivities } from "@/features/guardian/student-activities";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log(id);

  return (
    <>
      <StudentActivities studentId={id} />
    </>
  );
}
