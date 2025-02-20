import PersonalDetailsForm from "@/components/guardian/settings/personal-details-form";
import SecurityDetails from "@/components/guardian/settings/security-details";
import StudentModuleLayout from "@/components/shared/student-module-layout";
import React from "react";

export const Settings = () => {
  return (
    <>
      <StudentModuleLayout title="Account Settings">
        <PersonalDetailsForm action="edit" />
        <SecurityDetails />
      </StudentModuleLayout>
    </>
  );
};
