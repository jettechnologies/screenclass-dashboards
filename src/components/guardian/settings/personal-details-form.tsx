"use client";

import React, { useState, useEffect } from "react";
import { mulish } from "@/components/shared/fonts";
import Image from "next/image";
import { useGuardianProfile } from "@/hook/swr";
import { Button } from "@/features/landing/components/form";
import { updateGuardianProfile } from "@/mutation";
import { toast, Toaster } from "sonner";

interface GuardianFormData {
  lastName: string;
  firstName: string;
  email: string;
  contact: string;
}

const PersonalDetailsForm = ({ action }: { action: "read" | "edit" }) => {
  const { data, isLoading, mutate } = useGuardianProfile();
  const toastId = crypto.randomUUID();

  const [formData, setFormData] = useState<GuardianFormData>({
    lastName: "",
    firstName: "",
    email: "",
    contact: "",
  });

  useEffect(() => {
    if (!isLoading && data) {
      setFormData({
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        contact: data.mobile,
      });
    }
  }, [isLoading, data]);

  const [isEditing, setIsEditing] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    toast.success("Editing enabled", { id: toastId });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { firstName, lastName } = formData;

    try {
      const response = await updateGuardianProfile({ firstName, lastName });
      if (response?.success) {
        toast.success(response?.message || "Password reset successfully");
        mutate();
      } else {
        toast.error(response?.message || "Failed to reset password");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <form className="w-full pb-10 md:w-[80%]" onSubmit={handleSubmit}>
        <div className="mb-6 flex items-center justify-between md:mb-12">
          <h2 className="segoe text-lg font-semibold text-[#252733] md:text-xl">
            Personal Details
          </h2>
          {action === "edit" && (
            <button
              type="button"
              onClick={handleEditToggle}
              className="focus:outline-none"
            >
              <Image
                src={"/guardian/edit.svg"}
                alt="edit icon"
                width={45}
                height={45}
                className="cursor-pointer"
              />
            </button>
          )}
        </div>
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="last-name"
              className={`${mulish.className} font-bold text-black`}
            >
              LAST NAME
            </label>
            <input
              id="last-name"
              type="text"
              className={`${mulish.className} settings-input mt-1`}
              placeholder="Smith"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className={`${mulish.className} font-bold text-black`}
            >
              FIRST NAME
            </label>
            <input
              id="first-name"
              type="text"
              className={`${mulish.className} settings-input mt-1`}
              name="firstName"
              placeholder="IfeOluwa"
              value={formData.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        <label
          htmlFor="email"
          className={`${mulish.className} font-bold text-black`}
        >
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          className={`${mulish.className} settings-input mb-6 mt-1`}
          name="email"
          placeholder="emailaddress@gmail.com"
          value={formData.email}
          disabled={true}
        />
        <label
          htmlFor="phone-number"
          className={`${mulish.className} font-bold text-black`}
        >
          PHONE NUMBER
        </label>
        <input
          id="phone-number"
          type="tel"
          className={`${mulish.className} settings-input mt-1`}
          name="contact"
          placeholder="+234 900 111 2222"
          value={formData.contact}
          disabled={true}
        />
        {action === "edit" && (
          <div className="w-[108px]">
            <Button
              type="submit"
              isDisabled={isSubmitting}
              loading={isSubmitting}
              content="Save"
              className={`mt-8 rounded-lg ${mulish.className}`}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default PersonalDetailsForm;
