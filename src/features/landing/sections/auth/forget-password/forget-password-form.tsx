"use client";

import { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "@/features/landing/components/form";
import { forgetPasswordSchema } from "@/utils";
import { Toaster, toast } from "sonner";
import { forgetPassword } from "@/mutation";
import { useAuthActions } from "@/store";
import { OTPForm } from "@/features/landing/components/form/otp-form";

interface ForgetFormProps {
  resetField: string;
}

export const ForgetPasswordForm = () => {
  const { setResetPwdState } = useAuthActions();
  const [otpScreen, setOtpScreen] = useState(false);
  const methods = useForm<ForgetFormProps>({
    resolver: zodResolver(forgetPasswordSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const toastId = crypto.randomUUID();

  const watchedFields = methods.watch(["resetField"]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => field && field !== "");

  const submit: SubmitHandler<ForgetFormProps> = async (data) => {
    const { resetField } = data;
    const isPhone = /^\d{11}$/.test(resetField);
    const newResetField = isPhone
      ? `234${resetField.substring(1)}`
      : resetField;
    const response = await forgetPassword({
      resetField: newResetField,
    });

    if (response?.success) {
      toast.success(response?.message, {
        id: toastId,
      });
      setResetPwdState({ userIdentity: newResetField });
      setTimeout(() => {
        setOtpScreen(true);
      }, 1000);
    } else {
      toast.error(response?.message, {
        id: toastId,
      });
    }
  };

  return (
    <>
      {!otpScreen ? (
        <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
          <Toaster richColors position="top-right" />
          <div className="w-full px-3 md:w-fit">
            <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
              Forget password
            </h3>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(submit)}
                className="mt-12 flex w-full flex-col gap-y-8 md:w-fit md:min-w-[350px]"
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
                    type="submit"
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
