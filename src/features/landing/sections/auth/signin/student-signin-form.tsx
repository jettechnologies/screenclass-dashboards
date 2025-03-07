"use client";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "@/features/landing/components/form";
import { signinSchema } from "@/utils/validators";
import Link from "next/link";
import { studentSignin } from "@/mutation";
import { useAuthSelectors } from "@/store";
import { Toaster, toast } from "sonner";
import { redirect } from "next/navigation";

interface SigninFormProps {
  identifier: string;
  password: string;
}

export const StudentSigninForm = () => {
  const { setAccessToken } = useAuthSelectors();
  const methods = useForm<SigninFormProps>({
    resolver: zodResolver(signinSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchedFields = methods.watch(["identifier", "password"]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => field && field !== "");

  const submit: SubmitHandler<SigninFormProps> = async (data) => {
    const response = await studentSignin(data);

    if (response?.success) {
      toast.success(response?.message);
      const accessToken = response?.data;
      setAccessToken(accessToken, "student");
      redirect("/student");
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <>
      <Toaster duration={2000} position="top-right" richColors />

      <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
        <div className="w-fit px-3">
          <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
            Login
          </h3>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(submit)}
              className="mx-auto mt-12 flex w-fit flex-col gap-y-8"
            >
              <div className="h-[52px] w-full lg:w-[376px]">
                <InputField
                  name="identifier"
                  placeholder="Phone number or SSCID"
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
                    href="/forget-password"
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
                  loading={methods.formState.isSubmitting}
                  content="login"
                />
              </div>
            </form>
          </FormProvider>
          <div className="mt-4 flex w-full justify-center gap-x-4">
            <Link
              href="/signup"
              className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
            >
              <p className="text-[8px] font-normal text-[#131313] lg:text-xs">
                If you have an Account?{" "}
                <span className="ml-1 text-SC-Orange">Sign up</span>
              </p>
            </Link>
            <Link
              href="/signin/guardian"
              className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
            >
              <p className="text-[8px] font-normal text-[#131313] lg:text-xs">
                Have a guardian account?
                <span className="ml-1 text-SC-Orange">Sign in</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
