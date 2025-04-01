"use client";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "@/features/landing/components/form";
import { resetPasswordSchema } from "@/utils";
import { resetPassword } from "@/mutation";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";

interface ResetFormProps {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm = () => {
  const router = useRouter();
  const toastId = crypto.randomUUID();

  const methods = useForm<ResetFormProps>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const watchedFields = methods.watch(["password", "confirmPassword"]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => field && field !== "");

  const onSubmit: SubmitHandler<ResetFormProps> = async (data) => {
    try {
      const resetPwdState = useAuthStore.getState().resetPwdState;
      // console.log("Form submitted with:", data, resetPwdState);

      if (!resetPwdState.otp || !resetPwdState.userIdentity) {
        toast.error("Missing OTP or user identity");
        return;
      }

      const dataToSend = {
        otp: resetPwdState.otp,
        userIdentity: resetPwdState.userIdentity,
        newPassword: data.password,
      };

      const response = await resetPassword(dataToSend);

      if (response?.success) {
        toast.success(response?.message || "Password reset successfully", {
          id: toastId,
        });
        setTimeout(() => {
          router.push("/reset-password");
        }, 1500);
      } else {
        toast.error(response?.message || "Failed to reset password", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Reset password error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <>
      <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
        <Toaster richColors position="top-right" />

        <div className="w-full px-3 md:w-fit">
          <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
            Reset password
          </h3>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="mt-12 flex w-full flex-col gap-y-8 md:w-fit md:min-w-[350px]"
            >
              <div className="h-[52px] w-full lg:w-[376px]">
                <InputField
                  name="password"
                  type="password"
                  placeholder="Enter a new password"
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
              <div className="mt-6 w-full">
                <Button
                  type="submit"
                  isDisabled={!allFieldsFilled || !methods.formState.isValid}
                  loading={methods.formState.isSubmitting}
                  content="reset password"
                />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};
