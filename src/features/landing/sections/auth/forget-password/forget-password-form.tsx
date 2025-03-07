"use client";

import { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "@/features/landing/components/form";
import { forgetPasswordSchema } from "@/utils";
import { Toaster, toast } from "sonner";
import { forgetPassword } from "@/mutation";
import { useAuthSelectors } from "@/store";
import { OTPForm } from "@/features/landing/components/form/otp-form";

interface ForgetFormProps {
  resetField: string;
}

export const ForgetPasswordForm = () => {
  const { setResetPwdState } = useAuthSelectors();
  const [otpScreen, setOtpScreen] = useState(false);
  const methods = useForm<ForgetFormProps>({
    resolver: zodResolver(forgetPasswordSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchedFields = methods.watch(["resetField"]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => field && field !== "");

  const submit: SubmitHandler<ForgetFormProps> = async (data) => {
    const response = await forgetPassword({
      resetField: data.resetField,
    });

    if (response?.success) {
      toast.success(response?.message);
      setResetPwdState({ userIdentity: data.resetField });
      setTimeout(() => {
        setOtpScreen(true);
      }, 1000);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <>
      {!otpScreen ? (
        <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
          <Toaster richColors position="top-right" />
          <div className="w-fit px-3">
            <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
              Forget password
            </h3>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(submit)}
                className="mt-12 flex w-fit flex-col gap-y-8"
              >
                <div className="h-[52px] w-full lg:w-[376px]">
                  <InputField
                    name="resetField"
                    placeholder="Enter Phone Number or SCID"
                    inputSize="lg"
                    radius={"10px"}
                    className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
                  />
                </div>
                <div className="mt-6 w-full">
                  <Button
                    isDisabled={!allFieldsFilled || !methods.formState.isValid}
                    loading={methods.formState.isSubmitting}
                    content="Verify"
                  />
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      ) : (
        <OTPForm />
      )}
    </>
  );
};
