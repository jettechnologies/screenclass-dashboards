import Students from "@/components/guardian/my-students/students";
// import StudentModuleLayout from "@/components/shared/student-module-layout";
import React from "react";

export const MyStudents = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pl-3 pr-3 pt-6 md:pl-4 md:pr-4 xl:pl-9">
      {/* <StudentModuleLayout> */}
      <Students />
      {/* </StudentModuleLayout> */}
    </div>
  );
};
