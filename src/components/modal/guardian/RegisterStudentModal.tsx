"use client";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerStudentSchema } from "@/utils/validators";
import { InputField } from "@/features/landing/components/form";
import { Toaster, toast } from "sonner";
import React from "react";
import Modal from "react-modal";
import useNoScroll from "@/components/hooks/useNoScroll";
import { registerStudentAsGuardian } from "@/mutation";
import { Button } from "@/features/landing/components/form";
import { useAllStudents } from "@/hook/swr";

interface SignupFormProps {
  fullname: string;
  username: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterStudentModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useNoScroll(isOpen);
  const { mutate } = useAllStudents();

  const methods = useForm<SignupFormProps>({
    resolver: zodResolver(registerStudentSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchedFields = methods.watch([
    "fullname",
    "username",
    "mobile",
    "password",
    "confirmPassword",
  ]);

  const allFieldsFilled = watchedFields.every((field) => Boolean(field));

  const submit: SubmitHandler<SignupFormProps> = async (data) => {
    const { fullname, username, mobile, email, password } = data;
    const [firstname, lastname] = fullname.split(" ");

    const signupData = {
      firstName: firstname,
      lastName: lastname,
      username,
      mobile,
      email,
      password,
    };

    try {
      const response = await registerStudentAsGuardian(signupData);
      if (response?.success) {
        toast.success(response?.message);
        setIsOpen(false);
        mutate();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error("An error occurred during registration");
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <Modal
        isOpen={isOpen}
        className="modal w-[298px] bg-SC-Bland px-8 pb-3 pt-5"
        overlayClassName="backdrop"
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        contentLabel="Register Student Modal"
        ariaHideApp={false}
      >
        <h2 className="segoe font-semibold text-black">Register new student</h2>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submit)} className="mt-6">
            <InputField
              name="fullname"
              placeholder="Full Name"
              className="input-field mb-4 px-4"
            />

            <InputField
              name="username"
              placeholder="Username"
              className="input-field mb-4 px-4"
            />

            <InputField
              name="mobile"
              placeholder="Phone number"
              className="input-field mb-4 px-4"
            />

            <InputField
              name="email"
              type="email"
              placeholder="Email address"
              className="input-field mb-4 px-4"
            />

            <InputField
              name="password"
              type="password"
              placeholder="Password"
              className="input-field mb-4 px-4"
            />

            <InputField
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="input-field mb-4 px-4"
            />
            <Button
              type="submit"
              content="Register"
              isDisabled={!allFieldsFilled || !methods.formState.isValid}
              loading={methods.formState.isSubmitting}
              className="font-normal lg:text-sm"
            />
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default RegisterStudentModal;
