"use client";

import React, { useState, useEffect } from "react";
import { mulish } from "@/components/shared/fonts";
import Image from "next/image";
import { Button } from "@/features/landing/components/form";
import { toast, Toaster } from "sonner";
import {
  ProfileFormData,
  Student,
  Response,
  Guardian,
} from "@/utils/validators";

interface PersonalDetailsFormProps {
  action: "read" | "edit";
  data: ProfileFormData;
  mutate: () => Promise<any>;
  isLoading: boolean;
  onSubmit: (
    formData: ProfileFormData,
  ) => Promise<Response<Guardian | Student>>;
}

export const PersonalDetailsForm = ({
  action,
  data,
  isLoading,
  mutate,
  onSubmit,
}: PersonalDetailsFormProps) => {
  const toastId = crypto.randomUUID();

  const [formData, setFormData] = useState<ProfileFormData>({
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
        contact: data.contact,
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
    toast.info("Editing enabled", { id: toastId });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        const response = await onSubmit(formData);
        console.log(response);
        if (!response.success) {
          toast.error(response?.message || "Failed to update profile");
        }

        toast.success(
          response?.message || "Users profile updated successfully",
        );
        mutate();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
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
                src={"/icons/edit.svg"}
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
