import Students from "@/components/guardian/my-students/students";
import StudentModuleLayout from "@/components/shared/student-module-layout";
import React from "react";

export const MyStudents = () => {
  return (
    <>
      <StudentModuleLayout title="My Students">
        <Students />
      </StudentModuleLayout>
    </>
  );
};
