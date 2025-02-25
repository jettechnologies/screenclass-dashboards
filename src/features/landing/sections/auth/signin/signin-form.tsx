"use client";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "@/features/landing/components/form";
import { signinSchema } from "@/utils";
import Image from "next/image";
import Link from "next/link";

interface SigninFormProps {
  fullname: string;
  password: string;
}

export const SigninForm = () => {
  const methods = useForm<SigninFormProps>({
    resolver: zodResolver(signinSchema),
  });

  const watchedFields = methods.watch(["fullname", "password"]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => field && field !== "");

  const submit: SubmitHandler<SigninFormProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
      <div className="w-fit px-3">
        <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
          Login
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
                name="password"
                type="password"
                placeholder="Password"
                inputSize="lg"
                radius={"10px"}
                className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
              />
              <div className="mt-1 flex w-full justify-end">
                <Link
                  href="/reset-password"
                  className="font-poppins text-sm font-normal text-SC-Brand-Blue"
                >
                  {" "}
                  Forget Password
                </Link>
              </div>
            </div>
            <div className="mt-6 w-full lg:w-[376px]">
              <Button
                isDisabled={!allFieldsFilled || !methods.formState.isValid}
                content="login"
              />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              <Link
                href="/signup"
                className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
              >
                <p className="text-[8px] font-normal text-[#131313] lg:text-xs">
                  If you have an Account?{" "}
                  <span className="ml-1 text-SC-Orange">Sign up</span>
                </p>
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
