"use client";

import { PersonalDetailsForm, SecurityDetails } from "@/components/shared";
import StudentModuleLayout from "@/components/shared/student-module-layout";
import React from "react";
import { useGuardianProfile } from "@/hook/swr";
import { updateGuardianProfile } from "@/mutation";
import { ProfileFormData } from "@/utils/validators";

export const Settings = () => {
  const { data, isLoading, mutate } = useGuardianProfile();

  const transformedData = {
    firstName: data?.firstName ?? "",
    lastName: data?.lastName ?? "",
    email: data?.email ?? "",
    contact: data?.mobile ?? "",
  };

  const handleSubmit = async (formData: ProfileFormData) => {
    const { firstName, lastName } = formData;
    const response = await updateGuardianProfile({ firstName, lastName });

    if (!response?.success) {
      throw new Error(response?.message || "Failed to update profile");
    }
    return response;
  };

  return (
    <>
      <StudentModuleLayout>
        <PersonalDetailsForm
          action="edit"
          data={transformedData}
          isLoading={isLoading}
          mutate={mutate}
          onSubmit={handleSubmit}
        />
        <SecurityDetails />
      </StudentModuleLayout>
    </>
  );
};
