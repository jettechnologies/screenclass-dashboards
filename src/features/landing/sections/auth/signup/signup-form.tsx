"use client";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/utils";
import { InputField, Button } from "@/features/landing/components/form";
import { LuCheck } from "react-icons/lu";
import Link from "next/link"


type UserRoles = "guardian" | "student";

interface SignupFormProps {
  fullname: string;
  contact: string;
  email: string;
  password: string;
  confirmPassword: string;
  roles: UserRoles;
}

export const SignupForm = () => {
  const methods = useForm<SignupFormProps>({
    resolver: zodResolver(signupSchema),
  });

  const selectedRole = methods.watch("roles");
  const watchedFields = methods.watch([
    "fullname",
    "contact",
    "email",
    "password",
    "confirmPassword",
    "roles",
  ]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => field && field !== "");

  const submit: SubmitHandler<SignupFormProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
      <div className="w-fit px-3">
        <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
          Register
        </h3>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submit)}
            className="mt-12 flex w-fit flex-col gap-y-8"
          >
            <div className="h-[52px] w-full lg:w-[376px]">
              <InputField
                name="fullname"
                placeholder="Enter your fullname"
                inputSize="lg"
                radius={"10px"}
                className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
              />
            </div>
            <div className="h-[52px] w-full lg:w-[376px]">
              <InputField
                name="contact"
                placeholder="Phone number"
                inputSize="lg"
                radius={"10px"}
                color="#619BEB"
                className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
              />
            </div>
            <div className="h-[52px] w-full lg:w-[376px]">
              <InputField
                name="email"
                placeholder="Email address"
                inputSize="lg"
                radius={"10px"}
                className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
              />
            </div>
            <div className="h-[52px] w-full lg:w-[376px]">
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                inputSize="lg"
                radius={"10px"}
                className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
              />
            </div>
            <div className="h-[52px] w-full lg:w-[376px]">
              <InputField
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                inputSize="lg"
                radius={"10px"}
                className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
              />
            </div>
            <div className="w-full lg:w-[376px]">
              <p className="font-poppins text-xs font-normal text-black lg:text-sm">
                Select role
              </p>
              <div className="mt-6 flex w-full gap-x-8">
                {["student", "guardian"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={`flex h-[36px] items-center gap-x-4 rounded-[10px] px-[14px] py-[6px] max-[780px]:flex-1 ${
                      selectedRole === role
                        ? "bg-SC-Orange text-white"
                        : "bg-[#E3E3E3] text-black"
                    } ${methods.formState.errors.roles && "border border-red-500"}`}
                    onClick={() => methods.setValue("roles", role as UserRoles)}
                  >
                    <p className="text-[10px] font-normal capitalize lg:text-xs">
                      I am a {role}
                    </p>
                    <LuCheck size={20} color="white" />
                  </button>
                ))}
              </div>
              {methods.formState.errors.roles && (
                <p className="mt-1 text-sm text-red-500">
                  {methods.formState.errors.roles.message}
                </p>
              )}
            </div>
            <div className="mt-6 w-full lg:w-[376px]">
              <Button
                isDisabled={!allFieldsFilled || !methods.formState.isValid}
                content="Register"
              />
              <p className="mt-[10px] text-center font-poppins text-[10px] text-black">
                By registering for Screenclass, you to the{" "}
                <span className="text-SC-Orange">Terms</span> and{" "}
                <span className="text-SC-Orange">Privacy Policy.</span>
              </p>
            </div>
            <div className="flex w-full justify-center gap-x-4">
              <Link
                href="/signin"
                className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
              >
                <p className="text-[8px] font-normal text-[#131313] lg:text-xs">
                  If you have an Account?{" "}
                  <span className="ml-1 text-SC-Orange">Sign In</span>
                </p>
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
